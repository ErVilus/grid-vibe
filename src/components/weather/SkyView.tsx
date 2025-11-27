import React, { useRef, useEffect, useState } from 'react';
import { CloudRain, Wind, Thermometer, Droplets } from 'lucide-react';

const SkyView = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [weatherData] = useState({ air: 24, track: 38, humidity: 62, wind: 12 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    let animationFrameId: number;
    const clouds = Array.from({ length: 6 }, () => ({
      x: Math.random() * canvas.width,
      y: 40 + Math.random() * (canvas.height * 0.4),
      radius: 40 + Math.random() * 50,
      speed: 0.3 + Math.random() * 0.4,
    }));

    const raindrops = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: 8 + Math.random() * 10,
      speed: 4 + Math.random() * 3,
    }));

    let radarAngle = 0;

    const render = () => {
      const w = canvas.width / window.devicePixelRatio;
      const h = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, w, h);

      // background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, h);
      bgGradient.addColorStop(0, '#050814');
      bgGradient.addColorStop(1, '#050505');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, w, h);

      // radar center
      const radarCenterX = w * 0.5;
      const radarCenterY = h * 0.5;
      const radarRadius = Math.min(w, h) * 0.42;

      ctx.save();
      ctx.translate(radarCenterX, radarCenterY);

      // radar rings
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0,229,255,0.12)';
        ctx.lineWidth = 1;
        ctx.arc(0, 0, (radarRadius / 3) * i, 0, Math.PI * 2);
        ctx.stroke();
      }

      // radar sweep
      const sweepGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radarRadius);
      sweepGradient.addColorStop(0, 'rgba(0,229,255,0.45)');
      sweepGradient.addColorStop(1, 'rgba(0,229,255,0)');
      ctx.fillStyle = sweepGradient;
      ctx.rotate((radarAngle * Math.PI) / 180);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radarRadius, -0.18, 0.18);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      radarAngle = (radarAngle + 0.8) % 360;

      // TRACK ISOMETRICO CENTRATO
      ctx.save();

      const baseWidth = 500;
      const baseHeight = 400;
      const scale = (radarRadius * 1.4) / Math.max(baseWidth, baseHeight);

      ctx.translate(radarCenterX, radarCenterY);
      ctx.scale(scale, scale);
      ctx.translate(-baseWidth / 2, -baseHeight / 2);

      ctx.beginPath();
      ctx.strokeStyle = '#303030';
      ctx.lineWidth = 22;
      ctx.lineJoin = 'round';
      ctx.moveTo(100, 120);
      ctx.lineTo(280, 60);
      ctx.lineTo(380, 140);
      ctx.lineTo(420, 260);
      ctx.lineTo(260, 320);
      ctx.lineTo(140, 280);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth = 3;
      ctx.shadowBlur = 18;
      ctx.shadowColor = '#00E5FF';
      ctx.moveTo(100, 120);
      ctx.lineTo(280, 60);
      ctx.lineTo(380, 140);
      ctx.lineTo(420, 260);
      ctx.lineTo(260, 320);
      ctx.lineTo(140, 280);
      ctx.closePath();
      ctx.stroke();
      ctx.shadowBlur = 0;

      // pit lane
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(250,250,250,0.4)';
      ctx.setLineDash([8, 6]);
      ctx.moveTo(120, 140);
      ctx.lineTo(200, 210);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();

      // clouds
      clouds.forEach((cloud) => {
        cloud.x += cloud.speed;
        if (cloud.x > w + cloud.radius) cloud.x = -cloud.radius;
        const gradient = ctx.createRadialGradient(
          cloud.x,
          cloud.y,
          0,
          cloud.x,
          cloud.y,
          cloud.radius
        );
        gradient.addColorStop(0, 'rgba(80,150,255,0.6)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // rain
      ctx.strokeStyle = 'rgba(160,200,255,0.7)';
      ctx.lineWidth = 1;
      raindrops.forEach((drop) => {
        drop.y += drop.speed;
        if (drop.y > h) {
          drop.y = -10;
          drop.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 2, drop.y + drop.length);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black shadow-[0_0_40px_rgba(0,0,0,0.7)]"
    >
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2">
          <CloudRain className="text-primary-neon" size={22} />
          <h2 className="text-lg font-black text-white italic tracking-tight">
            SKY RADAR
          </h2>
        </div>
        <p className="text-[11px] text-text-dim font-mono mt-1 uppercase tracking-[0.2em]">
          live composite // 5 min delay
        </p>
      </div>

      <canvas ref={canvasRef} className="w-full h-full object-cover opacity-90" />

      <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-2">
        <div className="bg-black/65 backdrop-blur-lg rounded-xl p-3 flex-1 border border-white/15">
          <div className="flex items-center gap-2 text-text-dim text-[10px] uppercase font-bold mb-1">
            <Thermometer size={12} /> Air
          </div>
          <span className="text-xl font-mono text-white">
            {weatherData.air}°
          </span>
          <p className="text-[10px] text-gray-400 font-mono mt-1">
            stable • light cloud
          </p>
        </div>
        <div className="bg-black/65 backdrop-blur-lg rounded-xl p-3 flex-1 border border-white/15">
          <div className="flex items-center gap-2 text-text-dim text-[10px] uppercase font-bold mb-1">
            <Droplets size={12} /> Hum
          </div>
          <span className="text-xl font-mono text-primary-neon">
            {weatherData.humidity}%
          </span>
          <p className="text-[10px] text-gray-400 font-mono mt-1">
            light rain cells NW
          </p>
        </div>
        <div className="bg-black/65 backdrop-blur-lg rounded-xl p-3 flex-1 border border-white/15">
          <div className="flex items-center gap-2 text-text-dim text-[10px] uppercase font-bold mb-1">
            <Wind size={12} /> Wind
          </div>
          <span className="text-xl font-mono text-white">
            {weatherData.wind}{' '}
            <span className="text-[10px]">km/h</span>
          </span>
          <p className="text-[10px] text-gray-400 font-mono mt-1">
            crosswind • T1–T4
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkyView;
