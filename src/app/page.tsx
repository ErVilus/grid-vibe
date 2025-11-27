'use client';

import React from 'react';
import BottomNavBar from '@/components/navigation/BottomNavBar';
import RaceCalendar from '@/components/calendar/RaceCalendar';
import { ThemeProvider } from '@/context/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background-deep text-text-ghost pb-32">
        {/* Header Semplice */}
        <header className="p-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent sticky top-0 z-10 backdrop-blur-sm">
          <div>
            <h1 className="text-2xl font-black italic tracking-tighter text-white">GRID <span className="text-primary-neon">VIBE</span></h1>
            <p className="text-[10px] font-mono text-text-dim">RACE WEEKEND • MONACO</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
        </header>

        {/* Contenuto Principale: Qui carichiamo i widget */}
        <div className="flex flex-col gap-6">
          <RaceCalendar />
          
          {/* Placeholder per quando aggiungerai gli altri file */}
          <div className="px-4">
             <div className="p-6 rounded-2xl border border-dashed border-white/10 flex items-center justify-center text-text-dim text-sm">
                Altri widget (Meteo, Telemetria) appariranno qui man mano che crei i file.
             </div>
          </div>
        </div>

        {/* Barra di Navigazione Flottante */}
        <BottomNavBar />
      </main>
    </ThemeProvider>
  );
}