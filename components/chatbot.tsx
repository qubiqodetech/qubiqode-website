"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Minus } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm Qubi, the QubiQode virtual assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder("utf-8");

      if (!reader) throw new Error("No reader available");

      const assistantMessageId = Date.now().toString();
      let fullContent = "";

      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: "assistant", content: "" },
      ]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const textBase = decoder.decode(value, { stream: true });
        fullContent += textBase;

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMessageId
              ? { ...msg, content: fullContent }
              : msg,
          ),
        );
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed z-[99999]" style={{ bottom: "24px", right: "24px" }}>
      {/* Chat Window */}
      <div
        className={`absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] max-h-[calc(100vh-8rem)] bg-white border border-stone-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-50 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-stone-950 text-white p-4 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-base leading-none m-0">
                Qubi Assistant
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <p className="text-xs text-stone-300">Online</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors border-none text-white cursor-pointer"
            aria-label="Close Chat"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 flex flex-col gap-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl text-[15px] leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-orange-600 text-white rounded-tr-sm'
                    : 'bg-white text-stone-900 border border-stone-200 rounded-tl-sm shadow-sm'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm border border-stone-200 shadow-sm">
                 <div className="flex gap-1.5">
                   <span className="w-2 h-2 rounded-full bg-stone-300 animate-bounce delay-75"></span>
                   <span className="w-2 h-2 rounded-full bg-stone-300 animate-bounce delay-150"></span>
                   <span className="w-2 h-2 rounded-full bg-stone-300 animate-bounce delay-300"></span>
                 </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className="p-4 border-t border-stone-200 bg-white"
        >
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="w-full pl-5 pr-12 py-3 rounded-full border border-stone-200 bg-stone-50 outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-1 w-10 h-10 rounded-full bg-stone-950 text-white border-none flex items-center justify-center cursor-pointer disabled:bg-stone-300 disabled:cursor-not-allowed hover:bg-stone-800 transition-colors"
              aria-label="Send Message"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
          <div className="text-center mt-2">
            <span className="text-[10px] text-stone-400 font-medium">Powered by Gemini</span>
          </div>
        </form>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute bottom-0 right-0 w-14 h-14 rounded-full bg-stone-950 text-white border-2 border-white flex justify-center items-center cursor-pointer shadow-xl hover:scale-105 active:scale-95 transition-transform ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        }`}
        aria-label="Open Chat"
        type="button"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
