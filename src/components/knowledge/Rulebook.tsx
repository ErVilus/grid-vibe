import React, { useState } from 'react';
import { Search, BookOpen, AlertTriangle, Flag } from 'lucide-react';

const rulesData = [
  { id: 1, title: 'Track Limits', code: '33.3', category: 'Driving', desc: 'Drivers must use the track at all times. The white lines define the track edge.', penalty: 'Lap deleted + Warning (3x) -> 5s Penalty' },
  { id: 2, title: 'Pit Speed Limit', code: '34.7', category: 'Safety', desc: '80 km/h is the standard limit in the pit lane during all sessions.', penalty: '100€ per km/h over (Practice) / 5s Penalty (Race)' },
  { id: 3, title: 'Blue Flags', code: '55.1', category: 'Flags', desc: 'Shown to a driver about to be lapped. Must allow the faster car to pass at the first opportunity.', penalty: 'Time Penalty / Grid Drop' },
  { id: 4, title: 'Safety Car Restart', code: '55.14', category: 'Safety Car', desc: 'No overtaking allowed until the control line after the Safety Car returns to pits.', penalty: 'Drive-through penalty' },
  { id: 5, title: 'False Start', code: '44.1', category: 'Start', desc: 'Movement before the signal is given or positioning outside the grid box.', penalty: '5s Penalty or Drive-through' },
];

const Rulebook = () => {
  const [query, setQuery] = useState('');

  const filteredRules = rulesData.filter(rule => 
    rule.title.toLowerCase().includes(query.toLowerCase()) || 
    rule.desc.toLowerCase().includes(query.toLowerCase()) ||
    rule.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full p-4 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white italic tracking-tighter">THE RULEBOOK</h1>
          <p className="text-xs text-text-dim">FIA SPORTING REGULATIONS 2025 (SIMPLIFIED)</p>
        </div>
        <BookOpen className="text-white/20" size={32} />
      </div>

      <div className="sticky top-0 z-20 pt-2 pb-4 bg-[#121212]/95 backdrop-blur-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-dim" size={18} />
          <input
            type="text"
            placeholder="Search penalty, flag, or rule..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:border-primary-neon focus:bg-white/10 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredRules.length > 0 ? (
          filteredRules.map((rule) => (
            <div key={rule.id} className="glass-panel p-5 rounded-xl border border-white/5 hover:border-white/20 transition-colors group">
              <div className="flex justify-between items-start mb-2">
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-bold text-text-dim uppercase tracking-wider group-hover:bg-primary-neon group-hover:text-background-deep transition-colors">
                  ART {rule.code} • {rule.category}
                </span>
                {rule.category === 'Flags' ? <Flag size={16} className="text-yellow-500" /> : <AlertTriangle size={16} className="text-white/20" />}
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{rule.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed mb-4">{rule.desc}</p>
              
              <div className="flex items-center gap-2 pt-3 border-t border-dashed border-white/10">
                <span className="text-xs font-bold text-secondary-alert uppercase">Penalty:</span>
                <span className="text-xs text-white font-mono">{rule.penalty}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 opacity-50">
            <p className="text-white font-bold">No rules found.</p>
            <p className="text-sm text-text-dim">Try searching for "Speed" or "Flags"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rulebook;