import React, { useState } from 'react';
import { Navigation, Coffee, MapPin, Camera, X } from 'lucide-react';
import { useGPMode } from '@/hooks/useGPMode';

const poiData = [
  { id: 1, type: 'food', label: 'Burger Truck 44', dist: '150m', angle: 45 },
  { id: 2, type: 'wc', label: 'Restrooms A', dist: '80m', angle: -20 },
  { id: 3, type: 'gate', label: 'Gate 2 (Vip)', dist: '300m', angle: 10 },
];

const GPDashboard = () => {
  const { isOnSite, distance } = useGPMode();
  const [viewMode, setViewMode] = useState<'map' | 'ar'>('map');

  if (!isOnSite) return null; 

  return (
    <div className="fixed inset-0 z-[100] bg-white text-black flex flex-col animate-fade-in">
      <div className="bg-[#FFE600] p-4 flex justify-between items-center border-b-4 border-black">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase">GP MODE</h1>
          <p className="text-xs font-bold font-mono">ON-SITE ACTIVE • {distance}KM</p>
        </div>
        <button className="bg-black text-white p-2 rounded-full">
           <X size={24} />
        </button>
      </div>

      <div className="flex-1 relative overflow-hidden bg-gray-100">
        {viewMode === 'map' ? (
           <div className="w-full h-full flex items-center justify-center relative">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent" />
              
              <div className="relative w-64 h-64 border-4 border-black rounded-full flex items-center justify-center bg-white shadow-xl">
                 <div className="w-4 h-4 bg-[#00E5FF] rounded-full animate-ping absolute" />
                 <div className="w-4 h-4 bg-black rounded-full z-10" />
                 
                 {poiData.map((poi, i) => {
                    const rad = (poi.angle - 90) * (Math.PI / 180);
                    const r = 100; 
                    const x = r * Math.cos(rad);
                    const y = r * Math.sin(rad);
                    
                    return (
                       <div 
                         key={poi.id}
                         className="absolute w-8 h-8 bg-black text-white rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                         style={{ transform: `translate(${x}px, ${y}px)` }}
                       >
                          {poi.type === 'food' ? <Coffee size={14} /> : <MapPin size={14} />}
                       </div>
                    );
                 })}
              </div>
              <p className="absolute bottom-8 font-bold text-gray-400 uppercase tracking-widest">GPS Calibrated</p>
           </div>
        ) : (
           <div className="w-full h-full relative bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                 <Camera size={64} />
              </div>
              <video className="absolute inset-0 w-full h-full object-cover opacity-60" autoPlay muted loop playsInline>
                 <source src="/assets/camera_mock.mp4" type="video/mp4" />
              </video>
              
              {poiData.map((poi) => (
                 <div 
                   key={poi.id}
                   className="absolute bg-white border-2 border-black px-4 py-2 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center animate-bounce-slow"
                   style={{ 
                      top: '40%', 
                      left: `${50 + poi.angle}%`,
                      transform: 'translate(-50%, -50%)'
                   }}
                 >
                    <span className="font-black text-sm uppercase">{poi.label}</span>
                    <span className="text-xs font-mono font-bold text-[#00E5FF] bg-black px-1 mt-1">{poi.dist}</span>
                    <div className="absolute -bottom-2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-black border-r-[8px] border-r-transparent" />
                 </div>
              ))}
           </div>
        )}
      </div>

      <div className="bg-white border-t-2 border-gray-200 p-4 grid grid-cols-2 gap-4 pb-8">
         <button 
           onClick={() => setViewMode('map')}
           className={`py-4 rounded-xl font-black text-xl uppercase border-2 border-black transition-all ${viewMode === 'map' ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,190,255,1)]' : 'bg-white text-black'}`}
         >
            MAP
         </button>
         <button 
           onClick={() => setViewMode('ar')}
           className={`py-4 rounded-xl font-black text-xl uppercase border-2 border-black transition-all ${viewMode === 'ar' ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,190,255,1)]' : 'bg-white text-black'}`}
         >
            AR CAM
         </button>
      </div>
    </div>
  );
};

export default GPDashboard;