'use client';

import React, { useState } from 'react';
import { ChevronUp, Zap, Clock, TrendingUp } from 'lucide-react';

const TRACK_PATH = "M30,150 C40,130 60,115 80,110 L130,100 C155,95 170,90 180,80 C195,65 195,55 185,45 C170,30 145,30 125,35 L80,45 C55,50 40,55 35,70 C30,85 35,100 45,110 L70,130 C80,140 85,150 82,160 C80,170 70,180 55,185 C45,188 38,184 30,175 Z";

const SIMULATED_DRIVERS = [
  { id: 'ver', color: '#0600EF', speed: '8s', delay: '0s', label: 'VER' },
  { id: 'ham', color: '#00D2BE', speed: '8.2s', delay: '-1s', label: 'HAM' },
  { id: 'lec', color: '#FF2800', speed: '7.9s', delay: '-2.5s', label: 'LEC' },
];

const TrackMap = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#121212] overflow-hidden flex items-center justify-center">
      
      <div className="relative w-full max-w-4xl aspect-video opacity-90 p-8 mb-20">
          <svg
            viewBox="0 0 300 200"
            className="w-full h-full drop-shadow-[0_0_18px_rgba(0,229,255,0.4)]"
          >
            <defs>
              <path id="trackPath" d={TRACK_PATH} />
            </defs>

            <path
              d={TRACK_PATH}
              fill="none"
              stroke="#1E1E1E"
              strokeWidth="18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            <path
              d={TRACK_PATH}
              fill="none"
              stroke="#00E5FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-30"
            />
            
            <path
              d="M125,35 L80,45"
              fill="none"
              stroke="#FF004D"
              strokeWidth="4"
              strokeDasharray="4 4"
              className="opacity-80"
            />

            {SIMULATED_DRIVERS.map((driver) => (
              <g key={driver.id}>
                <circle r="6" fill={driver.color} stroke="#fff" strokeWidth="2">
                  <animateMotion
                    dur={driver.speed}
                    repeatCount="indefinite"
                    begin={driver.delay}
                    rotate="auto"
                  >
                    <mpath href="#trackPath" />
                  </animateMotion>
                </circle>
              </g>
            ))}
          </svg>

          <div className="absolute top-[20%] right-[25%] bg-black/80 backdrop-blur px-3 py-1 rounded border border-[#00E5FF]/50 shadow-[0_0_10px_rgba(0,229,255,0.3)]">
            <span className="text-xs text-[#00E5FF] font-mono font-bold">SECTOR 2</span>
          </div>
      </div>

      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter drop-shadow-2xl">
          MONACO
        </h1>
        <p className="text-[#00E5FF] font-mono text-base tracking-[0.2em] uppercase mt-2">
          Street Circuit • Round 08
        </p>
      </div>

      <div
        className={`
          absolute bottom-0 left-0 w-full z-30
          bg-[#1E1E1E] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]
          rounded-t-[2.5rem]
          transition-transform duration-500 ease-in-out
          ${isSheetOpen ? 'translate-y-0' : 'translate-y-[calc(100%-5rem)]'} 
        `}
        style={{ height: '50vh' }}
      >
        <div
          className="w-full h-20 flex flex-col justify-center items-center cursor-pointer hover:bg-white/5 transition-colors rounded-t-[2.5rem]"
          onClick={() => setIsSheetOpen(!isSheetOpen)}
        >
          <div className="w-16 h-1.5 bg-white/20 rounded-full mb-3" />
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
             {isSheetOpen ? 'Close Data' : 'View Track Data'} <ChevronUp size={14} className={`transition-transform duration-300 ${isSheetOpen ? 'rotate-180' : ''}`}/>
          </p>
        </div>

        <div className="px-8 pb-8 h-[calc(100%-5rem)] overflow-y-auto custom-scrollbar">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-white italic">TECHNICAL SPECS</h2>
            <button className="text-xs bg-white/10 hover:bg-[#00E5FF] hover:text-black transition-colors px-4 py-2 rounded-full font-bold">
              Full History
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <TrendingUp size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Circuit Length</span>
              </div>
              <span className="text-3xl font-mono text-white font-bold">
                3.337 <span className="text-sm text-gray-500 font-normal">km</span>
              </span>
            </div>

            <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Zap size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">DRS Zones</span>
              </div>
              <span className="text-3xl font-mono text-white font-bold">1</span>
            </div>

            <div className="col-span-1 md:col-span-2 bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Clock size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Lap Record</span>
                </div>
                <span className="text-2xl md:text-3xl font-mono text-[#00E5FF] font-bold shadow-neon">1:10.166</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-white font-bold">Lewis Hamilton</div>
                <div className="text-xs text-gray-500 font-mono">Mercedes • 2019</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
            <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Track Insight</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              The ultimate test of driving skill. Tight corners, narrow streets, and zero margin for error make Monaco the jewel of the calendar. Qualifying position is statistically more critical here than at any other circuit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackMap;