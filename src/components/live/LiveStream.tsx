import React, { useState } from 'react';
import { Maximize2, Minimize2, MessageSquare, BarChart2, Video, Cast } from 'lucide-react';
import DataDive from '../telemetry/DataDive'; // Reusing existing telemetry component

const LiveStream = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'data' | 'highlights'>('data');
  const [isPip, setIsPip] = useState(false);

  return (
    <div className="w-full h-screen flex flex-col bg-background-deep">
      {/* Video Player Container */}
      <div className={`w-full bg-black relative transition-all duration-300 z-50 ${isPip ? 'fixed bottom-24 right-4 w-48 aspect-video rounded-xl shadow-2xl border border-white/10' : 'aspect-video sticky top-0'}`}>
        
        {/* Mock Video Content */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
           <span className="text-white/20 font-black text-2xl animate-pulse">LIVE FEED SIGNAL</span>
        </div>

        {/* Player Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
           <div className="flex justify-between items-start">
              <div className="bg-secondary-alert px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase flex items-center gap-1">
                 <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
              </div>
              <button onClick={() => setIsPip(!isPip)} className="text-white hover:text-primary-neon">
                 {isPip ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
              </button>
           </div>
           
           <div className="flex justify-between items-center">
              <div className="flex gap-4 text-xs font-bold text-white">
                 <span>1080p 60</span>
                 <span className="text-text-dim">Latency: 0.2s</span>
              </div>
              <Cast size={20} className="text-white cursor-pointer hover:text-primary-neon" />
           </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-white/5 bg-background-carbon sticky top-[aspect-video] z-40">
         <button 
           onClick={() => setActiveTab('chat')}
           className={`flex-1 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${activeTab === 'chat' ? 'text-primary-neon border-b-2 border-primary-neon' : 'text-text-dim'}`}
         >
            <MessageSquare size={16} /> Chat
         </button>
         <button 
           onClick={() => setActiveTab('data')}
           className={`flex-1 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${activeTab === 'data' ? 'text-primary-neon border-b-2 border-primary-neon' : 'text-text-dim'}`}
         >
            <BarChart2 size={16} /> Data
         </button>
         <button 
           onClick={() => setActiveTab('highlights')}
           className={`flex-1 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors ${activeTab === 'highlights' ? 'text-primary-neon border-b-2 border-primary-neon' : 'text-text-dim'}`}
         >
            <Video size={16} /> Clips
         </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto pb-24">
         {activeTab === 'data' && (
            <div className="p-0">
               <DataDive />
            </div>
         )}

         {activeTab === 'chat' && (
            <div className="p-4 flex flex-col items-center justify-center h-64 text-text-dim">
               <MessageSquare size={32} className="mb-2 opacity-50" />
               <p className="text-sm">Live Chat is connecting...</p>
            </div>
         )}
         
         {activeTab === 'highlights' && (
            <div className="grid grid-cols-2 gap-2 p-2">
               {[1,2,3,4].map(i => (
                  <div key={i} className="aspect-[9/16] bg-white/5 rounded-lg flex items-center justify-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                           <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
    </div>
  );
};

export default LiveStream;