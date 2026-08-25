import { NextResponse } from "next/server";
import { Resend } from "resend";

const ALLOWED_EXTENSIONS = [".png", ".jpg", ".jpeg", ".pdf", ".zip"];
const ALLOWED_MIME_TYPES = [
  "image/png",
  "image/jpeg",
  "application/pdf",
  "application/zip",
  "application/x-zip-compressed",
  "application/x-zip",
  "application/octet-stream"
];
const MAX_FILE_SIZE = 25 * 1024 * 1024;

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const website = formData.get("website") as string;
    const launchDate = formData.get("launchDate") as string;
    const service = formData.get("service") as string;
    const budget = formData.get("budget") as string;
    const requireNDA = formData.get("requireNDA") === "true";
    const message = formData.get("message") as string;

    const files = formData.getAll("files") as File[];
    const attachments = [];

    for (const file of files) {
      if (file && file.size > 0) {
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: `"${file.name}" dosyası 25MB limitini aşıyor. Daha büyük dosyalar için lütfen WeTransfer veya Drive linki paylaşın.` },
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

        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
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
          <tr><td style="padding: 8px 0; color: #666;"><strong>Web Sitesi:</strong></td><td style="padding: 8px 0; color: #111;">${website || "Belirtilmedi"}</td></tr>
          <tr><td style="padding: 8px 0; color: #666;"><strong>Lansman / Teslim:</strong></td><td style="padding: 8px 0; color: #111;">${launchDate || "Esnek"}</td></tr>
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
      replyTo: email,
      subject: `[Yeni Brief Talebi] ${name} — ${service}`,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Bilinmeyen bir hata oluştu";
    console.error("Contact API error:", err);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
