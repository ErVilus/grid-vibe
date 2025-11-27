'use client';
import React from 'react';
import { TrendingUp } from 'lucide-react';

const TrackEvolution = () => {
  // Dati simulati dell'evoluzione grip
  const data = [40, 65, 55, 80, 75, 90, 85, 95];

  return (
    <div className="h-full flex flex-col min-h-[160px]">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
             <h3 className="font-bold text-white flex items-center gap-2 uppercase tracking-wide text-sm">
                <TrendingUp size={16} className="text-[#00E5FF]" /> Track Evolution
             </h3>
             <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Last 8 Laps</span>
        </div>

        {/* Graph Area */}
        <div className="flex-1 flex items-end gap-2 px-1 pb-2">
            {data.map((h, i) => (
                <div 
                    key={i} 
                    className="flex-1 rounded-t-sm relative group transition-all duration-500 hover:brightness-125"
                    style={{ 
                        height: `${h}%`, 
                        // Uso RGBA esplicito per sicurezza, così bypassiamo Tailwind se fa capricci
                        backgroundColor: 'rgba(0, 229, 255, 0.2)', 
                        borderTop: '2px solid #00E5FF'
                    }} 
                >
                     {/* Tooltip */}
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-[#00E5FF] border border-[#00E5FF]/30 text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                        {h}%
                     </div>
                </div>
            ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-400 font-mono uppercase tracking-wide">
            <span>Grip: <span className="text-white font-bold">HIGH</span></span>
            <span className="hidden xl:inline">Delta <span className="text-green-500">-0.32s</span></span>
            <span>Trk: <span className="text-white">42°</span></span>
        </div>
    </div>
  );
};

export default TrackEvolution;