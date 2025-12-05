'use client';

import React, { useState } from 'react';
import { ChevronUp, Zap, Clock, TrendingUp } from 'lucide-react';

const TRACK_PATH = "M 48.2,93.5 C 48.2,93.5 183.9,93.5 183.9,93.5 183.9,93.5 185.3,93.5 185.3,93.5 185.3,93.5 186.2,93.5 186.2,93.5 187.2,93.5 188.1,93.5 188.1,93.5 188.1,93.5 188.2,93.5 188.2,93.5 189.9,93.4 192.8,92.5 192.8,92.5 194.8,91.8 195.1,90.2 195.1,90.2 195.4,88.7 194.3,87.8 194.3,87.8 193.1,86.9 191.4,87.4 191.4,87.4 190.2,87.8 189.7,88.8 189.7,88.8 189.2,89.8 189.7,90.9 189.7,90.9 190.1,91.6 191.6,92.1 191.6,92.1 191.6,92.1 192.1,92.3 192.1,92.3 192.1,92.3 191.9,92.2 191.9,92.2 191.9,92.2 191.8,92.2 191.8,92.2 191.3,92.0 191.3,91.2 191.3,91.2 191.3,90.5 191.9,90.2 191.9,90.2 192.6,89.9 193.2,90.3 193.2,90.3 193.8,90.7 193.8,91.5 193.8,91.5 193.7,92.2 193.1,92.6 193.1,92.6 192.4,93.0 191.4,92.9 191.4,92.9 191.4,92.9 183.9,92.9 183.9,92.9 183.9,92.9 48.2,92.9 48.2,92.9 47.7,92.9 47.1,92.8 47.1,92.8 45.8,92.5 45.1,91.3 45.1,91.3 44.5,90.1 45.1,88.9 45.1,88.9 45.8,87.7 47.1,87.1 47.1,87.1 48.5,86.5 49.7,87.1 49.7,87.1 50.8,87.7 51.2,89.0 51.2,89.0 51.6,90.3 50.9,91.5 50.9,91.5 50.3,92.6 49.0,93.1 49.0,93.1 49.0,93.1 48.2,93.5 48.2,93.5 Z M 195.2,89.8 C 195.2,89.8 196.6,84.0 196.6,84.0 197.6,79.8 197.8,77.3 197.8,77.3 198.3,73.1 197.3,71.2 197.3,71.2 196.3,69.2 194.0,68.3 194.0,68.3 191.8,67.3 189.5,68.0 189.5,68.0 187.3,68.7 186.3,70.5 186.3,70.5 185.3,72.4 186.0,74.5 186.0,74.5 186.8,76.7 188.1,78.2 188.1,78.2 188.1,78.2 189.0,79.1 189.0,79.1 189.0,79.1 189.9,79.1 189.9,79.1 190.6,79.1 191.0,78.5 191.0,78.5 191.5,77.8 191.3,77.0 191.3,77.0 191.1,76.2 190.3,75.8 190.3,75.8 189.5,75.4 188.8,75.7 188.8,75.7 188.8,75.7 187.3,76.3 187.3,76.3 187.3,76.3 187.0,75.0 187.0,75.0 187.0,75.0 187.6,73.8 187.6,73.8 187.6,73.8 188.5,73.0 188.5,73.0 189.4,72.2 190.4,72.2 190.4,72.2 191.3,72.2 192.0,72.9 192.0,72.9 192.7,73.6 192.8,74.6 192.8,74.6 192.9,75.6 192.4,76.5 192.4,76.5 191.9,77.4 191.0,77.9 191.0,77.9 191.0,77.9 190.5,78.1 190.5,78.1 190.5,78.1 189.9,78.1 189.9,78.1 189.9,78.1 189.0,78.1 189.0,78.1 189.0,78.1 188.4,77.5 188.4,77.5 188.4,77.5 187.2,76.3 187.2,76.3 187.2,76.3 186.5,74.8 186.5,74.8 186.5,74.8 186.0,72.9 186.0,72.9 185.5,71.0 186.4,69.4 186.4,69.4 187.3,67.8 189.3,67.1 189.3,67.1 191.3,66.3 193.6,67.0 193.6,67.0 195.9,67.7 197.2,69.5 197.2,69.5 198.5,71.3 199.0,74.0 199.0,74.0 199.0,74.0 198.8,76.4 198.8,76.4 198.8,76.4 197.8,82.8 197.8,82.8 197.8,82.8 196.6,88.6 196.6,88.6 196.3,90.1 195.2,89.8 195.2,89.8 Z M 184.2,93.2 C 184.2,93.2 184.1,87.0 184.1,87.0 184.1,87.0 184.1,86.8 184.1,86.8 184.0,86.1 184.5,85.5 184.5,85.5 185.1,84.9 185.9,84.7 185.9,84.7 186.7,84.6 187.4,85.0 187.4,85.0 188.1,85.5 188.4,86.2 188.4,86.2 188.6,86.9 188.4,87.6 188.4,87.6 188.1,88.3 187.5,88.8 187.5,88.8 186.9,89.3 186.1,89.4 186.1,89.4 186.1,89.4 185.8,89.4 185.8,89.4 185.8,89.4 184.2,93.2 184.2,93.2 Z M 49.3,87.1 C 49.3,87.1 55.9,82.5 55.9,82.5 55.9,82.5 62.4,78.0 62.4,78.0 62.4,78.0 64.9,76.3 64.9,76.3 67.4,74.6 68.7,73.6 68.7,73.6 69.9,72.7 70.6,71.5 70.6,71.5 71.3,70.2 71.1,68.8 71.1,68.8 71.0,67.4 70.1,66.4 70.1,66.4 69.1,65.3 67.8,64.9 67.8,64.9 66.4,64.5 65.1,64.9 65.1,64.9 63.7,65.4 62.9,66.4 62.9,66.4 62.1,67.4 61.9,68.8 61.9,68.8 61.7,70.1 62.1,71.3 62.1,71.3 62.5,72.5 63.5,73.3 63.5,73.3 63.5,73.3 64.5,74.1 64.5,74.1 64.5,74.1 62.1,75.7 62.1,75.7 62.1,75.7 57.2,79.1 57.2,79.1 57.2,79.1 52.3,82.5 52.3,82.5 52.3,82.5 50.8,83.6 50.8,83.6 50.8,83.6 49.3,87.1 49.3,87.1 Z M 195.9,68.5 C 195.9,68.5 201.7,63.1 201.7,63.1 201.7,63.1 211.3,53.5 211.3,53.5 211.3,53.5 212.1,52.8 212.1,52.8 212.8,52.0 213.0,51.0 213.0,51.0 213.2,49.9 212.8,48.9 212.8,48.9 212.4,47.9 211.5,47.2 211.5,47.2 210.6,46.5 209.5,46.3 209.5,46.3 208.4,46.1 207.3,46.5 207.3,46.5 206.2,46.9 205.4,47.8 205.4,47.8 204.6,48.6 204.3,49.7 204.3,49.7 203.9,50.7 204.2,51.8 204.2,51.8 204.5,52.9 205.3,53.7 205.3,53.7 206.1,54.5 207.1,54.8 207.1,54.8 207.1,54.8 207.7,54.7 207.7,54.7 207.7,54.7 202.4,59.3 202.4,59.3 202.4,59.3 198.0,63.1 198.0,63.1 198.0,63.1 195.9,64.8 195.9,64.8 194.2,66.1 193.4,67.8 193.4,67.8 193.4,67.8 193.2,68.0 193.2,68.0 193.2,68.0 194.0,68.3 194.0,68.3 194.0,68.3 195.9,68.5 195.9,68.5 Z M 209.3,46.5 C 209.3,46.5 209.7,45.3 209.7,45.3 210.0,44.2 209.5,43.0 209.5,43.0 209.0,41.9 207.9,41.1 207.9,41.1 206.8,40.4 205.5,40.4 205.5,40.4 204.2,40.4 203.1,41.2 203.1,41.2 202.0,41.9 201.5,43.2 201.5,43.2 201.0,44.4 201.3,45.7 201.3,45.7 201.6,47.0 202.6,48.0 202.6,48.0 203.7,48.9 205.0,49.1 205.0,49.1 206.3,49.3 207.6,48.7 207.6,48.7 208.8,48.1 209.7,47.1 209.7,47.1 209.7,47.1 209.3,46.5 209.3,46.5 Z M 207.9,41.3 C 207.9,41.3 206.9,39.6 206.9,39.6 205.9,37.9 204.1,37.1 204.1,37.1 202.3,36.3 200.4,36.6 200.4,36.6 198.5,36.9 197.1,38.1 197.1,38.1 195.7,39.3 195.1,41.0 195.1,41.0 194.5,42.7 194.8,44.5 194.8,44.5 195.1,46.3 196.3,47.6 196.3,47.6 197.5,48.9 199.2,49.5 199.2,49.5 200.9,50.1 202.7,49.8 202.7,49.8 204.5,49.5 206.0,48.4 206.0,48.4 207.5,47.3 208.3,45.7 208.3,45.7 209.1,44.1 209.0,42.3 209.0,42.3 208.9,40.5 207.9,41.3 207.9,41.3 Z M 205.5,40.6 C 205.5,40.6 204.1,37.3 204.1,37.3 204.1,37.3 203.4,35.6 203.4,35.6 202.7,33.9 201.2,33.0 201.2,33.0 199.7,32.1 197.9,32.4 197.9,32.4 196.1,32.7 194.8,34.0 194.8,34.0 193.5,35.3 193.1,37.0 193.1,37.0 192.7,38.7 193.3,40.4 193.3,40.4 193.9,42.1 195.3,43.2 195.3,43.2 196.7,44.3 198.5,44.4 198.5,44.4 200.3,44.5 202.0,43.6 202.0,43.6 203.7,42.7 204.8,41.2 204.8,41.2 204.8,41.2 205.5,40.6 205.5,40.6 Z M 67.9,64.9 C 67.9,64.9 65.5,63.2 65.5,63.2 63.1,61.5 61.1,59.5 61.1,59.5 59.1,57.5 58.0,55.1 58.0,55.1 56.9,52.7 56.9,50.1 56.9,50.1 56.9,47.5 57.8,45.2 57.8,45.2 58.7,42.9 60.5,41.1 60.5,41.1 62.3,39.3 64.7,38.2 64.7,38.2 67.1,37.1 69.7,37.1 69.7,37.1 72.3,37.1 74.7,38.2 74.7,38.2 77.1,39.3 78.9,41.1 78.9,41.1 80.7,42.9 81.6,45.2 81.6,45.2 82.5,47.5 82.5,50.1 82.5,50.1 82.5,52.7 81.4,55.1 81.4,55.1 80.3,57.5 78.3,59.5 78.3,59.5 76.3,61.5 73.9,63.2 73.9,63.2 71.5,64.9 69.7,65.4 69.7,65.4 69.7,65.4 67.9,64.9 67.9,64.9 Z";

const SIMULATED_DRIVERS = [
  { id: 'ver', color: '#0600EF', speed: '8s', delay: '0s', label: 'VER' },
  { id: 'ham', color: '#00D2BE', speed: '8.2s', delay: '-1s', label: 'HAM' },
  { id: 'lec', color: '#FF2800', speed: '7.9s', delay: '-2.5s', label: 'LEC' },
];

const SpanishGPPage = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#121212] overflow-hidden flex items-center justify-center">
      
      <div className="relative w-full max-w-4xl aspect-video opacity-90 p-8 mb-20">
          <svg
            viewBox="0 0 250 150"
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
          SPANISH GP
        </h1>
        <p className="text-[#00E5FF] font-mono text-base tracking-[0.2em] uppercase mt-2">
          Circuit de Barcelona-Catalunya • Round 10
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
                4.675 <span className="text-sm text-gray-500 font-normal">km</span>
              </span>
            </div>

            <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Zap size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">DRS Zones</span>
              </div>
              <span className="text-3xl font-mono text-white font-bold">2</span>
            </div>

            <div className="col-span-1 md:col-span-2 bg-black/40 p-5 rounded-2xl border border-white/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Clock size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Lap Record</span>
                </div>
                <span className="text-2xl md:text-3xl font-mono text-[#00E5FF] font-bold shadow-neon">1:16.330</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-white font-bold">Max Verstappen</div>
                <div className="text-xs text-gray-500 font-mono">Red Bull Racing • 2023</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
            <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Track Insight</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A classic all-rounder circuit, Barcelona is a favourite for testing as it has a wide variety of corner types. Tyre wear is high, and the long Turn 3 is particularly demanding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpanishGPPage;