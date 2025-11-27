import React, { useRef, useEffect, useState } from 'react';
import { CloudRain, Wind, Thermometer, Droplets } from 'lucide-react';

const SkyView = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [weatherData] = useState({ air: 24, track: 38, humidity: 62, wind: 12 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const clouds = Array.from({ length: 5 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 40 + Math.random() * 60,
      speed: 0.5 + Math.random() * 0.5
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Isometric Track Outline (Simplified)
      ctx.beginPath();
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 20;
      ctx.moveTo(100, 100);
      ctx.lineTo(300, 50);
      ctx.lineTo(400, 200);
      ctx.lineTo(200, 300);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00E5FF';
      ctx.moveTo(100, 100);
      ctx.lineTo(300, 50);
      ctx.lineTo(400, 200);
      ctx.lineTo(200, 300);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Draw Rain Clouds
      clouds.forEach(cloud => {
        cloud.x += cloud.speed;
        if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius;

        const gradient = ctx.createRadialGradient(cloud.x, cloud.y, 0, cloud.x, cloud.y, cloud.radius);
        gradient.addColorStop(0, 'rgba(0, 100, 255, 0.4)'); // Rain Core
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full h-[400px] relative glass-panel rounded-2xl overflow-hidden border border-white/5">
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2">
           <CloudRain className="text-primary-neon" size={24} />
           <h2 className="text-xl font-black text-white italic">SKY VIEW</h2>
        </div>
        <p className="text-xs text-text-dim font-mono mt-1">RADAR LIVE • 5 MIN DELAY</p>
      </div>

      <canvas ref={canvasRef} width={500} height={400} className="w-full h-full object-cover opacity-80" />

      <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-2">
         <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 flex-1 border border-white/10">
            <div className="flex items-center gap-2 text-text-dim text-[10px] uppercase font-bold mb-1">
               <Thermometer size={12} /> Air
            </div>
            <span className="text-xl font-mono text-white">{weatherData.air}°</span>
         </div>
         <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 flex-1 border border-white/10">
            <div className="flex items-center gap-2 text-text-dim text-[10px] uppercase font-bold mb-1">
               <Droplets size={12} /> Hum
            </div>
            <span className="text-xl font-mono text-primary-neon">{weatherData.humidity}%</span>
         </div>
         <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 flex-1 border border-white/10">
            <div className="flex items-center gap-2 text-text-dim text-[10px] uppercase font-bold mb-1">
               <Wind size={12} /> Wind
            </div>
            <span className="text-xl font-mono text-white">{weatherData.wind} <span className="text-[10px]">km/h</span></span>
         </div>
      </div>
    </div>
  );
};

export default SkyView;