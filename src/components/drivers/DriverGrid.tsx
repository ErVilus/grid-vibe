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
    teamColor: 'from-blue-600 to-blue-800'
  },
  { 
    id: 3, 
    name: 'LECLERC', 
    number: '16', 
    team: 'Ferrari', 
    image: '/images/leclerc.jpg',
    points: 441,
    teamColor: 'from-red-600 to-red-800'
  },
  { 
    id: 2, 
    name: 'HAMILTON', 
    number: '44', 
    team: 'Mercedes', 
    image: '/images/hamilton.jpg',
    points: 486,
    teamColor: 'from-teal-400 to-cyan-600'
  },
  {
    id: 4, 
    name: 'NORRIS', 
    number: '4', 
    team: 'McLaren', 
    image: '/images/norris.jpg',
    points: 397,
    teamColor: 'from-orange-500 to-orange-700'
  },
  { 
    id: 5, 
    name: 'ALONSO', 
    number: '14', 
    team: 'Aston Martin', 
    image: '/images/alonso.jpg',
    points: 234,
    teamColor: 'from-green-600 to-emerald-800'
  },
];

const DriverGrid = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center space-y-4">
          <h1 className="text-6xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-500 animate-pulse">
            F1 DRIVERS
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-red-500"></div>
            <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">
              2024 Season
            </p>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-red-500"></div>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {drivers.map((driver, index) => (
          <div 
            key={driver.id} 
            className="group relative cursor-pointer"
            style={{ 
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Glow Effect on Hover */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${driver.teamColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500`}></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-b from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
              
              {/* Top Accent Bar */}
              <div className={`h-1.5 bg-gradient-to-r ${driver.teamColor}`}></div>
              
              {/* Driver Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${driver.teamColor} opacity-20`}></div>
                <img 
                  src={driver.image} 
                  alt={driver.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                {/* Driver Number Overlay - TOP LEFT */}
                <div className="absolute top-4 left-4">
                  <div className="text-7xl font-black italic text-white/20 leading-none">
                    {driver.number}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 space-y-4">
                
                {/* Driver Info */}
                <div className="space-y-1">
                  <h2 className="text-2xl font-black text-white uppercase tracking-wide">
                    {driver.name}
                  </h2>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${driver.teamColor} bg-clip-text text-transparent`}>
                    {driver.team}
                  </p>
                </div>

                {/* Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-mono uppercase">Points</span>
                    <span className="text-xl font-bold text-white">{driver.points}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${driver.teamColor} transition-all duration-1000`}
                      style={{ width: `${(driver.points / 600) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="flex justify-between pt-2 border-t border-white/5">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 font-mono">WINS</div>
                    <div className="text-lg font-bold text-white">{Math.floor(driver.points / 50)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 font-mono">PODIUMS</div>
                    <div className="text-lg font-bold text-white">{Math.floor(driver.points / 30)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 font-mono">POSITION</div>
                    <div className="text-lg font-bold text-white">#{index + 1}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default DriverGrid;
