import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILES = 5;
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
const MAX_TOTAL_SIZE = 30 * 1024 * 1024; // 30 MB

const ALLOWED_MIME_TYPES = new Set([
  "image/png",
  "image/jpeg",
  "image/jpg",
  "application/pdf",
  "application/zip",
  "application/x-zip-compressed",
]);

const ALLOWED_EXTENSIONS = new Set(["png", "jpg", "jpeg", "pdf", "zip"]);

/**
 * Dosya Magic Byte (Binary İmza) Doğrulaması
 */
function validateMagicBytes(buffer: Buffer, declaredType: string, extension: string): boolean {
  if (buffer.length < 4) return false;

  const isPng =
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47;

  const isJpeg =
    buffer[0] === 0xff &&
    buffer[1] === 0xd8 &&
    buffer[2] === 0xff;

  const isPdf =
    buffer[0] === 0x25 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x44 &&
    buffer[3] === 0x46;

  const isZip =
    buffer[0] === 0x50 &&
    buffer[1] === 0x4b &&
    (buffer[2] === 0x03 || buffer[2] === 0x05 || buffer[2] === 0x07);

  if (extension === "png" && isPng && declaredType === "image/png") return true;
  if ((extension === "jpg" || extension === "jpeg") && isJpeg && (declaredType === "image/jpeg" || declaredType === "image/jpg")) return true;
  if (extension === "pdf" && isPdf && declaredType === "application/pdf") return true;
  if (extension === "zip" && isZip && (declaredType === "application/zip" || declaredType === "application/x-zip-compressed")) return true;

  return false;
}

/**
 * HTML Escaping
 */
function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Header CRLF Sanitization
 */
function sanitizeHeader(str: string): string {
  if (!str) return "";
  return str.replace(/[\r\n\t]/g, " ").trim();
}

/**
 * Path Traversal & Filename Sanitization
 */
function sanitizeFilename(filename: string): string {
  const baseName = filename.replace(/^.*[\\/]/, "");
  return baseName.replace(/[^a-zA-Z0-9._-]/g, "_").substring(0, 100);
}

const inquirySchema = z.object({
  name: z.string().trim().min(2, "İsim en az 2 karakter olmalıdır.").max(100, "İsim çok uzun."),
  email: z.string().trim().email("Geçerli bir e-posta adresi giriniz.").max(150, "E-posta çok uzun."),
  website: z.string().trim().max(200, "Website çok uzun.").optional().or(z.literal("")),
  launchDate: z.string().trim().max(100, "Tarih bilgisi çok uzun.").optional().or(z.literal("")),
  service: z.string().trim().max(120, "Hizmet seçimi geçersiz."),
  budget: z.string().trim().max(100, "Bütçe seçimi geçersiz."),
  requireNDA: z.preprocess((val) => val === true || val === "true" || val === "on", z.boolean()),
  message: z.string().trim().min(5, "Mesaj en az 5 karakter olmalıdır.").max(5000, "Mesaj 5000 karakteri geçemez."),
  hp_website_check: z.string().optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  try {
    // 1. STRICT EXACT ORIGIN VALIDATION (Bypass Engelleme)
    const origin = req.headers.get("origin");
    const host = req.headers.get("host");

    if (origin) {
      let originHost = "";
      try {
        originHost = new URL(origin).host;
      } catch {
        return NextResponse.json(
          { error: "Invalid origin header." },
          { status: 403 }
        );
      }

      // İzin verilen tam alan adları (Strict Allowlist)
      const allowedHosts = new Set([
        "aivienne.com",
        "www.aivienne.com",
      ]);

      // Sadece geliştirme ortamında localhost ve 127.0.0.1 kabul edilir
      if (process.env.NODE_ENV !== "production") {
        allowedHosts.add("localhost:3000");
        allowedHosts.add("127.0.0.1:3000");
      }

      // Sunucu host başlığı ile eşleşmeyi de ekle (Vercel preview URL'leri için)
      if (host) {
        allowedHosts.add(host);
      }

      // Tam eşleşme kontrolü (evil-aivienne.com kesinlikle engellenir)
      if (!allowedHosts.has(originHost)) {
        return NextResponse.json(
          { error: "Unauthorized cross-origin request." },
          { status: 403 }
        );
      }
    }

    // 2. Content-Type Kontrolü
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Invalid request payload format." },
        { status: 400 }
      );
    }

    const formData = await req.formData();

    // 3. Honeypot Koruması
    const honeypot = formData.get("hp_website_check")?.toString() || "";
    if (honeypot.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4. Form Verilerini Doğrulama
    const rawData = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      website: formData.get("website")?.toString() || "",
      launchDate: formData.get("launchDate")?.toString() || "",
      service: formData.get("service")?.toString() || "",
      budget: formData.get("budget")?.toString() || "",
      requireNDA: formData.get("requireNDA"),
      message: formData.get("message")?.toString() || "",
      hp_website_check: honeypot,
    };

    const parsed = inquirySchema.safeParse(rawData);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Lütfen form alanlarını eksiksiz ve geçerli formatta doldurunuz." },
        { status: 400 }
      );
    }

    const validData = parsed.data;

    // 5. Dosya Kontrolleri
    const files = formData.getAll("files") as File[];
    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { error: `En fazla ${MAX_FILES} adet referans dosya yükleyebilirsiniz.` },
        { status: 400 }
      );
    }

    let totalUploadSize = 0;
    const attachments: Array<{ filename: string; content: Buffer }> = [];

    for (const file of files) {
      if (!file || typeof file.size !== "number" || file.size === 0) continue;

      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `"${file.name}" dosyası 25MB sınırını aşıyor.` },
          { status: 400 }
        );
      }

      totalUploadSize += file.size;
      if (totalUploadSize > MAX_TOTAL_SIZE) {
        return NextResponse.json(
          { error: "Toplam dosya boyutu izin verilen sınırı aşıyor." },
          { status: 400 }
        );
      }

      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      if (!ALLOWED_EXTENSIONS.has(ext)) {
        return NextResponse.json(
          { error: `"${ext}" dosya uzantısına izin verilmiyor. Yalnızca PNG, JPG, PDF ve ZIP kabul edilir.` },
          { status: 400 }
        );
      }

      const declaredMime = file.type.toLowerCase();
      if (!ALLOWED_MIME_TYPES.has(declaredMime)) {
        return NextResponse.json(
          { error: `Desteklenmeyen dosya türü: ${declaredMime}` },
          { status: 400 }
        );
      }

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      if (!validateMagicBytes(buffer, declaredMime, ext)) {
        return NextResponse.json(
          { error: `"${file.name}" dosya içeriği uzantısı ile uyuşmuyor (sahte dosya biçimi tespit edildi).` },
          { status: 400 }
        );
      }

      attachments.push({
        filename: sanitizeFilename(file.name),
        content: buffer,
      });
    }

    // 6. Resend E-posta Gönderimi
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("[SECURITY/INTERNAL] RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "E-posta servisi şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyiniz." },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(validData.name);
    const safeEmail = escapeHtml(validData.email);
    const safeWebsite = validData.website ? escapeHtml(validData.website) : "Belirtilmedi";
    const safeLaunchDate = validData.launchDate ? escapeHtml(validData.launchDate) : "Belirtilmedi";
    const safeService = escapeHtml(validData.service);
    const safeBudget = escapeHtml(validData.budget);
    const safeNDA = validData.requireNDA ? "Evet (Karşılıklı NDA Talep Edildi)" : "Hayır";
    const safeMessage = escapeHtml(validData.message).replace(/\n/g, "<br/>");

    const headerSafeName = sanitizeHeader(validData.name);
    const headerSafeService = sanitizeHeader(validData.service);
    const emailSubject = `[AI.VIENNE Brief] ${headerSafeName} — ${headerSafeService}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #0a0a0a; color: #f5f5f5; padding: 24px; }
            .card { max-width: 600px; margin: 0 auto; background: #141414; border: 1px solid #d97706; border-radius: 16px; padding: 32px; }
            .header { border-bottom: 1px solid #262626; padding-bottom: 20px; margin-bottom: 24px; }
            .title { color: #fbbf24; font-size: 20px; font-weight: bold; margin: 0; }
            .field { margin-bottom: 16px; }
            .label { color: #a3a3a3; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
            .value { color: #ffffff; font-size: 14px; font-weight: 500; }
            .message-box { background: #0a0a0a; border: 1px solid #262626; border-radius: 12px; padding: 16px; margin-top: 20px; }
            .footer { margin-top: 32px; font-size: 11px; color: #737373; border-top: 1px solid #262626; padding-top: 16px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1 class="title">AI.VIENNE Studio+ — Yeni Proje Talebi</h1>
            </div>
            
            <div class="field">
              <div class="label">Müşteri / Kurum Adı</div>
              <div class="value">${safeName}</div>
            </div>

            <div class="field">
              <div class="label">Kurumsal E-Posta</div>
              <div class="value">${safeEmail}</div>
            </div>

            <div class="field">
              <div class="label">Web Sitesi</div>
              <div class="value">${safeWebsite}</div>
            </div>

            <div class="field">
              <div class="label">Hedef Lansman / Takvim</div>
              <div class="value">${safeLaunchDate}</div>
            </div>

            <div class="field">
              <div class="label">Prodüksiyon Disiplini</div>
              <div class="value">${safeService}</div>
            </div>

            <div class="field">
              <div class="label">Tahmini Bütçe</div>
              <div class="value">${safeBudget}</div>
            </div>

            <div class="field">
              <div class="label">Gizlilik Talebi (NDA)</div>
              <div class="value">${safeNDA}</div>
            </div>

            <div class="field">
              <div class="label">Ekli Dosya Sayısı</div>
              <div class="value">${attachments.length} Adet Dosya</div>
            </div>

            <div class="message-box">
              <div class="label">Proje Detayları & Brief</div>
              <div class="value" style="margin-top: 8px; font-weight: 300; line-height: 1.6;">${safeMessage}</div>
            </div>

            <div class="footer">
              AI.VIENNE Studio+ Confidential Production System
            </div>
          </div>
        </body>
      </html>
    `;

    const resend = new Resend(resendApiKey);

    const emailPayload: {
      from: string;
      to: string[];
      replyTo: string;
      subject: string;
      html: string;
      attachments?: Array<{ filename: string; content: Buffer }>;
    } = {
      from: "AI.VIENNE Studio+ <contact@aivienne.com>",
      to: ["info@aivienne.com"],
      replyTo: validData.email,
      subject: emailSubject,
      html: emailHtml,
    };

    if (attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    const { error: resendError } = await resend.emails.send(emailPayload);

    if (resendError) {
      console.error("[SECURITY/RESEND_ERROR]", resendError);
      return NextResponse.json(
        { error: "Brief iletilirken bir hata oluştu. Lütfen doğrudan info@aivienne.com üzerinden iletişime geçiniz." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: "Brief başarıyla iletildi." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[SECURITY/FATAL_HANDLER]", error);
    return NextResponse.json(
      { error: "Talebiniz işlenirken beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyiniz." },
      { status: 500 }
    );
  }
}