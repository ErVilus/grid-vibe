import React from 'react';

const TyreBay = ({ wear = 65, compound = 'SOFT' }: { wear?: number, compound?: 'SOFT' | 'MEDIUM' | 'HARD' | 'INTER' }) => {
  
  const getCompoundColor = (c: string) => {
    switch(c) {
      case 'SOFT': return '#FF004D'; // Red
      case 'MEDIUM': return '#FFD700'; // Yellow
      case 'HARD': return '#F0F0F0'; // White
      case 'INTER': return '#00E5FF'; // Green/Cyan
      default: return '#FFF';
    }
  };

  const color = getCompoundColor(compound);
  
  // Interpolate color from White (fresh) to Dark Red (dead)
  const getWearColor = (w: number) => {
    if (w < 30) return '#FFFFFF';
    if (w < 60) return '#FFA500';
    return '#8B0000';
  };

  const history = [
    { lap: 1, compound: 'S', laps: 18 },
    { lap: 19, compound: 'M', laps: 24 },
    { lap: 43, compound: 'S', laps: 'CURRENT' },
  ];

  return (
    <div className="w-full glass-panel rounded-2xl p-6 border border-white/5">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-black text-white italic">TYRE BAY</h2>
          <span className="text-xs text-text-dim font-mono">STRATEGY MONITOR</span>
        </div>
        <div className="px-3 py-1 rounded bg-white/10 text-xs font-bold text-white border border-white/20">
          LAP 48/52
        </div>
      </div>

      <div className="flex items-center justify-center py-8 relative">
        <div className="relative w-48 h-48">
          {/* Base Tire */}
          <div className="absolute inset-0 rounded-full border-[16px] border-[#1a1a1a] shadow-inner" />
          
          {/* Wear Indicator Ring */}
          <svg className="w-full h-full -rotate-90 transform">
            <circle
              cx="96"
              cy="96"
              r="70"
              stroke={getWearColor(wear)}
              strokeWidth="12"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset={440 - (440 * wear) / 100}
              className="transition-all duration-1000 ease-out"
              strokeLinecap="round"
            />
          </svg>

          {/* Center Info */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white italic tracking-tighter">{wear}%</span>
            <span className="text-[10px] text-text-dim uppercase tracking-widest mt-1">WEAR</span>
            <div 
              className="mt-2 w-8 h-1 rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
        </div>
        
        {/* Floating Data */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
           <div className="text-right">
              <span className="block text-[10px] text-text-dim uppercase">Age</span>
              <span className="text-xl font-mono text-white font-bold">5 LAPS</span>
           </div>
           <div className="text-right">
              <span className="block text-[10px] text-text-dim uppercase">Pred</span>
              <span className="text-xl font-mono text-secondary-alert font-bold">BOX</span>
           </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex justify-between items-center mb-2">
           <span className="text-xs font-bold text-text-dim">STINT HISTORY</span>
        </div>
        <div className="flex gap-1 w-full">
           {history.map((stint, i) => (
             <div key={i} className="flex-1 flex flex-col gap-2 relative group">
                <div 
                  className={`h-2 rounded-full w-full ${stint.laps === 'CURRENT' ? 'animate-pulse' : 'opacity-60'}`}
                  style={{ backgroundColor: getCompoundColor(stint.compound === 'S' ? 'SOFT' : stint.compound === 'M' ? 'MEDIUM' : 'HARD') }}
                />
                <div className="flex justify-between text-[10px] text-text-dim font-mono">
                   <span>L{stint.lap}</span>
                   <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center text-[9px] font-bold text-white bg-background-deep">
                      {stint.compound}
                   </span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default TyreBay;