'use client';

import React from 'react';
import RaceCalendar from '@/components/calendar/RaceCalendar';
import SkyView from '@/components/weather/SkyView';
import PaddockPass from '@/components/community/PaddockPass';
import MerchStore from '@/components/commerce/MerchStore';
// Importiamo il componente che abbiamo creato
import TrackEvolution from '@/components/telemetry/TrackEvolution'; 
import { ThemeProvider } from '@/context/ThemeContext';
import { Activity, Wind } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900 text-white">
        <div className="max-w-[1600px] mx-auto space-y-8 px-4 py-8">

          {/* HEADER */}
          <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-mono tracking-[0.3em] text-primary-neon/70 uppercase">
                race control // live
              </p>
              <h2 className="mt-1 text-3xl md:text-4xl font-black italic tracking-tight bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent">
                Monaco Grand Prix
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Session: Qualifying • Lap 12 / 78
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2.5 bg-white/5 backdrop-blur rounded-xl border border-emerald-400/30 flex items-center gap-2 shadow-lg shadow-emerald-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <Activity size={16} className="text-emerald-300" />
                <span className="text-xs font-mono text-emerald-100 uppercase tracking-wide">
                  System: Optimal
                </span>
              </div>

              <div className="px-4 py-2.5 bg-red-500/10 backdrop-blur rounded-xl border border-red-500/50 flex items-center gap-2 shadow-lg shadow-red-500/30">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-red-400 font-bold tracking-[0.25em] uppercase">
                  live data
                </span>
              </div>
            </div>
          </header>

          {/* GRID PRINCIPALE */}
          <div className="grid grid-cols-12 gap-6">

            {/* COLONNA SINISTRA */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* CALENDARIO */}
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(248,250,252,0.08)] p-1">
                <RaceCalendar />
              </div>

              {/* METEO + TRACK EVOLUTION */}
              <div className="grid grid-cols-2 gap-6">
                
                {/* Weather Radar */}
                <div className="col-span-2 md:col-span-1 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/60 backdrop-blur-xl p-6 relative overflow-hidden group h-[320px]">
                  <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary-neon/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-white flex items-center gap-2 text-sm uppercase tracking-wide">
                      <Wind size={18} className="text-primary-neon" />
                      Weather Radar
                    </h3>
                    <span className="text-[10px] font-mono text-gray-400 uppercase">
                      track: damp → dry
                    </span>
                  </div>
                  <SkyView />
                </div>

                {/* Track Evolution (Qui usiamo il componente!) */}
                <div className="col-span-2 md:col-span-1 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/60 backdrop-blur-xl p-6 relative overflow-hidden h-[320px]">
                  {/* Glow effect ambientale */}
                  <div className="absolute inset-x-0 -top-20 h-32 bg-gradient-to-b from-primary-neon/15 to-transparent pointer-events-none" />
                  
                  {/* Inserimento del Componente Modulare */}
                  <TrackEvolution />
                </div>

              </div>
            </div>

            {/* COLONNA DESTRA */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* PADDOCK FEED */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-black/80 backdrop-blur-xl h-[600px] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.9)]">
                <div className="p-6 border-b border-white/10 flex items-center justify-between bg-black/50">
                  <h3 className="font-black italic text-lg tracking-tight">
                    PADDOCK FEED
                  </h3>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">
                    social / radio
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <PaddockPass />
                </div>
              </div>

              {/* FLASH SALE / MERCH */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-900/40 via-slate-900/80 to-black/90 backdrop-blur-xl p-6 relative overflow-hidden">
                <div className="absolute -top-24 -right-10 w-40 h-40 rounded-full bg-red-500/30 blur-3xl" />
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <h3 className="font-black italic text-lg tracking-tight">
                    FLASH SALE
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-gray-300 uppercase">
                      Official Merch
                    </span>
                    <span className="text-xs bg-primary-neon text-black px-2 py-1 rounded-full font-bold shadow-md">
                      -20% PITLANE
                    </span>
                  </div>
                </div>
                <div className="h-[300px] overflow-hidden relative rounded-2xl border border-white/10 bg-black/40">
                  <MerchStore />
                  <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#050505] via-black/80 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </ThemeProvider>
  );
} 