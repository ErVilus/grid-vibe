'use client';

import React, { useState, useEffect } from 'react';

const CountdownTicker = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });
  const [finished, setFinished] = useState(false);
  const [lastChanged, setLastChanged] = useState<'d' | 'h' | 'm' | 's' | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setFinished(true);
        setTimeLeft({ d: '00', h: '00', m: '00', s: '00' });
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      const next = {
        d: d.toString().padStart(2, '0'),
        h: h.toString().padStart(2, '0'),
        m: m.toString().padStart(2, '0'),
        s: s.toString().padStart(2, '0'),
      };

      (['d', 'h', 'm', 's'] as const).forEach((unit) => {
        if (next[unit] !== timeLeft[unit]) setLastChanged(unit);
      });

      setTimeLeft(next);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate, timeLeft]);

  return (
    <div className="w-full max-w-sm mx-auto my-4">
      <div className="flex justify-between items-end gap-3">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center flex-1 group">
            <div
              className={`
                relative w-full bg-background-carbon border border-white/10 rounded-xl 
                px-2 py-3 overflow-hidden
                shadow-[0_0_20px_rgba(0,0,0,0.6)]
                transition-transform duration-300
                group-hover:-translate-y-1 group-hover:shadow-[0_0_24px_rgba(0,229,255,0.4)]
              `}
            >
              <div className="pointer-events-none absolute inset-0 bg-primary-neon/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span
                className={`
                  relative block text-3xl md:text-4xl font-mono font-black text-white tracking-widest tabular-nums
                  transition-transform duration-300
                  ${lastChanged === unit ? 'flip-anim' : ''}
                `}
              >
                {value}
              </span>
            </div>
            <span className="text-[10px] font-bold text-text-dim uppercase mt-1 tracking-[0.25em]">
              {unit === 'd' ? 'Days' : unit === 'h' ? 'Hrs' : unit === 'm' ? 'Mins' : 'Secs'}
            </span>
          </div>
        ))}
      </div>

      {finished && (
        <p className="mt-3 text-center text-xs font-mono text-primary-neon animate-pulse">
          Session live • countdown complete
        </p>
      )}
    </div>
  );
};

export default CountdownTicker;
