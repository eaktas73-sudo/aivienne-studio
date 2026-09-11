import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    // 1. STRICT EXACT ORIGIN VALIDATION (CORS / Anti-Abuse)
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

      const allowedHosts = new Set([
        "aivienne.com",
        "www.aivienne.com",
      ]);

      if (process.env.NODE_ENV !== "production") {
        allowedHosts.add("localhost:3000");
        allowedHosts.add("127.0.0.1:3000");
      }

      if (host) {
        allowedHosts.add(host);
      }

      if (!allowedHosts.has(originHost)) {
        return NextResponse.json(
          { error: "Unauthorized cross-origin request." },
          { status: 403 }
        );
      }
    }

    // 2. Mesajın Alınması
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Mesaj bulunamadı." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API anahtarı eksik." }, { status: 500 });
    }

    // 3. Gemini API Çağrısı (Çalışan Orijinal Model ve Yapı)
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [
              {
                text: "Sen AI.VIENNE Studio+ lüks görsel prodüksiyon ajansının gizli konsiyerj asistanısın. Kullanıcılara haute couture, fine jewelry ve horlogerie kampanyaları konusunda profesyonel, zarif ve lüks bir dille rehberlik edersin.",
              },
            ],
          },
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        }),
      }
    );

    const data = await geminiRes.json();

    if (!geminiRes.ok) {
      console.error("Gemini API Error Detail:", data);
      return NextResponse.json(
        { error: "Konsiyerj servisi şu an yanıt veremiyor." },
        { status: 500 }
      );
    }

    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Üzgünüm, şu an yanıt oluşturulamadı.";

    return NextResponse.json({ reply: replyText }, { status: 200 });
  } catch (error) {
    console.error("Chat Server Error:", error);
    return NextResponse.json(
      { error: "Beklenmeyen bir hata oluştu." },
      { status: 500 }
    );
  }
}