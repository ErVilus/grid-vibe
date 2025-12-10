'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const teams = [
  { id: 'redbull', name: 'Red Bull Racing', color: '#0600EF' },
  { id: 'ferrari', name: 'Ferrari', color: '#FF2800' },
  { id: 'mercedes', name: 'Mercedes', color: '#00D2BE' },
  { id: 'mclaren', name: 'McLaren', color: '#FF8000' },
  { id: 'aston', name: 'Aston Martin', color: '#006F62' },
];

const TeamSelector = () => {
  const { setTeam, currentTeam } = useTheme();

  return (
    <div className="mb-12">
        <h3 className="text-center text-sm font-mono uppercase text-gray-400 tracking-widest mb-6">
            Filter by Team
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-4">
            {teams.map((team) => (
                <button
                    key={team.id}
                    onClick={() => setTeam(team.id)}
                    className={`
                        group relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider
                        transition-all duration-300 ease-in-out
                        border 
                        flex items-center gap-3
                        ${
                            currentTeam === team.id
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-white border-white/20 hover:border-white'
                        }
                    `}
                >
                    <span 
                        className="w-3 h-3 rounded-full transition-all duration-300"
                        style={{ 
                            backgroundColor: team.color,
                            boxShadow: currentTeam === team.id ? `0 0 10px ${team.color}` : 'none'
                        }}
                    ></span>
                    {team.name}
                </button>
            ))}
        </div>
    </div>
  );
};

export default TeamSelector;