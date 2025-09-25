/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  vertexai: true,
  project: "gen-lang-client-0906981670",
  location: "global",
});

const model = "gemini-2.5-pro";
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
    // const palmPrompt = buildPrompt(language);
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
    
    const [love, career, health, future,life_purpose,compatibility,travel] = await Promise.all([
      sendMessage([msg1Image1, { text: buildPrompt1("love",language) }]),
      sendMessage([msg1Image1, { text: buildPrompt1("career",language) }]),
      sendMessage([msg1Image1, { text: buildPrompt1("health",language) }]),
      sendMessage([msg1Image1, { text: buildPrompt1("future",language) }]),
      sendMessage([msg1Image1, { text: buildPrompt1("life_purpose",language) }]),
      sendMessage([msg1Image1, { text: buildPrompt1("compatibility",language) }]),
      sendMessage([msg1Image1, { text: buildPrompt1("travel",language) }]),
    ]);

    // `results` is an array of responses from sendMessage for each topic
    console.log("love-->", love);
    console.log("career-->", career);
    console.log("health-->", health);
    console.log("future-->", future);
    return NextResponse.json({ reading:{love,career,health,future,life_purpose,compatibility,travel} });


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
    // return NextResponse.json({ reading });
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}

// function buildPrompt(language: string): string {
//   console.log("language selected-->", language);
//   const basePrompt = `You are a mystical palm reader. A user has uploaded an image of their palm. Analyze the palm lines carefully and give a unique and imaginative palm reading.

// Cover the following:
// - Love life
// - Career path
// - Health tendencies
// - Overall future

// Respond in full sentences with warmth, empathy, and a touch of magic. End with an uplifting conclusion. Avoid generic phrases. Make the tone engaging and unique.
// Also note one thing is the image is not of hand then give this kind of reponse
// {
//   message:"Issue With the image"
// }
// like if the lighting is bad or the image is not of a hand or palm, etc.
// basically the image is not of a hand or palm then give this kind of response with proper message okay but you have to give the result only about the palm reading and nothing more okay


// If possible, return the response in structured JSON like this:
// {
//   "love": "...",
//   "career": "...",
//   "health": "...",
//   "future": "...",
//   "summary": "..."
// }`;

//   if (language == "en") return basePrompt;
//   return `Respond ONLY in ${language}. Do not translate the JSON keys, only their values.\n\n${basePrompt}`;
// }





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
5. DO NOT reuse any previous instructions or formats. This prompt is to be treated as a new, independent request. Just Remmeber only one thing that if image is same only then give similar reposonse or else give a new response which diffrent for the other + and totally depend on the image okay
6. Respond ONLY in ${language}. Do not use any other language.

7. Try to make a story out of it there should be a flow in the reading, like a story, not just random lines.
8. The content you give me must have a have a positive and a bit of negative too and if there you put negative then there must be a remedy for this about that neagtive thing like at the last para there should be some sort of remedy about that.
9. Also the ${language} words you give must be every understandable to those people dont know ${language} very well so use simple words and sentences. just like you are talking to a 10 year old kid. Use as much creaactivity as you can in the reading and make it very engaging and interesting to read. Use simple words and sentences that are easy to understand, as if explaining to a 10-year-old child. Use as much creativity as you can in the reading and make it very engaging and interesting to read.
10. Use very simple and easy words so even someone who doesn’t know ${language} well can understand it—like you are talking to a 10-year-old. Make it creative, engaging, and interesting to read.
11. Language must be simple, clear, and friendly, while keeping the content engaging so the reader feels curious and involved from start to finish.
Do not generate palm reading if the image is invalid. But first, carefully check the image to determine if it's valid before returning an invalid response.
`;

  if (type === "love") {
    return `${imageValidation}
As I observe your palm, a gentle warmth radiates from the Heart Line — a deep, flowing line that speaks of your capacity to love with intensity and truth. This line curves with grace, much like the arc of a romantic ballad. It reveals a soul that yearns for connection, someone who feels deeply, often more than they reveal. The Mount of Venus is prominent, glowing softly beneath the thumb — a mark of tenderness, sensuality, and someone who cherishes both passion and loyalty.

...

Your heart is both your strength and your teacher. It will lead you not only to love another deeply but to also discover love for yourself in the process.


`;
  }

  if (type === "career") {
    return `${imageValidation}
Your palm is a canvas of ambition, purpose, and long-term growth. The Fate Line runs steadily from the base, a sign of direction and karmic momentum. You are someone who has always sensed an inner compass—guiding you through career changes, setbacks, and breakthroughs alike. The line is neither faint nor overly rigid, which suggests a flexible spirit, capable of adapting yet grounded in vision.

...

Your career path is not just about success, but about legacy. You are here to create, mentor, lead, or build something that outlasts you. Follow what feels meaningful, not just profitable—your hand favors purpose over prestige.


`;
  }

  if (type === "health") {
    return `${imageValidation}
Your Life Line is deep and gracefully curved, a powerful indicator of strong life force energy and resilience. It arcs like a protective shield around the Mount of Venus, which is full and warm—symbolizing physical vitality, a zest for life, and robust constitution.

...

You're not just built to survive—you're here to thrive, with mindfulness as your medicine.


`;
  }

  if (type === "future") {
    return `${imageValidation}
The lines in your hand shimmer with possibility, like constellations waiting to be named. The Fate Line is long and steady, anchored near the wrist and moving upward—a sign of someone with purpose.

...

Your future is already whispering to you. All you have to do is listen.


`;
  }
  if (type === "life_purpose") {
    return `${imageValidation}
  The lines in your palm reveal a profound truth—your life is not accidental. Your Fate Line runs deep and steady, suggesting a soul guided by a higher calling. You're someone destined to leave an imprint, to inspire others through your journey.
  
  You possess a rare clarity in direction. Even during uncertain times, your inner compass points you forward. The Head Line and Heart Line converge gently, showing you're not just a thinker but also a feeler—someone who balances logic and passion.
  
  Trust your instincts. The universe has etched its intentions into your hands. Every decision you make is a thread weaving the fabric of your purpose.
  

  `;
  }
  
  if (type === "compatibility") {
    return `${imageValidation}
  Your palm speaks the language of connection. The Heart Line flows gracefully across your hand, revealing deep emotional intelligence and a strong capacity for empathy. You connect easily with others—but you're selective with your heart.
  
  The Mount of Venus is prominent, symbolizing warmth, sensuality, and loyalty. You're someone who craves meaningful connection and offers unwavering support in return. Love, for you, is not fleeting—it's soulful and magnetic.
  
  If you're already with someone, this reading suggests a bond built to last. If you're seeking love, trust the pull of intuition. Your lines show that the right person will recognize your light and mirror it back.
  

  `;
  }
  
  if (type === "travel") {
    return `${imageValidation}
  Wanderlust runs through your lifelines. The Travel Lines on your palm radiate outward—some long, others short—hinting at frequent journeys and meaningful movement. Your spirit is nomadic, always seeking discovery and growth.
  
  The Life Line shows subtle breaks and branches—often a sign of change, relocation, and transformation. Travel for you isn't just about places; it's about people, wisdom, and expanding your perspective.
  
  Whether you're drawn to mountains, oceans, or ancient cities, your hand reveals that travel will play a pivotal role in shaping your identity and purpose.

  `;
  }
  

  return "Type not recognized.";
}

