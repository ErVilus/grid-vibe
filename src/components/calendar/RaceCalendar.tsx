import React from 'react';
import { MapPin, Calendar as CalIcon, ChevronRight } from 'lucide-react';
import CountdownTicker from './CountdownTicker';

const races = [
  { id: 1, name: 'Monaco Grand Prix', circuit: 'Circuit de Monaco', date: '2025-05-25T15:00:00', status: 'upcoming', flag: '🇲🇨' },
  { id: 2, name: 'Spanish Grand Prix', circuit: 'Circuit de Barcelona-Catalunya', date: '2025-06-01T15:00:00', status: 'upcoming', flag: '🇪🇸' },
  { id: 3, name: 'Canadian Grand Prix', circuit: 'Circuit Gilles-Villeneuve', date: '2025-06-15T20:00:00', status: 'upcoming', flag: '🇨🇦' },
];

const RaceCalendar = () => {
  return (
    <div className="w-full pb-24 px-4 pt-6 space-y-6">
      <h1 className="text-2xl font-black text-white italic tracking-tighter mb-4">RACE CAL <span className="text-primary-neon">25</span></h1>

      {races.map((race, index) => {
        const isNext = index === 0;
        const localTime = new Date(race.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const localDate = new Date(race.date).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

        if (isNext) {
          return (
            <div key={race.id} className="relative w-full">
              <div className="absolute inset-0 bg-primary-neon blur-[40px] opacity-20" />
              <div className="glass-panel border-primary-neon/30 rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl -rotate-12 translate-x-8 -translate-y-8 text-white">
                  {race.flag}
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary-neon text-background-deep text-xs font-black px-2 py-0.5 rounded animate-pulse">NEXT UP</span>
                  <span className="text-primary-neon text-xs font-mono">ROUND {race.id}</span>
                </div>

                <h2 className="text-3xl font-black text-white leading-none mb-1">{race.name.toUpperCase()}</h2>
                <div className="flex items-center gap-1 text-text-dim text-sm mb-6">
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
                    <span className="text-xl font-bold text-white">{localDate}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div key={race.id} className="glass-panel rounded-xl p-4 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-white/5 rounded flex items-center justify-center text-xl">
                {race.flag}
              </div>
              <div>
                <h3 className="text-white font-bold leading-tight">{race.name}</h3>
                <p className="text-text-dim text-xs">{localDate} • {localTime}</p>
              </div>
            </div>
            <button className="text-white/20 group-hover:text-primary-neon transition-colors">
              <ChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RaceCalendar;