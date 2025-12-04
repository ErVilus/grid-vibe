'use client';

import React from 'react';
import RaceCalendar from '@/components/calendar/RaceCalendar';
import SkyView from '@/components/weather/SkyView';
import PaddockPass from '@/components/community/PaddockPass';
import MerchStore from '@/components/commerce/MerchStore';
import TrackEvolution from '@/components/telemetry/TrackEvolution';
import { ThemeProvider } from '@/context/ThemeContext';
import { Activity } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider>
      {/* Sfondo generale molto scuro come da screenshot */}
      <div className="min-h-screen bg-[#0E0E0E] text-white p-6">
        <div className="max-w-[1800px] mx-auto space-y-6">

          {/* HEADER MINIMALE */}
          <header className="flex justify-between items-center mb-4 px-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">Dashboard</h2>
              <p className="text-xs text-gray-500 font-mono mt-1">
                MONACO GP • QUALIFYING SESSION
              </p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] rounded-full border border-white/5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">System Online</span>
            </div>
          </header>

          {/* --- BENTO GRID LAYOUT (3 COLONNE) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">

            {/* 1. CALENDARIO (Occupa 2 colonne in larghezza) */}
            <div className="lg:col-span-2 h-full min-h-[400px]">
              <div className="h-full bg-[#161616] rounded-[30px] p-6 border border-white/5 shadow-xl relative overflow-hidden">
                 {/* Titolo Sezione */}
                 <div className="absolute top-6 left-6 z-10">
                    <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest">Race Calendar</h3>
                 </div>
                 <div className="mt-4">
                    <RaceCalendar />
                 </div>
              </div>
            </div>

            {/* 2. NEWS FEED (Colonna destra alta) */}
            <div className="lg:col-span-1 h-full min-h-[400px]">
              <div className="h-full bg-[#161616] rounded-[30px] border border-white/5 shadow-xl overflow-hidden flex flex-col">
                 <div className="p-6 pb-2 border-b border-white/5 bg-[#1A1A1A]">
                    <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest flex items-center justify-between">
                        News Feed <span className="w-2 h-2 bg-primary-neon rounded-full" />
                    </h3>
                 </div>
                 <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
                    <PaddockPass />
                 </div>
              </div>
            </div>

            {/* 3. WEATHER RADAR (Basso Sinistra) */}
            <div className="lg:col-span-1 h-[320px]">
               <div className="h-full bg-[#161616] rounded-[30px] p-1 border border-white/5 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-6 left-6 z-20 pointer-events-none">
                     <h3 className="text-gray-400 text-xs font-black uppercase tracking-widest flex items-center gap-2">
                        <Activity size={14} className="text-primary-neon"/> Weather Radar
                     </h3>
                  </div>
                  {/* SkyView si adatta all'altezza */}
                  <SkyView />
               </div>
            </div>

            {/* 4. TRACK EVOLUTION (Basso Centro) */}
            <div className="lg:col-span-1 h-[320px]">
               <div className="h-full bg-[#161616] rounded-[30px] p-6 border border-white/5 shadow-xl flex flex-col relative">
                  {/* Sfondo griglia decorativa */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                  
                  <div className="relative z-10 h-full">
                     <TrackEvolution />
                  </div>
               </div>
            </div>

            {/* 5. FLASH SALE (Basso Destra) */}
            <div className="lg:col-span-1 h-[320px]">
               <div className="h-full bg-[#161616] rounded-[30px] border border-white/5 shadow-xl relative overflow-hidden">
                  <div className="p-5 flex justify-between items-center z-10 relative">
                     <h3 className="text-white text-lg font-black italic tracking-tighter">FLASH SALE</h3>
                     <span className="text-[10px] bg-white text-black px-2 py-1 rounded font-bold uppercase">-20% Pitlane</span>
                  </div>
                  
                  <div className="absolute inset-0 top-12 bottom-0 overflow-y-auto p-2">
                     <MerchStore />
                  </div>
                  
                  {/* Sfumatura in basso per coprire lo scroll */}
                  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#161616] to-transparent pointer-events-none" />
               </div>
            </div>

          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}