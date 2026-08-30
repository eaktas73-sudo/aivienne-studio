import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Mesaj bulunamadı." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API anahtarı eksik." }, { status: 500 });
    }

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
