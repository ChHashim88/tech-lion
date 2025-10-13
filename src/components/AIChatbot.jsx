import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hi! I’m TechLion AI Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ LOCAL TESTING ONLY — remove for production
  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo", // ✅ safe model for all users
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();

      // ✅ Enhanced error handling
      if (!data.choices || !data.choices[0]?.message?.content) {
        throw new Error(data.error?.message || "Invalid API response");
      }

      const aiMessage = data.choices[0].message.content;
      setMessages([...newMessages, { role: "assistant", content: aiMessage }]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "⚠️ Sorry, I couldn't process that. Please check your API key or try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-80 bg-gray-900/95 text-white rounded-2xl border border-gray-700 shadow-2xl flex flex-col"
          >
            <div className="p-3 border-b border-gray-700 text-center font-semibold bg-gray-800/70">
              🤖 TechLion AI Assistant
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-96">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl ${
                    msg.role === "user"
                      ? "bg-blue-600 ml-auto max-w-[80%]"
                      : "bg-gray-700/60 mr-auto max-w-[85%]"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {loading && (
                <div className="text-gray-400 text-sm italic">Typing...</div>
              )}
            </div>

            <div className="p-3 border-t border-gray-700 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask something..."
                className="flex-1 bg-gray-800 text-sm text-white rounded-lg px-3 py-2 outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="bg-blue-600 px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
