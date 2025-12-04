'use client';

import React from 'react';
import RaceCalendar from '@/components/calendar/RaceCalendar';
import { Calendar as CalendarIcon, Globe } from 'lucide-react';

export default function CalendarPage() {
  return (
    <div className="max-w-[1200px] mx-auto space-y-8 animate-fade-in px-4 py-8">
      {/* Header */}
      <div className="flex items-end justify-between border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded bg-primary-neon/10 text-primary-neon text-xs font-bold uppercase tracking-wider border border-primary-neon/20">
              Season 2025
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white">
            WORLD{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-neon to-blue-500">
              TOUR
            </span>
          </h1>
          <p className="text-gray-400 font-mono text-sm mt-2 max-w-lg">
            Official FIA Formula 1 World Championship Schedule. Sync your devices and never miss a lights out.
          </p>
        </div>

        <div className="hidden md:flex gap-4">
          <div className="text-right">
            <div className="text-2xl font-black text-white">24</div>
            <div className="text-xs text-gray-500 uppercase font-bold">Races</div>
          </div>
          <div className="w-px h-10 bg-white/10" />
          <div className="text-right">
            <div className="text-2xl font-black text-white">5</div>
            <div className="text-xs text-gray-500 uppercase font-bold">Sprints</div>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendario */}
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-[#121212] p-1 shadow-2xl">
            <div className="bg-white/5 rounded-[20px] p-6 backdrop-blur-sm">
              <RaceCalendar />
            </div>
          </div>
        </div>

        {/* Colonna destra */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-black p-6">
            <h3 className="font-bold text-white flex items-center gap-2 mb-4">
              <Globe size={18} className="text-primary-neon" /> Global Stats
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Continents</span>
                <span className="text-white font-mono">5</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Street Circuits</span>
                <span className="text-white font-mono">7</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Night Races</span>
                <span className="text-white font-mono">6</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 flex flex-col items-center justify-center text-center h-48">
            <CalendarIcon size={32} className="text-gray-600 mb-2" />
            <p className="text-gray-400 text-sm font-bold">Sync to Calendar</p>
            <button className="mt-3 px-4 py-2 bg-white text-black text-xs font-black uppercase rounded hover:scale-105 transition-transform">
              Download .ICS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
