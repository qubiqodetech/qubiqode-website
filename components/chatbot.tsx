"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Minus, Sparkles, Bot } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Markdown from "react-markdown";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const QUICK_REPLIES = [
  "Build me a website",
  "Show your portfolio",
  "What services do you offer?",
  "Start a project",
  "AI automation solutions",
];

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm QubiQode AI Assistant. I can help you build your next digital product, explore our services, or connect you with our team. How can I assist you today?",
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
  }, [messages, isOpen, isLoading]);

  const sendQuery = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // eslint-disable-next-line react-hooks/purity
    const tempUserId = Math.random().toString();
    const userMessage: Message = {
      id: tempUserId,
      role: "user",
      content: text.trim(),
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

      // eslint-disable-next-line react-hooks/purity
      const assistantMessageId = Math.random().toString();
      // eslint-disable-next-line react-hooks/immutability
      let fullContent = "";

      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: "assistant", content: "" },
      ]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const textBase = decoder.decode(value, { stream: true });
        // eslint-disable-next-line react-hooks/immutability
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
          // eslint-disable-next-line react-hooks/purity
          id: Math.random().toString(),
          role: "assistant",
          content:
            "Sorry, my cognitive circuits are experiencing interference right now. Please try again or reach out via the contact form.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendQuery(input);
  };

  return (
    <div className="fixed z-[99999]" style={{ bottom: "24px", right: "24px" }}>
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-[360px] sm:w-[420px] h-[550px] max-h-[calc(100vh-8rem)] bg-stone-950/90 backdrop-blur-xl border border-stone-800/80 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_30px_rgba(30,144,255,0.15)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-stone-900 via-stone-900 to-stone-950 p-5 flex items-center justify-between border-b border-stone-800/50 relative overflow-hidden shrink-0 z-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 blur-3xl pointer-events-none rounded-full" />
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary-600 to-blue-400 p-[1px] relative">
                  <div className="absolute inset-0 bg-primary-500 blur-md opacity-50 rounded-full" />
                  <div className="w-full h-full bg-stone-950 rounded-full flex items-center justify-center relative z-10 border border-primary-500/30">
                    <Bot className="w-6 h-6 text-primary-400" />
                  </div>
                  <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-stone-950 z-20 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base tracking-wide flex items-center gap-1.5">
                    QubiQode AI <Sparkles className="w-3.5 h-3.5 text-primary-400" />
                  </h3>
                  <p className="text-xs text-stone-400 font-medium">Powered by intelligent digital support</p>
                </div>
              </div>
              <div className="flex gap-2 relative z-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border-none text-white cursor-pointer"
                  aria-label="Minimise Chat"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-5 pb-2 space-y-6 flex flex-col scrollbar-thin scrollbar-thumb-stone-800 scrollbar-track-transparent">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mr-3 mt-1 shrink-0">
                         <Bot className="w-4 h-4 text-primary-400" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] px-4 py-3 text-[14px] leading-relaxed shadow-sm ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-primary-600 to-blue-500 text-white rounded-3xl rounded-tr-sm"
                          : "bg-white/10 text-stone-200 border border-white/10 rounded-3xl rounded-tl-sm backdrop-blur-sm"
                      }`}
                    >
                      {msg.role === "assistant" ? (
                        <div className="prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-p:my-1 prose-pre:bg-stone-900/50 prose-pre:border prose-pre:border-white/10 prose-a:text-primary-400 hover:prose-a:text-primary-300">
                          <Markdown>{msg.content}</Markdown>
                        </div>
                      ) : (
                        msg.content
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center mr-3 mt-1 shrink-0">
                     <Bot className="w-4 h-4 text-primary-400" />
                  </div>
                  <div className="bg-white/10 px-5 py-4 rounded-3xl rounded-tl-sm border border-white/10 backdrop-blur-sm self-start">
                    <div className="flex gap-1.5 h-2 items-center">
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-primary-400"></motion.span>
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-primary-400"></motion.span>
                      <motion.span animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-primary-400"></motion.span>
                    </div>
                  </div>
                </motion.div>
              )}

              {!isLoading && messages.length === 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-2 mt-2 px-11"
                >
                  {QUICK_REPLIES.map((replyText, i) => (
                    <button
                      key={i}
                      onClick={() => sendQuery(replyText)}
                      className="text-xs bg-stone-900/50 border border-stone-700/50 hover:bg-stone-800 hover:border-primary-500/50 text-stone-300 py-2 px-4 rounded-full transition-all duration-300 whitespace-nowrap hover:text-white"
                    >
                      {replyText}
                    </button>
                  ))}
                </motion.div>
              )}
              <div ref={messagesEndRef} className="h-2" />
            </div>

            {/* Input Form */}
            <div className="p-4 bg-stone-950 border-t border-stone-800/80 shrink-0">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything..."
                  className="w-full pl-5 pr-14 py-3.5 rounded-full border border-stone-800 bg-stone-900/80 text-white placeholder:text-stone-500 outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all text-sm shadow-inner"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-blue-500 text-white border-none flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(30,144,255,0.4)] transition-all"
                  aria-label="Send Message"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="absolute bottom-0 right-0"
          >
              <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="relative w-16 h-16 rounded-full bg-stone-950 text-white border border-stone-800 flex justify-center items-center cursor-pointer shadow-[0_10px_40px_rgba(30,144,255,0.3)] group"
              aria-label="Open Chat Assistant"
              type="button"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-600 to-blue-400 opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full border border-primary-500/50 animate-ping opacity-30 [animation-duration:3s]" />
              
              <MessageSquare className="w-7 h-7 relative z-10 group-hover:-rotate-12 transition-transform duration-300" />
              
              {/* Notification Badge */}
              <span className="absolute top-[2px] right-[2px] w-3.5 h-3.5 bg-primary-500 border-2 border-stone-950 rounded-full z-20" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

