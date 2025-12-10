'use client';

import React, { useEffect, useRef } from 'react';

// --- SVG Icons (to avoid external dependencies) ---
const IconSunny = ({ size = 24, color = 'currentColor', className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
);

const IconCloudy = ({ size = 24, color = 'currentColor', className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
);

const IconRain = ({ size = 24, color = 'currentColor', className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21.5 16.5A4.5 4.5 0 0 0 17 12h-1.26a8 8 0 1 0-11.48 5.44"></path>
        <path d="M16 14v6"></path>
        <path d="M8 14v6"></path>
        <path d="M12 16v6"></path>
    </svg>
);

const IconWind = ({ size = 24, color = 'currentColor', className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
    </svg>
);

const IconHumidity = ({ size = 24, color = 'currentColor', className = '' }) => (
     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0L12 2.69z" />
    </svg>
);


// Mock weather data
const weatherData = {
    current: {
        temp: 24,
        condition: 'Partly Cloudy',
        windSpeed: 15,
        windDirection: 'NW',
        humidity: 60,
        rainChance: 20,
    },
    forecast: [
        { time: '14:00', temp: 25, condition: 'Sunny' },
        { time: '15:00', temp: 22, condition: 'Cloudy' },
        { time: '16:00', temp: 20, condition: 'Rain' },
    ],
};

const getConditionIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
        case 'sunny':
            return <IconSunny size={14} color="#FFD700" />;
        case 'cloudy':
        case 'partly cloudy':
            return <IconCloudy size={14} color="#A9A9A9" />;
        case 'rain':
            return <IconRain size={14} color="#00BFFF" />;
        default:
            return <IconSunny size={14} color="#FFD700" />;
    }
};


const WeatherRadar = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let angle = 0;
        const radius = canvas.width / 2 - 5;
        const center = { x: canvas.width / 2, y: canvas.height / 2 };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'rgba(0, 255, 0, 0.2)';
            [0.5, 1].forEach(r => {
                ctx.beginPath();
                ctx.arc(center.x, center.y, radius * r, 0, 2 * Math.PI);
                ctx.stroke();
            });
            
            ctx.beginPath();
            const gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, radius);
            gradient.addColorStop(0, `rgba(0, 255, 0, 0.3)`);
            gradient.addColorStop(1, `rgba(0, 255, 0, 0)`);
            ctx.fillStyle = gradient;

            ctx.moveTo(center.x, center.y);
            ctx.arc(center.x, center.y, radius, angle, angle + Math.PI / 2);
            ctx.closePath();
            ctx.fill();

            angle -= 0.03;
            requestAnimationFrame(draw);
        };

        draw();
    }, []);

    return (
        <div className="h-full w-full flex flex-col">
            <div className="flex-grow flex flex-col md:flex-row gap-4 items-center">
                {/* Radar and Current Temp */}
                <div className="flex flex-col items-center justify-center text-center">
                    <canvas ref={canvasRef} width="120" height="120" />
                    <div className="mt-2">
                        <p className="text-3xl font-bold text-white">{weatherData.current.temp}°C</p>
                        <p className="text-gray-400 text-xs">{weatherData.current.condition}</p>
                    </div>
                </div>

                {/* Weather Details & Forecast */}
                <div className="w-full flex-1 space-y-3">
                    {/* Current Details */}
                    <div>
                        <h4 className="font-semibold text-white/80 mb-2 text-xs uppercase tracking-wider">Conditions</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-2 bg-black/20 p-1.5 rounded-md">
                                <IconWind size={16} className="text-gray-300" />
                                <span className="text-gray-200">{weatherData.current.windSpeed}km/h {weatherData.current.windDirection}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-black/20 p-1.5 rounded-md">
                                <IconHumidity size={16} className="text-gray-300" />
                                <span className="text-gray-200">{weatherData.current.humidity}% Hum</span>
                            </div>
                            <div className="flex items-center gap-2 bg-black/20 p-1.5 rounded-md col-span-2">
                                <IconRain size={16} className="text-blue-400" />
                                <span className="text-gray-200">{weatherData.current.rainChance}% Rain Chance</span>
                            </div>
                        </div>
                    </div>

                    {/* Forecast */}
                    <div>
                        <h4 className="font-semibold text-white/80 mb-2 text-xs uppercase tracking-wider">Forecast</h4>
                        <div className="space-y-1">
                            {weatherData.forecast.map((item, index) => (
                                <div key={index} className="flex justify-between items-center text-xs bg-black/20 p-1.5 rounded-md">
                                    <span className="text-gray-400 font-mono w-1/4">{item.time}</span>
                                    <div className="flex items-center gap-1.5 justify-center w-1/2">
                                        {getConditionIcon(item.condition)}
                                        <span className="text-gray-300 hidden sm:inline">{item.condition}</span>
                                    </div>
                                    <span className="font-bold text-white w-1/4 text-right">{item.temp}°C</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherRadar;
