import React, { useState, useEffect } from 'react';

const CountdownTicker = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff < 0) return clearInterval(interval);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        d: d.toString().padStart(2, '0'),
        h: h.toString().padStart(2, '0'),
        m: m.toString().padStart(2, '0'),
        s: s.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-between items-end w-full max-w-sm mx-auto my-4">
      {Object.entries(timeLeft).map(([unit, value], i) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-background-carbon border border-white/5 rounded-lg p-2 min-w-[60px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary-neon/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-3xl md:text-4xl font-mono font-black text-white tracking-widest tabular-nums animate-pulse-subtle">
              {value}
            </span>
          </div>
          <span className="text-[10px] font-bold text-text-dim uppercase mt-1 tracking-wider">
            {unit === 'd' ? 'Days' : unit === 'h' ? 'Hrs' : unit === 'm' ? 'Mins' : 'Secs'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTicker;