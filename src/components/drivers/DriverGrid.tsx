'use client';

import React from 'react';

const drivers = [
    {
        id: 1,
        name: 'VERSTAPPEN',
        number: '1',
        team: 'Red Bull Racing',
        image: '/images/verstappen.jpg',
        points: 575,
        teamColor: 'hsl(206, 80%, 50%)', // Red Bull Blue
    },
    {
        id: 3,
        name: 'LECLERC',
        number: '16',
        team: 'Ferrari',
        image: '/images/leclerc.jpg',
        points: 441,
        teamColor: 'hsl(0, 100%, 50%)', // Ferrari Red
    },
    {
        id: 2,
        name: 'HAMILTON',
        number: '44',
        team: 'Mercedes',
        image: '/images/hamilton.jpg',
        points: 486,
        teamColor: 'hsl(180, 70%, 50%)', // Mercedes Teal
    },
    {
        id: 4,
        name: 'NORRIS',
        number: '4',
        team: 'McLaren',
        image: '/images/norris.jpg',
        points: 397,
        teamColor: 'hsl(25, 95%, 50%)', // McLaren Orange
    },
    {
        id: 5,
        name: 'ALONSO',
        number: '14',
        team: 'Aston Martin',
        image: '/images/alonso.jpg',
        points: 234,
        teamColor: 'hsl(155, 60%, 40%)', // Aston Martin Green
    },
];

const DriverGrid = () => {
    return (
        <div className="bg-[#0a0a0a] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Grid Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter">
                        THE GRID 2024
                    </h1>
                    <p className="mt-2 text-lg text-gray-400 font-mono tracking-widest">
                        2024 DRIVER ROSTER
                    </p>
                </div>

                {/* Driver Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {drivers.map((driver, index) => (
                        <div
                            key={driver.id}
                            className="group relative flex flex-col justify-between bg-[#111] rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 ease-in-out hover:border-[var(--team-color)] hover:shadow-[0_0_20px_var(--team-color)]"
                            style={{ '--team-color': driver.teamColor } as React.CSSProperties}
                        >
                            {/* Card Header: Driver Number */}
                            <div className="absolute top-0 right-0 p-4 z-10">
                                <span className="text-8xl font-black italic text-white/5 group-hover:text-white/20 transition-colors duration-300">
                                    {driver.number}
                                </span>
                            </div>

                            {/* Driver Image */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={driver.image}
                                    alt={driver.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                {/* Image Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            </div>
                            
                            {/* Card Body */}
                            <div className="p-5 flex-grow flex flex-col justify-end">
                                <h2 className="text-xl font-extrabold text-white uppercase tracking-tight break-words">
                                    {driver.name}
                                </h2>
                                <p
                                    className="text-md font-semibold transition-colors duration-300"
                                    style={{ color: driver.teamColor }}
                                >
                                    {driver.team}
                                </p>
                            </div>

                            {/* Card Footer: Stats */}
                            <div className="p-5 border-t border-white/10 mt-auto">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-gray-400 font-mono">POINTS</p>
                                        <p className="text-2xl font-bold text-white">{driver.points}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400 font-mono">POSITION</p>
                                        <p className="text-2xl font-bold" style={{ color: driver.teamColor }}>#{index + 1}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DriverGrid;
