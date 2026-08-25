import { NextResponse } from "next/server";
import { Resend } from "resend";

const ALLOWED_EXTENSIONS = [".png", ".jpg", ".jpeg", ".pdf", ".zip"];
const ALLOWED_MIME_TYPES = [
  "image/png",
  "image/jpeg",
  "application/pdf",
  "application/zip",
  "application/x-zip-compressed",
  "application/x-zip"
];
const MAX_FILE_SIZE = 25 * 1024 * 1024; // Tek dosya için max 25MB
const MAX_TOTAL_FILES = 5;               // En fazla 5 dosya
const MAX_TOTAL_SIZE = 30 * 1024 * 1024; // Toplamda max 30MB

// Basit IP Bazlı In-Memory Rate Limiter (Dakikada max 5 istek)
const ipRequestCounts = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 dakika
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = ipRequestCounts.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    ipRequestCounts.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count++;
  return true;
}

// HTML Injection / Email Injection Karşı Koruma (Escape Function)
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    // IP Tespiti (Vercel / Cloudflare / Standart Headers)
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : "127.0.0.1";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: "Çok fazla istek gönderdiniz. Lütfen bir süre sonra tekrar deneyin." },
        { status: 429 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await req.formData();

    // Honeypot (Bal Küpü) Bot Koruması Kontrolü
    const hpField = formData.get("hp_website_check") as string;
    if (hpField && hpField.trim() !== "") {
      // Bot tespit edildi, spam isteği sessizce reddediyoruz
      return NextResponse.json({ success: true, message: "Processed" }, { status: 200 });
    }

    const nameRaw = formData.get("name");
    const emailRaw = formData.get("email");
    const websiteRaw = formData.get("website");
    const launchDateRaw = formData.get("launchDate");
    const serviceRaw = formData.get("service");
    const budgetRaw = formData.get("budget");
    const requireNDA = formData.get("requireNDA") === "true";
    const messageRaw = formData.get("message");

    // Tip Kontrolleri (Runtime Type Guard)
    if (
      typeof nameRaw !== "string" ||
      typeof emailRaw !== "string" ||
      typeof serviceRaw !== "string" ||
      typeof budgetRaw !== "string" ||
      typeof messageRaw !== "string"
    ) {
      return NextResponse.json({ error: "Geçersiz form verisi algılandı." }, { status: 400 });
    }

    // Input Length Validation (Karakter Sınırları)
    if (nameRaw.length > 150 || emailRaw.length > 254 || messageRaw.length > 10000) {
      return NextResponse.json({ error: "Girilen veriler izin verilen karakter sınırlarını aşıyor." }, { status: 400 });
    }

    // E-posta Regex Doğrulaması
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailRaw)) {
      return NextResponse.json({ error: "Geçerli bir kurumsal e-posta adresi giriniz." }, { status: 400 });
    }

    // Güvenli (Escaped) Değişkenler
    const name = escapeHtml(nameRaw);
    const email = escapeHtml(emailRaw);
    const website = websiteRaw && typeof websiteRaw === "string" ? escapeHtml(websiteRaw) : "Belirtilmedi";
    const launchDate = launchDateRaw && typeof launchDateRaw === "string" ? escapeHtml(launchDateRaw) : "Esnek";
    const service = escapeHtml(serviceRaw);
    const budget = escapeHtml(budgetRaw);
    const message = escapeHtml(messageRaw);

    const files = formData.getAll("files") as File[];
    
    // Dosya Adet Sınırı Kontrolü
    if (files.filter(f => f && f.size > 0).length > MAX_TOTAL_FILES) {
      return NextResponse.json(
        { error: `Tek seferde en fazla ${MAX_TOTAL_FILES} dosya yükleyebilirsiniz.` },
        { status: 400 }
      );
    }

    const attachments = [];
    let totalBatchSize = 0;

    for (const file of files) {
      if (file && file.size > 0) {
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: `"${file.name}" dosyası 25MB limitini aşıyor.` },
            { status: 400 }
          );
        }

        totalBatchSize += file.size;
        if (totalBatchSize > MAX_TOTAL_SIZE) {
          return NextResponse.json(
            { error: "Toplam dosya boyutu 30MB sınırını aşıyor." },
            { status: 400 }
          );
        }

        const fileExtension = "." + file.name.split(".").pop()?.toLowerCase();
        if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
          return NextResponse.json(
            { error: `Geçersiz dosya formatı (${fileExtension}). Sadece PNG, JPG, PDF ve ZIP yüklenebilir.` },
            { status: 400 }
          );
        }

        if (!ALLOWED_MIME_TYPES.includes(file.type)) {
          return NextResponse.json(
            { error: `Güvenlik Kuralı İhlali: Desteklenmeyen dosya türü tespit edildi.` },
            { status: 400 }
          );
        }

        // Dosya Adı Sanitizasyonu (Özel karakterleri temizle)
        const safeFilename = file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 100);

        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: safeFilename,
          content: buffer,
        });
      }
    }

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif; color: #111; max-width: 600px; padding: 24px; border: 1px solid #e5e5e5; border-radius: 16px; background: #ffffff;">
        <h2 style="color: #d97706; margin-top: 0; margin-bottom: 20px; font-size: 20px; border-bottom: 1px solid #eee; padding-bottom: 12px;">AI.VIENNE Studio+ — Yeni Proje Briefi</h2>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 20px;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px;"><strong>Yetkili / Marka:</strong></td><td style="padding: 8px 0; color: #111;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Kurumsal E-Posta:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #d97706; text-decoration: none;">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Web Sitesi:</strong></td><td style="padding: 8px 0; color: #111;">${website}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Lansman / Teslim:</strong></td><td style="padding: 8px 0; color: #111;">${launchDate}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Prodüksiyon Alanı:</strong></td><td style="padding: 8px 0; color: #111;">${service}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Bütçe Aralığı:</strong></td><td style="padding: 8px 0; color: #111;">${budget}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Karşılıklı NDA:</strong></td><td style="padding: 8px 0; color: #111;">${requireNDA ? "EVET (Talep Edildi)" : "HAYIR"}</td></tr>
        </table>
        <div style="background: #f9f9f9; padding: 16px; border-radius: 10px; border: 1px solid #eee;">
          <h4 style="margin-top: 0; margin-bottom: 8px; color: #333; font-size: 12px; text-transform: uppercase;">Proje Hedefleri & Brief Mesajı:</h4>
          <p style="margin: 0; font-size: 13px; line-height: 1.6; white-space: pre-wrap; color: #222;">${message}</p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "AI.VIENNE Studio+ <contact@aivienne.com>",
      to: process.env.CONTACT_EMAIL || "info@aivienne.com",
      replyTo: emailRaw, // Ham e-posta yanıt için kullanılabilir
      subject: `[Yeni Brief Talebi] ${nameRaw} — ${serviceRaw}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "E-posta gönderimi sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin." }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "İsteğiniz işlenirken beklenmeyen bir hata oluştu." }, { status: 500 });
  }
}