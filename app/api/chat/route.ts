import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1].content.toLowerCase().trim();

    // 1. SMART BRAIN LOGIC (Instant Response)
    let reply = "";

    if (userMessage.includes("tool") || userMessage.includes("tech") || userMessage.includes("software")) {
      reply = "GenAbhi Studio mein hum Nano Banana (Hyper-realistic images), Google Veo (Cinematic Video), aur ElevenLabs (Voice) ka deadly combination use karte hain! 🎬";
    } 
    else if (userMessage.includes("patna") || userMessage.includes("location") || userMessage.includes("kahan")) {
      reply = "Humara main creative hub Patna, Bihar mein hai. Hum yahan se global standard ka AI content deliver karte hain! 📍";
    }
    else if (userMessage.includes("krishan") || userMessage.includes("mythology") || userMessage.includes("god") || userMessage.includes("video") || userMessage.includes("krishna")) {
      reply = "Mythology hamara passion hai! Humne Lord Krishna ki stories ko AI cinematic style mein recreate kiya hai. Aap Showcase section mein dekh sakte hain. ✨";
    }
    else if (userMessage.includes("avi") || userMessage.includes("founder") || userMessage.includes("kaun hai")) {
      reply = "Avi GenAbhi Studio ke founder aur lead AI artist hain. Unka vision Patna ko AI production ka world-class hub banana hai. 🚀";
    }
    else if (userMessage.includes("hi") || userMessage.includes("hello") || userMessage.includes("namaste")) {
      reply = "Namaste! Main GenAbhi AI Assistant hoon. Kya aap hamare projects ya tools ke baare mein janna chahte hain? 😊";
    }
    else if (userMessage.includes("india")) {
      reply = "India mein AI revolution aa raha hai, aur GenAbhi Studio Patna se ise lead kar raha hai! 🇮🇳";
    }
    else {
      // General Dynamic Fallback
      reply = "Ye kaafi interesting sawal hai! GenAbhi Studio ke baare mein aur janne ke liye aap 'Tools', 'Patna Studio' ya 'Krishna Projects' ke baare mein puch sakte hain.";
    }

    // 2. BACKGROUND API TRY (Optional)
    const API_KEY = process.env.GOOGLE_GENERATIVE_AI_API_KEY || "AIzaSyDIqtq28LSc_XapuyppbUGu87Bn8TT8fmY";
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: userMessage }] }] }),
      });
      const data = await response.json();
      if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
        reply = data.candidates[0].content.parts[0].text;
      }
    } catch (e) {
      // If API fails, we already have our smart 'reply' ready
    }

    return NextResponse.json({ text: reply });

  } catch (error: any) {
    return NextResponse.json({ text: "System online hai! GenAbhi Studio Patna mein aapka swagat hai." });
  }
}