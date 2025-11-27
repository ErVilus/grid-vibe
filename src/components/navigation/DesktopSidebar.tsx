'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Map, Users, Calendar, Video, User, Settings, Globe } from 'lucide-react';

const DesktopSidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { icon: Video, label: 'Live Center', path: '/live' },
    { icon: Calendar, label: 'Calendar', path: '/calendar' },
    { icon: Map, label: 'Race Atlas', path: '/atlas' },
    { icon: Users, label: 'The Grid', path: '/grid' },
    { icon: Globe, label: 'News Feed', path: '/' }, // Home
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#121212] border-r border-white/5 flex flex-col z-50">
      {/* Logo Area */}
      <div className="p-8">
        <h1 className="text-3xl font-black italic tracking-tighter text-white">
          GRID <span className="text-primary-neon drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">VIBE</span>
        </h1>
        <p className="text-[10px] text-gray-500 font-mono mt-1 tracking-widest">PRO DASHBOARD v1.0</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path || (item.path === '/' && pathname === '/');
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.path} 
              href={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all group ${
                isActive 
                  ? 'bg-primary-neon/10 text-primary-neon border border-primary-neon/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={20} className={isActive ? 'drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]' : ''} />
              <span className="font-bold text-sm tracking-wide">{item.label}</span>
              
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-neon animate-pulse" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer / User */}
      <div className="p-4 mt-auto border-t border-white/5">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-neon to-blue-600 flex items-center justify-center font-black text-black">
                OP
            </div>
            <div>
                <p className="text-sm font-bold text-white">Operator</p>
                <p className="text-xs text-green-500 font-mono">● Online</p>
            </div>
            <Settings size={18} className="ml-auto text-gray-500" />
        </div>
      </div>
    </aside>
  );
};

export default DesktopSidebar;