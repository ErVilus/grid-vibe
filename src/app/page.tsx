'use client';

import React from 'react';
import BottomNavBar from '@/components/navigation/BottomNavBar';
import RaceCalendar from '@/components/calendar/RaceCalendar';
import SkyView from '@/components/weather/SkyView';
import PaddockPass from '@/components/community/PaddockPass';
import MerchStore from '@/components/commerce/MerchStore';
import { ThemeProvider } from '@/context/ThemeContext';
import { Bell, Search } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-[#121212] text-[#F0F0F0] pb-32 overflow-x-hidden">
        
        {/* Background Ambientale (Glow Effects) */}
        <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-neon/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF004D]/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Header */}
        <header className="relative z-10 p-6 flex justify-between items-center bg-white/5 backdrop-blur-md border-b border-white/5 sticky top-0">
          <div>
            <h1 className="text-2xl font-black italic tracking-tighter text-white">
              GRID <span className="text-primary-neon drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">VIBE</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <p className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">Monaco GP • LIVE</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-primary-neon transition-colors">
               <Search size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-primary-neon transition-colors relative">
               <Bell size={18} />
               <span className="absolute top-2 right-2 w-2 h-2 bg-primary-neon rounded-full" />
            </button>
          </div>
        </header>

        {/* Content Stack */}
        <div className="relative z-10 flex flex-col gap-8 p-4 pt-6">
          
          {/* Section 1: NEXT RACE (Hero) */}
          <section>
             <RaceCalendar />
          </section>

          {/* Section 2: TRACK CONDITIONS */}
          <section className="space-y-4">
             <div className="flex justify-between items-end px-2">
                <h2 className="text-xl font-black italic tracking-tighter">TRACK <span className="text-gray-500">INTEL</span></h2>
                <span className="text-[10px] text-primary-neon font-mono uppercase border border-primary-neon/30 px-2 py-1 rounded">Radar Active</span>
             </div>
             <SkyView />
          </section>

          {/* Section 3: NEWS FEED */}
          <section className="space-y-4">
             <div className="px-2">
                <h2 className="text-xl font-black italic tracking-tighter">THE <span className="text-gray-500">FEED</span></h2>
             </div>
             <PaddockPass />
          </section>

           {/* Section 4: STORE HIGHLIGHTS */}
           <section className="space-y-4">
             <div className="px-2 flex justify-between items-center">
                <h2 className="text-xl font-black italic tracking-tighter">TEAM <span className="text-primary-neon">KIT</span></h2>
                <button className="text-xs text-gray-400 underline">View All</button>
             </div>
             {/* Limitiamo l'altezza dello store in home per non renderla infinita */}
             <div className="h-[400px] overflow-hidden relative mask-image-linear-to-b">
                <MerchStore />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none" />
             </div>
          </section>

        </div>

        {/* Nav */}
        <BottomNavBar />
      </main>
    </ThemeProvider>
  );
}