import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

function getAI() {
  if (!ai) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return ai;
}

export async function POST(req: Request) {
  try {
    const aiClient = getAI();
    const { messages } = await req.json();

    const formattedMessages = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const responseStream = await aiClient.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents: formattedMessages,
      config: {
        systemInstruction:
          "You are a helpful and professional customer support chatbot for QubiQode, a premium digital agency offering Web Development, UI/UX Design, SEO, Video Editing, Logo Animation, Social Media Content, and Photography. Provide concise, friendly answers and guide users to contact us if they have complex questions.",
      },
    });

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            if (chunk.text) {
              // Encode each chunk string and enqueue
              controller.enqueue(new TextEncoder().encode(chunk.text));
            }
          }
        } catch (e) {
          controller.error(e);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
