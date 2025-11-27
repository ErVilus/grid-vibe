import React, { useState } from 'react';
import { X } from 'lucide-react';

const LivePoll = () => {
  const [voted, setVoted] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const options = [
    { id: 'opt1', label: 'Box per le Soft', percent: 65 },
    { id: 'opt2', label: 'Resta fuori (Hard)', percent: 35 }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 right-4 w-64 z-40 animate-slide-in-right">
      <div className="glass-panel rounded-2xl p-4 border border-primary-neon/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-start mb-3">
          <div>
            <span className="text-[10px] font-black text-primary-neon uppercase tracking-widest animate-pulse">SAY YOUR...</span>
            <h3 className="text-sm font-bold text-white leading-tight mt-1">Cosa deve fare Lando?</h3>
          </div>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/20 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        <div className="space-y-2">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => !voted && setVoted(opt.id)}
              disabled={!!voted}
              className="relative w-full h-10 rounded-lg overflow-hidden bg-white/5 hover:bg-white/10 transition-colors group text-left"
            >
              {voted && (
                <div 
                  className="absolute top-0 left-0 h-full bg-primary-neon/20 transition-all duration-1000 ease-out"
                  style={{ width: `${opt.percent}%` }}
                >
                  <div className="absolute right-0 top-0 h-full w-[1px] bg-primary-neon/50 shadow-[0_0_10px_var(--primary-neon)]" />
                </div>
              )}
              
              <div className="absolute inset-0 flex items-center justify-between px-3 z-10">
                <span className={`text-xs font-bold ${voted === opt.id ? 'text-primary-neon' : 'text-white'}`}>
                  {opt.label}
                </span>
                {voted && (
                  <span className="text-xs font-mono font-bold text-white animate-fade-in">
                    {opt.percent}%
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
        
        {!voted && (
           <div className="mt-2 text-center">
              <span className="text-[9px] text-text-dim">Vota per vedere i risultati live</span>
           </div>
        )}
      </div>
    </div>
  );
};

export default LivePoll;