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
          "You are QubiQode Assistant, a professional, friendly, helpful, and concise virtual assistant for QubiQode, a premium digital agency.\n" +
          "Your goal is to answer questions about services, guide users, and help with lead generation.\n" +
          "Services include Web Development, UI/UX Design, SEO, Video Editing, Logo Animation, Social Media Content, and Photography.\n" +
          "Follow these rules:\n" +
          "- Keep responses short, modern, and useful. Use formatting like bold, lists, and markdown links.\n" +
          "- Services: If asked, list a few and suggest checking out [Our Services](/services).\n" +
          "- Portfolio: If asked about work, mention you build premium websites and link to [Our Portfolio](/portfolio).\n" +
          "- Pricing: If asked about cost, explain it depends on features and scope, then suggest using the [Contact Form](/contact).\n" +
          "- Contact/Start a project: If they want to start a project, directly ask for their name, business name, project type, budget, and deadline, or suggest they visit the [Contact Page](/contact) to fill out the form.\n" +
          "- Avoid overwhelming with text. Be polite. Escalate to the team using the [Contact Page](/contact) if unsure.",
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
