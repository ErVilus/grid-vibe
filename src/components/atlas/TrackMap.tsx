'use client';

import React, { useState } from 'react';
import { ChevronUp, Zap, Clock, TrendingUp } from 'lucide-react';

const TrackMap = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#121212] overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[80%] aspect-square opacity-80">
          
          <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]">
            <path 
              d="M40,160 C40,160 20,120 40,80 C60,40 100,20 140,40 C180,60 180,100 160,140 C140,180 80,180 40,160" 
              fill="none" 
              stroke="#1E1E1E" 
              strokeWidth="12" 
              strokeLinecap="round"
            />
            <path 
              d="M40,160 C40,160 20,120 40,80 C60,40 100,20 140,40 C180,60 180,100 160,140 C140,180 80,180 40,160" 
              fill="none" 
              stroke="#00E5FF" 
              strokeWidth="4" 
              strokeLinecap="round"
              className="animate-draw-path"
            />
            <path 
              d="M140,40 C160,50 165,70 160,80" 
              fill="none" 
              stroke="#FF004D" 
              strokeWidth="4" 
              strokeDasharray="4 4"
              className="opacity-80"
            />
          </svg>
          <div className="absolute top-1/4 right-1/4 bg-background-deep/80 px-2 py-1 rounded border border-primary-neon/50">
             <span className="text-[10px] text-primary-neon font-mono">SECTOR 2</span>
          </div>
        </div>
      </div>

      <div className="absolute top-12 left-4 z-10">
        <h1 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-lg">MONACO</h1>
        <p className="text-primary-neon font-mono text-sm tracking-widest">STREET CIRCUIT</p>
      </div>

      <div 
        className={`absolute bottom-24 left-0 w-full glass-panel rounded-t-3xl transition-transform duration-500 ease-out z-20 ${isSheetOpen ? 'translate-y-0' : 'translate-y-[65%]'}`}
        style={{ height: '50vh' }}
      >
        <div 
          className="w-full h-8 flex justify-center items-center cursor-pointer"
          onClick={() => setIsSheetOpen(!isSheetOpen)}
        >
          <div className="w-12 h-1 bg-white/20 rounded-full mb-1" />
        </div>

        <div className="px-6 pb-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Track Data</h2>
            <button className="text-xs bg-white/10 px-3 py-1 rounded-full text-text-ghost">View History</button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background-carbon/50 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-text-dim mb-1">
                <TrendingUp size={14} />
                <span className="text-xs uppercase">Length</span>
              </div>
              <span className="text-2xl font-mono text-white">3.337 <span className="text-sm text-text-dim">km</span></span>
            </div>
            
            <div className="bg-background-carbon/50 p-4 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-text-dim mb-1">
                <Zap size={14} />
                <span className="text-xs uppercase">DRS Zones</span>
              </div>
              <span className="text-2xl font-mono text-white">1</span>
            </div>

            <div className="col-span-2 bg-background-carbon/50 p-4 rounded-xl border border-white/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-text-dim mb-1">
                  <Clock size={14} />
                  <span className="text-xs uppercase">Lap Record</span>
                </div>
                <span className="text-xl font-mono text-primary-neon">1:10.166</span>
              </div>
              <div className="text-right">
                <div className="text-xs text-white font-bold">L. Hamilton</div>
                <div className="text-[10px] text-text-dim">2019</div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
             <h3 className="text-sm font-bold text-white mb-2">Track Description</h3>
             <p className="text-xs text-text-dim leading-relaxed">
               The ultimate test of driving skill. Tight corners, narrow streets, and zero margin for error. Qualification is king here.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackMap;