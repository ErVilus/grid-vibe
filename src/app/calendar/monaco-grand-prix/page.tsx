'use client';

import React, { useState } from 'react';
import { ChevronUp, Zap, Clock, TrendingUp } from 'lucide-react';

const TRACK_PATH = "M 134.1,82.7 C 134.1,82.7 134.2,82.3 134.2,82.3 134.3,81.9 134.5,81.5 134.5,81.5 134.8,80.7 135.4,80.0 135.4,80.0 136.0,79.3 136.8,78.8 136.8,78.8 137.6,78.3 138.5,78.1 138.5,78.1 139.4,77.9 140.3,78.0 140.3,78.0 141.2,78.2 142.0,78.7 142.0,78.7 142.8,79.2 143.4,80.0 143.4,80.0 144.0,80.8 144.3,81.7 144.3,81.7 144.6,82.6 144.5,83.5 144.5,83.5 144.4,84.4 143.9,85.2 143.9,85.2 143.4,86.0 142.6,86.6 142.6,86.6 141.8,87.2 140.8,87.5 140.8,87.5 139.8,87.8 138.8,87.7 138.8,87.7 137.8,87.6 136.9,87.1 136.9,87.1 136.0,86.6 135.2,85.8 135.2,85.8 134.4,85.0 134.1,84.0 134.1,84.0 133.8,83.0 134.1,82.7 134.1,82.7 Z M 138.5,78.3 C 138.5,78.3 140.5,75.9 140.5,75.9 140.5,75.9 142.5,73.5 142.5,73.5 142.5,73.5 143.0,72.9 143.0,72.9 143.5,72.3 143.7,71.5 143.7,71.5 143.9,70.7 143.7,69.9 143.7,69.9 143.5,69.1 142.9,68.4 142.9,68.4 142.3,67.7 141.4,67.3 141.4,67.3 140.5,66.9 139.5,67.0 139.5,67.0 138.5,67.1 137.6,67.6 137.6,67.6 136.7,68.1 136.1,68.9 136.1,68.9 135.5,69.7 135.3,70.6 135.3,70.6 135.1,71.5 135.4,72.4 135.4,72.4 135.7,73.3 136.4,74.0 136.4,74.0 137.1,74.7 138.0,75.1 138.0,75.1 138.0,75.1 138.5,78.3 138.5,78.3 Z M 142.9,68.0 C 142.9,68.0 152.0,57.1 152.0,57.1 152.0,57.1 152.5,56.5 152.5,56.5 153.0,55.9 153.1,55.1 153.1,55.1 153.2,54.3 153.0,53.5 153.0,53.5 152.8,52.7 152.2,52.0 152.2,52.0 151.6,51.3 150.7,50.9 150.7,50.9 149.8,50.5 148.8,50.6 148.8,50.6 147.8,50.7 146.9,51.2 146.9,51.2 146.0,51.7 145.4,52.5 145.4,52.5 144.8,53.3 144.6,54.2 144.6,54.2 144.4,55.1 144.7,56.0 144.7,56.0 145.0,56.9 145.7,57.6 145.7,57.6 146.4,58.3 147.3,58.7 147.3,58.7 147.3,58.7 142.9,68.0 142.9,68.0 Z M 147.4,58.4 C 147.4,58.4 152.8,59.6 152.8,59.6 152.8,59.6 158.2,60.8 158.2,60.8 158.2,60.8 159.2,61.1 159.2,61.1 160.2,61.4 161.1,61.2 161.1,61.2 162.0,61.0 162.7,60.3 162.7,60.3 163.4,59.6 163.7,58.7 163.7,58.7 164.0,57.8 163.8,56.8 163.8,56.8 163.6,55.8 162.9,55.0 162.9,55.0 162.2,54.2 161.2,53.8 161.2,53.8 160.2,53.4 159.1,53.6 159.1,53.6 158.0,53.8 157.0,54.5 157.0,54.5 156.0,55.2 155.3,56.2 155.3,56.2 154.6,57.2 154.4,58.3 154.4,58.3 154.2,59.4 154.7,60.4 154.7,60.4 155.2,61.4 156.1,62.0 156.1,62.0 157.0,62.6 158.0,62.7 158.0,62.7 158.0,62.7 147.4,58.4 147.4,58.4 Z M 157.6,53.9 C 157.6,53.9 160.2,52.2 160.2,52.2 160.2,52.2 162.8,50.5 162.8,50.5 162.8,50.5 163.6,50.0 163.6,50.0 164.4,49.5 165.0,48.7 165.0,48.7 165.6,47.9 165.8,47.0 165.8,47.0 166.0,46.1 165.8,45.2 165.8,45.2 165.6,44.3 165.0,43.5 165.0,43.5 164.4,42.7 163.5,42.1 163.5,42.1 162.6,41.5 161.5,41.3 161.5,41.3 160.4,41.1 159.3,41.4 159.3,41.4 158.2,41.7 157.3,42.4 157.3,42.4 156.4,43.1 155.8,44.1 155.8,44.1 155.2,45.1 155.0,46.2 155.0,46.2 154.8,47.3 155.1,48.4 155.1,48.4 155.4,49.5 156.1,50.4 156.1,50.4 156.8,51.3 157.8,51.8 157.8,51.8 157.8,51.8 157.6,53.9 157.6,53.9 Z M 165.2,42.1 C 165.2,42.1 166.4,41.5 166.4,41.5 167.6,40.9 168.6,40.0 168.6,40.0 169.6,39.1 170.2,37.9 170.2,37.9 170.8,36.7 170.8,35.4 170.8,35.4 170.8,34.1 170.2,32.9 170.2,32.9 169.6,31.7 168.5,30.8 168.5,30.8 167.4,29.9 166.0,29.4 166.0,29.4 164.6,28.9 163.1,29.0 163.1,29.0 161.6,29.1 160.3,29.8 160.3,29.8 159.0,30.5 158.0,31.7 158.0,31.7 157.0,32.9 156.5,34.4 156.5,34.4 156.0,35.9 156.1,37.5 156.1,37.5 156.2,39.1 156.9,40.5 156.9,40.5 157.6,41.9 158.8,42.9 158.8,42.9 160.0,43.9 161.5,44.4 161.5,44.4 163.0,44.9 164.5,44.7 164.5,44.7 164.5,44.7 165.2,42.1 165.2,42.1 Z M 162.7,29.2 C 162.7,29.2 158.9,25.3 158.9,25.3 158.9,25.3 155.1,21.4 155.1,21.4 155.1,21.4 153.2,19.4 153.2,19.4 151.3,17.4 149.4,15.5 149.4,15.5 147.5,13.6 145.7,11.8 145.7,11.8 143.9,10.0 142.3,8.4 142.3,8.4 140.7,6.8 139.4,5.4 139.4,5.4 138.1,4.0 137.1,2.8 137.1,2.8 136.1,1.6 135.5,0.7 135.5,0.7 134.9,-0.2 134.7,-1.0 134.7,-1.0 134.5,-1.8 134.7,-2.6 134.7,-2.6 134.9,-3.4 135.5,-4.1 135.5,-4.1 136.1,-4.8 137.1,-5.3 137.1,-5.3 138.1,-5.8 139.3,-6.0 139.3,-6.0 140.5,-6.2 141.7,-6.1 141.7,-6.1 142.9,-6.0 144.0,-5.6 144.0,-5.6 145.1,-5.2 146.0,-4.5 146.0,-4.5 146.9,-3.8 147.6,-2.9 147.6,-2.9 148.3,-2.0 148.7,-0.9 148.7,-0.9 149.1,0.2 149.1,1.4 149.1,1.4 149.1,2.6 148.7,3.7 148.7,3.7 148.3,4.8 147.5,5.8 147.5,5.8 146.7,6.8 145.6,7.7 145.6,7.7 144.5,8.6 143.2,9.4 143.2,9.4 141.9,10.2 140.5,10.9 140.5,10.9 139.1,11.6 137.6,12.2 137.6,12.2 136.1,12.8 134.5,13.3 134.5,13.3 132.9,13.8 131.2,14.2 131.2,14.2 129.5,14.6 127.8,14.9 127.8,14.9 126.1,15.2 124.3,15.4 124.3,15.4 122.5,15.6 120.7,15.7 120.7,15.7 118.9,15.8 117.1,15.8 117.1,15.8 115.3,15.8 113.5,15.7 113.5,15.7 111.7,15.6 110.0,15.4 110.0,15.4 108.3,15.2 106.6,14.9 106.6,14.9 104.9,14.6 103.2,14.2 103.2,14.2 101.5,13.8 99.9,13.3 99.9,13.3 98.3,12.8 96.7,12.2 96.7,12.2 95.1,11.6 93.6,10.9 93.6,10.9 92.2,10.2 90.9,9.4 90.9,9.4 89.6,8.6 88.5,7.7 88.5,7.7 87.4,6.8 86.5,5.8 86.5,5.8 85.6,4.8 85.1,3.7 85.1,3.7 84.6,2.6 84.5,1.4 84.5,1.4 84.4,0.2 84.7,-0.9 84.7,-0.9 85.0,-2.0 85.7,-2.9 85.7,-2.9 86.4,-3.8 87.3,-4.5 87.3,-4.5 88.2,-5.2 89.3,-5.6 89.3,-5.6 90.4,-6.0 91.6,-6.1 91.6,-6.1 92.8,-6.2 94.0,-6.1 94.0,-6.1 95.2,-5.8 96.2,-5.3 96.2,-5.3 97.2,-4.8 97.9,-4.1 97.9,-4.1 98.6,-3.4 99.0,-2.6 99.0,-2.6 99.2,-1.8 99.1,-1.0 99.1,-1.0 99.0,-0.2 99.2,0.7 99.2,0.7 99.4,1.6 99.9,2.8 99.9,2.8 100.4,4.0 101.2,5.4 101.2,5.4 102.0,6.8 103.0,8.4 103.0,8.4 104.0,10.0 105.3,11.8 105.3,11.8 106.6,13.6 108.1,15.5 108.1,15.5 109.6,17.4 111.4,19.4 111.4,19.4 113.2,21.4 115.3,25.3 115.3,25.3 115.3,25.3 120.5,29.3 120.5,29.3 120.5,29.3 121.6,29.1 121.6,29.1 121.6,29.1 122.7,28.9 122.7,28.9 122.7,28.9 125.6,29.1 125.6,29.1 125.6,29.1 126.2,29.2 126.2,29.2 126.2,29.2 162.7,29.2 162.7,29.2 Z";

const SIMULATED_DRIVERS = [
  { id: 'ver', color: '#0600EF', speed: '8s', delay: '0s', label: 'VER' },
  { id: 'ham', color: '#00D2BE', speed: '8.2s', delay: '-1s', label: 'HAM' },
  { id: 'lec', color: '#FF2800', speed: '7.9s', delay: '-2.5s', label: 'LEC' },
];

const MonacoGPPage = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen bg-[#121212] overflow-hidden flex items-center justify-center">
      
      <div className="relative w-full max-w-4xl aspect-video opacity-90 p-8 mb-20">
          <svg
            viewBox="0 0 200 100"
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
          MONACO GP
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

export default MonacoGPPage;