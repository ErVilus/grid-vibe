import React, { useEffect } from 'react';
import { Activity, Gauge, Zap } from 'lucide-react';
import { useTelemetryStore } from '@/store/telemetryStore';
import TelemetryGraph from './TelemetryGraph';

const DataDive = () => {
  const { connect, disconnect, currentData } = useTelemetryStore();

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  return (
    <div className="w-full p-4 space-y-4 border-2 border-red-500">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-black text-white italic">LIVE TELEMETRY</h2>
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 bg-secondary-alert rounded-full animate-pulse" />
           <span className="text-xs font-mono text-secondary-alert">LIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="glass-panel p-4 rounded-xl flex flex-col items-center justify-center border border-white/5">
           <span className="text-[10px] text-text-dim uppercase font-bold mb-1">Gear</span>
           <span className="text-5xl font-mono font-black text-primary-neon shadow-neon">{currentData.gear}</span>
        </div>
        
        <div className="col-span-2 glass-panel p-4 rounded-xl flex flex-col justify-center border border-white/5 relative overflow-hidden">
           <div className="flex items-end justify-between z-10">
              <div>
                 <span className="text-[10px] text-text-dim uppercase font-bold block mb-1">Speed</span>
                 <span className="text-4xl font-mono font-bold text-white tracking-tighter">{currentData.speed}</span>
                 <span className="text-xs text-text-dim ml-1">km/h</span>
              </div>
              <div>
                 <span className="text-[10px] text-text-dim uppercase font-bold block mb-1">RPM</span>
                 <span className="text-2xl font-mono text-white">{currentData.rpm}</span>
              </div>
           </div>
           
           <div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-red-500 transition-all duration-100 ease-linear"
                style={{ width: `${(currentData.rpm / 15000) * 100}%` }} 
              />
           </div>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-3 h-48">
         <div className="col-span-1 bg-black/40 rounded-xl p-2 flex flex-col justify-end items-center relative border border-white/5">
            <div className="absolute top-2 text-[8px] text-text-dim uppercase -rotate-90">Throttle</div>
            <div className="w-4 bg-gray-800 rounded-full h-full relative overflow-hidden">
               <div 
                 className="absolute bottom-0 w-full bg-green-500 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                 style={{ height: `${currentData.throttle}%` }}
               />
            </div>
         </div>

         <div className="col-span-4">
            <TelemetryGraph />
         </div>

         <div className="col-span-1 bg-black/40 rounded-xl p-2 flex flex-col justify-end items-center relative border border-white/5">
            <div className="absolute top-2 text-[8px] text-text-dim uppercase -rotate-90">Brake</div>
            <div className="w-4 bg-gray-800 rounded-full h-full relative overflow-hidden">
               <div 
                 className="absolute bottom-0 w-full bg-secondary-alert transition-all duration-75 ease-out shadow-[0_0_10px_rgba(255,0,77,0.6)]"
                 style={{ height: `${currentData.brake}%` }}
               />
            </div>
         </div>
      </div>
    </div>
  );
};

export default DataDive;