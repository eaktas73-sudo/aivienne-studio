import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message, brief_config } = body;

    const transporter = nodemailer.createTransport({
      host: "mail.aivienne.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@aivienne.com",
        pass: process.env.SMTP_PASS, // Şifre artık .env.local dosyasından güvenle çekiliyor
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"AI.VIENNE Studio+" <info@aivienne.com>`,
      to: "info@aivienne.com",
      replyTo: email, 
      subject: `Yeni Proje Talebi: ${name} (${service})`,
      text: `Gönderen: ${name} (${email})\nHizmet: ${service}\nBrief: ${brief_config}\n\nMesaj:\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Turhost SMTP Hatası:", error);
    return NextResponse.json({ success: false, error: "Failed" }, { status: 500 });
  }
}