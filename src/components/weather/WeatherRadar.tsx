'use client';

import React, { useEffect, useRef } from 'react';

const WeatherRadar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let angle = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the radar dish
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, 0, 2 * Math.PI);
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
      ctx.stroke();

      // Draw the radar sweep
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2 - 10,
        angle,
        angle + Math.PI / 4
      );
      ctx.closePath();
      ctx.fillStyle = 'rgba(0, 255, 0, 0.2)';
      ctx.fill();

      angle += 0.01;
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return <canvas ref={canvasRef} width="300" height="300" />;
};

export default WeatherRadar;
