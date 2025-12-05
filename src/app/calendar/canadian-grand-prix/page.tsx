'use client';

import React, { useState } from 'react';
import { ChevronUp, Zap, Clock, TrendingUp } from 'lucide-react';

const TRACK_PATH = "M 20.3,76.4 C 20.3,76.4 20.3,76.9 20.3,76.9 20.3,77.2 20.4,77.5 20.4,77.5 20.6,78.1 21.1,78.5 21.1,78.5 21.7,78.9 22.4,78.9 22.4,78.9 23.1,79.0 23.8,78.6 23.8,78.6 24.5,78.2 24.9,77.5 24.9,77.5 25.2,76.8 25.1,76.0 25.1,76.0 24.9,75.2 24.3,74.7 24.3,74.7 23.7,74.2 22.9,74.1 22.9,74.1 22.1,74.0 21.3,74.4 21.3,74.4 20.5,74.8 20.1,75.6 20.1,75.6 19.8,76.4 20.3,76.4 20.3,76.4 Z M 22.6,78.7 C 22.6,78.7 25.2,78.4 25.2,78.4 25.2,78.4 25.8,78.3 25.8,78.3 26.5,78.1 27.0,77.6 27.0,77.6 27.5,77.1 27.7,76.4 27.7,76.4 27.8,75.7 27.6,75.0 27.6,75.0 27.4,74.3 26.8,73.8 26.8,73.8 26.2,73.3 25.4,73.1 25.4,73.1 24.6,72.9 23.8,73.1 23.8,73.1 23.0,73.3 22.5,73.8 22.5,73.8 22.0,74.3 21.8,75.0 21.8,75.0 21.7,75.7 21.9,76.4 21.9,76.4 22.1,77.1 22.6,77.6 22.6,77.6 22.6,77.6 22.6,78.7 22.6,78.7 Z M 26.8,77.6 C 26.8,77.6 28.5,76.9 28.5,76.9 28.5,76.9 29.8,76.4 29.8,76.4 31.1,75.9 32.1,75.1 32.1,75.1 33.1,74.3 33.6,73.1 33.6,73.1 34.1,71.9 34.0,70.6 34.0,70.6 33.9,69.3 33.2,68.2 33.2,68.2 32.5,67.1 31.3,66.4 31.3,66.4 30.1,65.7 28.7,65.6 28.7,65.6 27.3,65.5 26.0,66.0 26.0,66.0 24.7,66.5 23.8,67.5 23.8,67.5 22.9,68.5 22.5,69.8 22.5,69.8 22.1,71.1 22.3,72.4 22.3,72.4 22.5,73.7 23.2,74.8 23.2,74.8 23.9,75.9 25.1,76.6 25.1,76.6 26.3,77.3 26.8,77.6 26.8,77.6 Z M 32.6,66.7 C 32.6,66.7 34.0,66.1 34.0,66.1 35.4,65.5 36.6,64.4 36.6,64.4 37.8,63.3 38.4,61.8 38.4,61.8 39.0,60.3 38.9,58.7 38.9,58.7 38.8,57.1 38.0,55.7 38.0,55.7 37.2,54.3 35.8,53.4 35.8,53.4 34.4,52.5 32.8,52.4 32.8,52.4 31.2,52.3 29.6,52.9 29.6,52.9 28.0,53.5 26.9,54.7 26.9,54.7 25.8,55.9 25.4,57.5 25.4,57.5 25.0,59.1 25.3,60.7 25.3,60.7 25.6,62.3 26.5,63.6 26.5,63.6 27.4,64.9 28.8,65.7 28.8,65.7 30.2,66.5 31.7,66.6 31.7,66.6 31.7,66.6 32.6,66.7 32.6,66.7 Z M 130.6,62.0 C 130.6,62.0 128.7,63.2 128.7,63.2 128.7,63.2 127.3,64.1 127.3,64.1 125.9,65.0 125.1,66.4 125.1,66.4 124.3,67.8 124.1,69.4 124.1,69.4 123.9,71.0 124.5,72.5 124.5,72.5 125.1,74.0 126.3,75.1 126.3,75.1 127.5,76.2 129.1,76.7 129.1,76.7 130.7,77.2 132.4,77.0 132.4,77.0 134.1,76.8 135.6,75.9 135.6,75.9 137.1,75.0 138.1,73.5 138.1,73.5 139.1,72.0 139.4,70.3 139.4,70.3 139.7,68.6 139.2,66.9 139.2,66.9 138.7,65.2 137.6,63.8 137.6,63.8 136.5,62.4 134.9,61.7 134.9,61.7 133.3,61.0 131.6,61.2 131.6,61.2 131.6,61.2 130.6,62.0 130.6,62.0 Z M 128.5,76.5 C 128.5,76.5 125.8,78.2 125.8,78.2 125.8,78.2 125.2,78.7 125.2,78.7 124.6,79.2 124.4,79.9 124.4,79.9 124.2,80.6 124.4,81.3 124.4,81.3 124.6,82.0 125.2,82.5 125.2,82.5 125.8,83.0 126.6,83.2 126.6,83.2 127.4,83.4 128.2,83.2 128.2,83.2 129.0,83.0 129.6,82.5 129.6,82.5 130.2,82.0 130.4,81.3 130.4,81.3 130.6,80.6 130.4,79.9 130.4,79.9 130.2,79.2 129.6,78.7 129.6,78.7 129.0,78.2 128.5,76.5 128.5,76.5 Z M 130.1,81.9 C 130.1,81.9 133.0,83.0 133.0,83.0 133.0,83.0 137.2,84.4 137.2,84.4 138.6,84.9 139.7,84.6 139.7,84.6 140.8,84.3 141.6,83.4 141.6,83.4 142.4,82.5 142.7,81.3 142.7,81.3 143.0,80.1 142.7,78.9 142.7,78.9 142.4,77.7 141.5,76.8 141.5,76.8 140.6,75.9 139.4,75.5 139.4,75.5 138.2,75.1 136.9,75.3 136.9,75.3 135.6,75.5 134.5,76.2 134.5,76.2 133.4,76.9 132.7,78.0 132.7,78.0 132.0,79.1 131.8,80.4 131.8,80.4 131.6,81.7 132.1,82.9 132.1,82.9 132.6,84.1 133.6,84.9 133.6,84.9 133.6,84.9 130.1,81.9 130.1,81.9 Z M 37.0,53.6 C 37.0,53.6 42.6,51.8 42.6,51.8 42.6,51.8 48.2,50.0 48.2,50.0 48.2,50.0 49.0,49.7 49.0,49.7 49.8,49.4 50.4,48.9 50.4,48.9 51.0,48.4 51.3,47.7 51.3,47.7 51.6,47.0 51.5,46.2 51.5,46.2 51.4,45.4 50.9,44.7 50.9,44.7 50.4,44.0 49.6,43.5 49.6,43.5 48.8,43.0 47.8,42.8 47.8,42.8 46.8,42.6 45.8,42.9 45.8,42.9 44.8,43.2 44.0,43.9 44.0,43.9 43.2,44.6 42.8,45.5 42.8,45.5 42.4,46.4 42.5,47.4 42.5,47.4 42.6,48.4 43.2,49.2 43.2,49.2 43.8,50.0 44.7,50.5 44.7,50.5 44.7,50.5 45.1,50.7 45.1,50.7 45.1,50.7 42.1,51.8 42.1,51.8 42.1,51.8 37.0,53.6 37.0,53.6 Z M 48.1,43.0 C 48.1,43.0 52.8,40.6 52.8,40.6 52.8,40.6 57.5,38.2 57.5,38.2 57.5,38.2 60.1,36.9 60.1,36.9 62.7,35.6 65.3,34.4 65.3,34.4 67.9,33.2 70.4,32.3 70.4,32.3 72.9,31.4 75.3,31.0 75.3,31.0 77.7,30.6 80.0,30.8 80.0,30.8 82.3,31.0 84.4,31.8 84.4,31.8 86.5,32.6 88.4,34.0 88.4,34.0 90.3,35.4 91.8,37.3 91.8,37.3 93.3,39.2 94.4,41.5 94.4,41.5 95.5,43.8 96.0,46.3 96.0,46.3 96.5,48.8 96.4,51.3 96.4,51.3 96.3,53.8 95.6,56.1 95.6,56.1 94.9,58.4 93.6,60.4 93.6,60.4 92.3,62.4 90.5,64.0 90.5,64.0 88.7,65.6 86.5,66.7 86.5,66.7 84.3,67.8 81.8,68.3 81.8,68.3 79.3,68.8 76.8,68.6 76.8,68.6 74.3,68.4 72.0,67.5 72.0,67.5 69.7,66.6 67.8,65.1 67.8,65.1 65.9,63.6 64.5,61.6 64.5,61.6 63.1,59.6 62.2,57.2 62.2,57.2 61.3,54.8 61.1,52.2 61.1,52.2 60.9,49.6 61.4,47.2 61.4,47.2 61.9,44.8 63.1,42.8 63.1,42.8 64.3,40.8 66.1,39.3 66.1,39.3 67.9,37.8 70.1,36.9 70.1,36.9 72.3,36.0 74.7,35.6 74.7,35.6 77.1,35.2 79.4,35.4 79.4,35.4 81.7,35.6 83.8,36.4 83.8,36.4 85.9,37.2 87.8,38.6 87.8,38.6 89.7,40.0 91.2,41.9 91.2,41.9 92.7,43.8 93.8,46.1 93.8,46.1 94.9,48.4 95.4,50.9 95.4,50.9 95.9,53.4 95.8,55.9 95.8,55.9 95.7,58.4 95.0,60.7 95.0,60.7 94.3,63.0 93.0,65.0 93.0,65.0 91.7,67.0 89.9,68.6 89.9,68.6 88.1,70.2 85.9,71.3 85.9,71.3 83.7,72.4 81.2,72.9 81.2,72.9 78.7,73.4 76.2,73.2 76.2,73.2 73.7,73.0 71.4,72.1 71.4,72.1 69.1,71.2 67.2,69.7 67.2,69.7 65.3,68.2 63.9,66.2 63.9,66.2 62.5,64.2 61.6,61.8 61.6,61.8 60.7,59.4 60.5,56.8 60.5,56.8 60.3,54.2 60.8,51.8 60.8,51.8 61.3,49.4 62.5,47.4 62.5,47.4 63.7,45.4 65.5,43.9 65.5,43.9 67.3,42.4 69.5,41.5 69.5,41.5 71.7,40.6 74.1,40.2 74.1,40.2 76.5,39.8 78.8,40.0 78.8,40.0 81.1,40.2 83.2,41.0 83.2,41.0 85.3,41.8 87.2,43.2 87.2,43.2 89.1,44.6 90.6,46.5 90.6,46.5 90.6,46.5 48.1,43.0 48.1,43.0 Z M 135.2,62.0 C 135.2,62.0 148.4,59.6 148.4,59.6 148.4,59.6 155.0,58.5 155.0,58.5 161.6,57.4 167.8,55.3 167.8,55.3 174.0,53.2 179.6,50.1 179.6,50.1 185.2,47.0 190.1,42.9 190.1,42.9 195.0,38.8 199.1,33.9 199.1,33.9 203.2,29.0 206.4,23.3 206.4,23.3 209.6,17.6 211.8,11.3 211.8,11.3 214.0,5.0 215.2,-2.0 215.2,-2.0 215.2,-2.0 136.2,16.5 136.2,16.5 136.2,16.5 135.2,62.0 135.2,62.0 Z";

const SIMULATED_DRIVERS = [
  { id: 'ver', color: '#0600EF', speed: '8s', delay: '0s', label: 'VER' },
  { id: 'ham', color: '#00D2BE', speed: '8.2s', delay: '-1s', label: 'HAM' },
  { id: 'lec', color: '#FF2800', speed: '7.9s', delay: '-2.5s', label: 'LEC' },
];

const CanadianGPPage = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#121212] overflow-hidden flex items-center justify-center">
      
      <div className="relative w-full max-w-4xl aspect-video opacity-90 p-8 mb-20">
          <svg
            viewBox="0 0 220 100"
            className="w-full h-full drop-shadow-[0_0_18px_rgba(0,229,255,0.4)]"
          >
            <defs>
              <path id="trackPath" d={TRACK_PATH} />
            </defs>

            <path
              d={TRACK_PATH}
              fill="none"
              stroke="#1E1E1E"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            <path
              d={TRACK_PATH}
              fill="none"
              stroke="#00E5FF"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-30"
            />

            {SIMULATED_DRIVERS.map((driver) => (
              <g key={driver.id}>
                <circle r="3" fill={driver.color} stroke="#fff" strokeWidth="1">
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

          <div className="absolute top-[40%] right-[15%] bg-black/80 backdrop-blur px-3 py-1 rounded border border-[#00E5FF]/50 shadow-[0_0_10px_rgba(0,229,255,0.3)]">
            <span className="text-xs text-[#00E5FF] font-mono font-bold">SECTOR 3</span>
          </div>
      </div>

      <div className="absolute top-8 left-8 z-10 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter drop-shadow-2xl">
          CANADIAN GP
        </h1>
        <p className="text-[#00E5FF] font-mono text-base tracking-[0.2em] uppercase mt-2">
          Circuit Gilles-Villeneuve • Round 09
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
                4.361 <span className="text-sm text-gray-500 font-normal">km</span>
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
                <span className="text-2xl md:text-3xl font-mono text-[#00E5FF] font-bold shadow-neon">1:13.078</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-white font-bold">Valtteri Bottas</div>
                <div className="text-xs text-gray-500 font-mono">Mercedes • 2019</div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
            <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-wide">Track Insight</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A high-speed, low-downforce track where drivers get up close and personal with the walls. The famous 'Wall of Champions' at the final chicane has claimed many a superstar. Braking stability and traction are key.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanadianGPPage;