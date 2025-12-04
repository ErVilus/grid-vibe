'use client';

import React from 'react';
import { MapPin, Calendar as CalIcon, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import CountdownTicker from './CountdownTicker';

const races = [
  { id: 1, name: 'Monaco Grand Prix', circuit: 'Circuit de Monaco', date: '2025-05-25T15:00:00', status: 'upcoming', flag: '🇲🇨' },
  { id: 2, name: 'Spanish Grand Prix', circuit: 'Circuit de Barcelona-Catalunya', date: '2025-06-01T15:00:00', status: 'upcoming', flag: '🇪🇸' },
  { id: 3, name: 'Canadian Grand Prix', circuit: 'Circuit Gilles-Villeneuve', date: '2025-06-15T20:00:00', status: 'upcoming', flag: '🇨🇦' },
];

const RaceCalendar = () => {
  const router = useRouter();

  const handleRaceClick = (raceId: number) => {
    router.push(`/calendar/${raceId}`);
  };

  return (
    <div className="w-full pb-24 px-4 pt-6 space-y-6">
      <h1 className="text-2xl font-black text-white italic tracking-tighter mb-4">
        RACE CAL <span className="text-primary-neon">25</span>
      </h1>

      {races.map((race, index) => {
        const isNext = index === 0;
        const localTime = new Date(race.date).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        const localDate = new Date(race.date).toLocaleDateString([], {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });

        if (isNext) {
          return (
            <div
              key={race.id}
              className="relative w-full cursor-pointer"
              onClick={() => handleRaceClick(race.id)}
            >
              <div className="absolute inset-0 bg-primary-neon blur-[50px] opacity-20" />
              <div className="glass-panel border-primary-neon/40 rounded-3xl p-6 relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,229,255,0.35)]">
                <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-transparent via-primary-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl -rotate-12 translate-x-8 -translate-y-8 text-white select-none">
                  {race.flag}
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary-neon text-background-deep text-xs font-black px-2 py-0.5 rounded-full animate-pulse">
                    NEXT UP
                  </span>
                  <span className="text-primary-neon text-xs font-mono tracking-[0.25em] uppercase">
                    round {race.id.toString().padStart(2, '0')}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white leading-none mb-2">
                  {race.name.toUpperCase()}
                </h2>
                <div className="flex items-center gap-2 text-text-dim text-sm mb-4">
                  <MapPin size={14} />
                  <span>{race.circuit}</span>
                </div>

                <CountdownTicker targetDate={race.date} />

                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                  <div className="flex flex-col">
                    <span className="text-xs text-text-dim uppercase">Lights Out (Local)</span>
                    <span className="text-xl font-bold text-white">{localTime}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-text-dim uppercase">Date</span>
                    <span className="text-xl font-bold text-white flex items-center gap-1">
                      <CalIcon size={14} className="text-primary-neon" />
                      {localDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        return (
          <button
            key={race.id}
            onClick={() => handleRaceClick(race.id)}
            className="w-full text-left glass-panel rounded-xl p-4 flex items-center justify-between group
                       hover:bg-white/5 hover:border-primary-neon/40 border border-white/5
                       transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-neon/60"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-white/5 rounded flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                {race.flag}
              </div>
              <div>
                <h3 className="text-white font-bold leading-tight flex items-center gap-2">
                  {race.name}
                  <span className="text-[9px] uppercase font-mono text-primary-neon/80 border border-primary-neon/40 px-1 py-[1px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    details
                  </span>
                </h3>
                <p className="text-text-dim text-xs">
                  {localDate} • {localTime}
                </p>
              </div>
            </div>
            <span className="text-white/20 group-hover:text-primary-neon transition-colors transform group-hover:translate-x-1">
              <ChevronRight />
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default RaceCalendar;
