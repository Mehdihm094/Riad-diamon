"use client";

import { useState, useRef, useEffect } from "react";

const API_URL = "https://riad-diamond-chatbot-production.up.railway.app";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Bonjour ! Bienvenue au Riad Diamond. Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error("Erreur API");

      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Désolé, une erreur est survenue. Veuillez réessayer." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Bouton flottant pour ouvrir/fermer le chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#D4AF37] hover:bg-[#c19d2e] text-black rounded-full w-14 h-14 shadow-lg flex items-center justify-center text-2xl transition-transform hover:scale-105"
          aria-label="Ouvrir le chat"
        >
          💬
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[500px] bg-[#1E1A17] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-[#3E332C]">
          {/* Header */}
          <div className="bg-[#2C2420] px-4 py-3 flex items-center justify-between">
            <h3 className="text-[#D4AF37] font-semibold">🏛️ Riad Diamond - Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#D4AF37] text-xl leading-none"
              aria-label="Fermer le chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm ${
                    msg.sender === "user"
                      ? "bg-[#D4AF37] text-black"
                      : "bg-[#3E332C] text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#3E332C] text-white px-3 py-2 rounded-xl text-sm">
                  ...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[#3E332C] flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Écrivez votre message..."
              className="flex-1 bg-[#3E332C] text-white text-sm rounded-lg px-3 py-2 outline-none placeholder:text-gray-400"
            />
            <button
              onClick={sendMessage}
              disabled={isLoading}
              className="bg-[#D4AF37] text-black text-sm font-semibold px-3 py-2 rounded-lg hover:bg-[#c19d2e] disabled:opacity-50"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}