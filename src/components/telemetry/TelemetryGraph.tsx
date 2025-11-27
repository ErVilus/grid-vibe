import React, { useRef, useEffect } from 'react';
import { useTelemetryStore } from '@/store/telemetryStore';

const TelemetryGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { history } = useTelemetryStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    if (history.length < 2) return;

    ctx.beginPath();
    ctx.strokeStyle = '#00E5FF';
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.shadowColor = '#00E5FF';
    ctx.shadowBlur = 10;

    history.forEach((point, index) => {
      const x = (index / (history.length - 1)) * width;
      const normalizedSpeed = (point.speed - 0) / 360; 
      const y = height - (normalizedSpeed * height);
      
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });

    ctx.stroke();

    const lastPoint = history[history.length - 1];
    if (lastPoint) {
       const normalizedSpeed = (lastPoint.speed - 0) / 360; 
       const y = height - (normalizedSpeed * height);
       ctx.fillStyle = '#fff';
       ctx.beginPath();
       ctx.arc(width, y, 4, 0, Math.PI * 2);
       ctx.fill();
    }

  }, [history]);

  return (
    <div className="w-full h-48 bg-background-carbon/30 rounded-xl border border-white/5 relative overflow-hidden">
       <div className="absolute top-2 left-2 text-[10px] text-text-dim uppercase tracking-wider font-bold">Speed Trace</div>
       <canvas 
         ref={canvasRef} 
         width={400} 
         height={200} 
         className="w-full h-full"
       />
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background-deep to-transparent opacity-50 pointer-events-none" />
    </div>
  );
};

export default TelemetryGraph;