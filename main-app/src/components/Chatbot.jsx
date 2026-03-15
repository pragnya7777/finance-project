import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Send,
  X,
  Minimize2,
  Maximize2,
  MessageSquare,
  Sparkles,
  User,
  Loader
} from 'lucide-react';
import { aiService } from '../services/api';
import ReactMarkdown from 'react-markdown';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "👋 Hi! I'm your AI Financial Assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      // Simulate AI response - replace with actual API call
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          content: generateAIResponse(input),
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error sending message:', error);
      setLoading(false);
    }
  };

  const generateAIResponse = (userInput) => {
    // This is a mock AI response - replace with actual AI service
    const responses = {
      budget: "Based on your spending patterns, I recommend allocating 50% to needs, 30% to wants, and 20% to savings. Would you like a detailed breakdown?",
      savings: "I've analyzed your transactions and found you could save $240/month by optimizing subscriptions and dining out. Want to see how?",
      investment: "For your risk profile, I recommend a balanced portfolio: 60% stocks, 30% bonds, 10% alternatives. The projected return is 8-10% annually.",
      tax: "You have potential deductions worth $2,300. Would you like me to list them for you?",
      default: "I understand you're asking about financial advice. Could you be more specific so I can provide better assistance?"
    };

    const input = userInput.toLowerCase();
    if (input.includes('budget')) return responses.budget;
    if (input.includes('save') || input.includes('savings')) return responses.savings;
    if (input.includes('invest')) return responses.investment;
    if (input.includes('tax')) return responses.tax;
    return responses.default;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition z-50"
        >
          <Bot size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? '60px' : '500px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-6 right-6 w-96 bg-white rounded-xl shadow-2xl z-50 overflow-hidden transition-all ${isMinimized ? 'h-16' : 'h-[500px]'
              }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-purple-600 p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-semibold">AI Financial Assistant</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Online</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hover:bg-white/20 p-1 rounded"
                >
                  {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 p-1 rounded"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-[calc(100%-120px)] overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'user' ? 'bg-primary-100' : 'bg-purple-100'
                          }`}>
                          {msg.type === 'user' ? (
                            <User size={16} className="text-primary-600" />
                          ) : (
                            <Bot size={16} className="text-purple-600" />
                          )}
                        </div>
                        <div className={`p-3 rounded-lg ${msg.type === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                          }`}>
                          <ReactMarkdown className="text-sm">{msg.content}</ReactMarkdown>
                          <p className="text-xs opacity-70 mt-1">
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {loading && (
                    <div className="flex items-center gap-2 text-gray-500">
                      <Loader size={16} className="animate-spin" />
                      <span className="text-sm">AI is thinking...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
                  <div className="flex items-center gap-2">
                    <textarea
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything about your finances..."
                      className="flex-1 p-2 border rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      rows="1"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim() || loading}
                      className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                    <Sparkles size={12} />
                    Powered by AI - 94% accuracy
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;