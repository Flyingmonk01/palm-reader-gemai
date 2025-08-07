/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  vertexai: true,
  project: "gen-lang-client-0906981670",
  location: "global",
});

const model = "gemini-2.5-flash-lite";
const generationConfig = {
  maxOutputTokens: 65535,
  temperature: 1,
  topP: 0.95,
};

const chat = ai.chats.create({
  model: model,
  config: generationConfig,
});

async function sendMessage(message: any) {
  const response = await chat.sendMessageStream({
    message: message,
  });

  let result = "";
  for await (const chunk of response) {
    if (chunk.text) {
      result += chunk.text;
    }
  }

  return result;
}

export async function POST(request: NextRequest) {
  try {
    const { ipfsHash, language = "english" } = await request.json();

    if (!ipfsHash || typeof ipfsHash !== "string") {
      return NextResponse.json(
        { error: "Invalid IPFS hash." },
        { status: 400 }
      );
    }

    // 1. Download the image from IPFS
    const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
    const imageRes = await fetch(ipfsUrl);

    if (!imageRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch image from IPFS." },
        { status: 500 }
      );
    }

    const contentType = imageRes.headers.get("content-type") || "image/jpeg";
    const buffer = Buffer.from(await imageRes.arrayBuffer());
    const base64 = buffer.toString("base64");

    // 2. Build prompt
    const palmPrompt = buildPrompt(language);
    // const array=['love', 'career', 'health', 'future'];

    // const palmPrompt1 = buildPrompt1('love');

    // 3. Prepare image + prompt for Gemini
    const msg1Image1 = {
      inlineData: {
        mimeType: contentType,
        data: base64,
      },
    };

    // 4. Send to Gemini
    
    const [love, career, health, future] = await Promise.all([
      sendMessage([msg1Image1, { text: buildPrompt1("love",language) }]),
      sendMessage([msg1Image1, { text: buildPrompt1("career",language) }]),
      sendMessage([msg1Image1, { text: buildPrompt1("health",language) }]),
      sendMessage([msg1Image1, { text: buildPrompt1("future",language) }]),
    ]);

    // `results` is an array of responses from sendMessage for each topic
    console.log("love-->", love);
    console.log("career-->", career);
    console.log("health-->", health);
    console.log("future-->", future);
    return NextResponse.json({ reading:{love,career,health,future} });


    // const palmReadingRaw = await sendMessage([
    //   msg1Image1,
    //   { text: palmPrompt },
    // ]);


    // let reading = {};
    // try {
    //   // Try to parse the structured JSON if provided
    //   const match = palmReadingRaw.match(/({[\s\S]*})/);
    //   reading = match ? JSON.parse(match[1]) : { rawText: palmReadingRaw };
    // } catch (err) {
    //   console.log("⚠️ Failed to parse structured JSON:", err);
    //   reading = { rawText: palmReadingRaw };
    // }

    // console.log("🌟 Palm Reading:", reading);
    return NextResponse.json({ reading });
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

function buildPrompt(language: string): string {
  console.log("language selected-->", language);
  const basePrompt = `You are a mystical palm reader. A user has uploaded an image of their palm. Analyze the palm lines carefully and give a unique and imaginative palm reading.

Cover the following:
- Love life
- Career path
- Health tendencies
- Overall future

Respond in full sentences with warmth, empathy, and a touch of magic. End with an uplifting conclusion. Avoid generic phrases. Make the tone engaging and unique.
Also note one thing is the image is not of hand then give this kind of reponse
{
  message:"Issue With the image"
}
like if the lighting is bad or the image is not of a hand or palm, etc.
basically the image is not of a hand or palm then give this kind of response with proper message okay but you have to give the result only about the palm reading and nothing more okay


If possible, return the response in structured JSON like this:
{
  "love": "...",
  "career": "...",
  "health": "...",
  "future": "...",
  "summary": "..."
}`;

  if (language == "en") return basePrompt;
  return `Respond ONLY in ${language}. Do not translate the JSON keys, only their values.\n\n${basePrompt}`;
}





function buildPrompt1(type: string, language: string): string {
  const imageValidation = `

IMPORTANT:
1. Content must be of 700-900 words.
2. Do not use any special characters like * or _ for formatting—plain text only, as this will be used in a report.
3. If the uploaded image is not a clear human palm (e.g., poor lighting, wrong angle, or not a hand), return only this JSON:
{
  "message": "Issue With the image"
}
4. MOST IMPORTANT: Return ONLY a string of 700-900 words—nothing else.
5. DO NOT reuse any previous instructions or formats. This prompt is to be treated as a new, independent request.
6. Respond ONLY in ${language}. Do not use any other language.
7. You must append an inline SVG at the end of the response that visually represents the theme (emotion) of the reading. It should be a basic but meaningful illustration such as a heart for love, a star or sun for future, a shield or leaf for health, or a mountain or path for career. Return this SVG code as part of the plain text string, NOT as an image or markdown link.

Do not generate palm reading if the image is invalid. But first, carefully check the image to determine if it’s valid before returning an invalid response.
`;

  if (type === "love") {
    return `${imageValidation}
As I observe your palm, a gentle warmth radiates from the Heart Line — a deep, flowing line that speaks of your capacity to love with intensity and truth. This line curves with grace, much like the arc of a romantic ballad. It reveals a soul that yearns for connection, someone who feels deeply, often more than they reveal. The Mount of Venus is prominent, glowing softly beneath the thumb — a mark of tenderness, sensuality, and someone who cherishes both passion and loyalty.

...

Your heart is both your strength and your teacher. It will lead you not only to love another deeply but to also discover love for yourself in the process.

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 80 C20 50, 20 20, 50 35 C80 20, 80 50, 50 80 Z" fill="red"/>
</svg>
`;
  }

  if (type === "career") {
    return `${imageValidation}
Your palm is a canvas of ambition, purpose, and long-term growth. The Fate Line runs steadily from the base, a sign of direction and karmic momentum. You are someone who has always sensed an inner compass—guiding you through career changes, setbacks, and breakthroughs alike. The line is neither faint nor overly rigid, which suggests a flexible spirit, capable of adapting yet grounded in vision.

...

Your career path is not just about success, but about legacy. You are here to create, mentor, lead, or build something that outlasts you. Follow what feels meaningful, not just profitable—your hand favors purpose over prestige.

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <path d="M50 10 L90 90 H10 Z" fill="orange"/>
</svg>
`;
  }

  if (type === "health") {
    return `${imageValidation}
Your Life Line is deep and gracefully curved, a powerful indicator of strong life force energy and resilience. It arcs like a protective shield around the Mount of Venus, which is full and warm—symbolizing physical vitality, a zest for life, and robust constitution.

...

You're not just built to survive—you're here to thrive, with mindfulness as your medicine.

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" fill="green" />
  <path d="M35 50 L45 60 L65 40" stroke="white" stroke-width="5" fill="none" />
</svg>
`;
  }

  if (type === "future") {
    return `${imageValidation}
The lines in your hand shimmer with possibility, like constellations waiting to be named. The Fate Line is long and steady, anchored near the wrist and moving upward—a sign of someone with purpose.

...

Your future is already whispering to you. All you have to do is listen.

<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,15 61,70 95,35 5,35 39,70" fill="gold"/>
</svg>
`;
  }

  return "Type not recognized.";
}

