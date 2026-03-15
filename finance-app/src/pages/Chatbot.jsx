import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowUpCircle } from 'lucide-react';
import { aiService } from "../services/aiService";

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: "👋 Hello! I'm your AI Financial Assistant. How can I help you today?" }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), type: "user", content: input };
    setMessages(prev => [...prev, userMessage]);

    const query = input;
    setInput("");
    setLoading(true);

    try {
      // Actual backend call 🧠
      const res = await aiService.chat({ message: query });

      const botMessage = {
        id: Date.now() + 1,
        type: "bot",
        content: res.data.message || "I couldn't understand that."
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      const errorMessage = {
        id: Date.now() + 2,
        type: "bot",
        content: "⚠️ Error connecting to AI. Please try again."
      };
      setMessages(prev => [...prev, errorMessage]);
      console.error("Chat error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col bg-white rounded-xl shadow-soft">

      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-4 text-white rounded-t-xl">
        <h1 className="text-xl font-bold">AI Chat Assistant</h1>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[70%] p-3 rounded-lg ${msg.type === "user" ? "bg-primary-600 text-white" : "bg-gray-100"
              }`}>
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-gray-500 italic">AI is typing...</div>
        )}

        <div ref={endRef}></div>
      </div>

      {/* Input Box */}
      <div className="p-4 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 p-2 border rounded-lg"
          placeholder="Type your message..."
        />

        <button
          onClick={handleSend}
          className="p-2 bg-primary-600 text-white rounded-lg flex items-center justify-center"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotPage;