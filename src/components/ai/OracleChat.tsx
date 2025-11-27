import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, Sparkles, User } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'ai';
  text: string;
  isTyping?: boolean;
}

const suggestions = [
  "Chi è in Pole Position?",
  "Spiegami l'Undercut",
  "Meteo tra 10 min?",
  "Penalità per Verstappen?"
];

const OracleChat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'ai', text: 'Ciao! Sono Oracle. Analizzo la griglia in tempo reale. Chiedimi tutto.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const simulateResponse = (question: string) => {
    setIsTyping(true);
    
    // Simulate network delay then streaming
    setTimeout(() => {
      const responseText = `Analisi completata per: "${question}". \n\nIn base alla telemetria attuale, il passo gara di **Ferrari** è superiore del 0.2s nel settore centrale. \n\n*Strategia consigliata*: Hard al giro 24.`;
      
      const newMessage: Message = { id: Date.now(), role: 'ai', text: '', isTyping: true };
      setMessages(prev => [...prev, newMessage]);

      let i = 0;
      const streamInterval = setInterval(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === newMessage.id 
            ? { ...msg, text: responseText.slice(0, i + 1) } 
            : msg
        ));
        i++;
        if (i === responseText.length) {
          clearInterval(streamInterval);
          setMessages(prev => prev.map(msg => 
            msg.id === newMessage.id ? { ...msg, isTyping: false } : msg
          ));
          setIsTyping(false);
        }
      }, 30); 

    }, 1000);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    const userMsg: Message = { id: Date.now(), role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    simulateResponse(text);
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md mx-auto glass-panel rounded-2xl border border-primary-neon/20 overflow-hidden relative">
      
      <div className="absolute top-0 w-full bg-background-deep/90 backdrop-blur p-4 border-b border-white/5 z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-neon/10 flex items-center justify-center border border-primary-neon relative">
          <Bot size={24} className="text-primary-neon" />
          {isTyping && <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-neon opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-neon"></span>
          </span>}
        </div>
        <div>
          <h2 className="text-lg font-black text-white italic">ORACLE</h2>
          <span className="text-[10px] text-primary-neon font-mono flex items-center gap-1">
            <Sparkles size={10} /> AI ONLINE
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pt-20 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'ai' ? 'bg-primary-neon/20 text-primary-neon' : 'bg-white/10 text-white'}`}>
              {msg.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
            </div>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-white/10 text-white rounded-tr-none' 
                : 'bg-primary-neon/5 border border-primary-neon/20 text-text-ghost rounded-tl-none'
            }`}>
              <div className="whitespace-pre-line">{msg.text}</div>
              {msg.isTyping && <span className="inline-block w-2 h-4 bg-primary-neon ml-1 animate-pulse"/>}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-background-deep/50 backdrop-blur-md">
        {messages.length < 3 && (
          <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar mb-2">
            {suggestions.map((s, i) => (
              <button 
                key={i}
                onClick={() => handleSend(s)}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-text-dim hover:text-primary-neon hover:border-primary-neon transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
            placeholder="Ask Oracle..."
            className="w-full bg-background-carbon border border-white/10 rounded-xl pl-4 pr-12 py-3 text-white placeholder:text-white/20 focus:border-primary-neon outline-none transition-colors"
          />
          <button 
            onClick={() => handleSend(input)}
            disabled={!input.trim() || isTyping}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-primary-neon text-background-deep hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OracleChat;