import React, { useState } from 'react';
import { MessageCircle, Share2, ThumbsUp, ThumbsDown, ShieldAlert } from 'lucide-react';

interface NewsItem {
  id: number;
  type: 'official' | 'rumor';
  title: string;
  source: string;
  time: string;
  image?: string;
  votes?: { real: number; fake: number };
}

const initialNews: NewsItem[] = [
  {
    id: 1,
    type: 'official',
    title: 'UFFICIALE: Rinnovo confermato fino al 2028',
    source: 'F1 Official',
    time: '2m ago',
    image: '/news/contract.jpg'
  },
  {
    id: 2,
    type: 'rumor',
    title: 'Scambio shock? I contatti segreti a Monaco',
    source: 'Insider 007',
    time: '15m ago',
    votes: { real: 45, fake: 12 }
  },
  {
    id: 3,
    type: 'official',
    title: 'Analisi tecnica: Il nuovo fondo Red Bull',
    source: 'Tech Talk',
    time: '1h ago',
    image: '/news/tech.jpg'
  }
];

const PaddockPass = () => {
  const [feed, setFeed] = useState(initialNews);
  const [userVotes, setUserVotes] = useState<Record<number, 'real' | 'fake'>>({});

  const handleVote = (id: number, type: 'real' | 'fake') => {
    if (userVotes[id]) return;

    setUserVotes(prev => ({ ...prev, [id]: type }));
    
    setFeed(current => current.map(item => {
      if (item.id === id && item.votes) {
        return {
          ...item,
          votes: {
            ...item.votes,
            [type]: item.votes[type] + 1
          }
        };
      }
      return item;
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto pb-24 px-4 pt-6 space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-black text-white italic tracking-tighter">PADDOCK PASS</h1>
        <div className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-primary-neon animate-pulse">
          LIVE FEED
        </div>
      </div>

      {feed.map((item) => (
        <div 
          key={item.id}
          className={`relative rounded-2xl overflow-hidden transition-all hover:scale-[1.02] ${
            item.type === 'rumor' 
              ? 'bg-[#1a1a1a] border border-secondary-alert/30' 
              : 'glass-panel border border-white/5'
          }`}
        >
          {item.type === 'rumor' && (
            <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
               <ShieldAlert size={64} className="text-secondary-alert -rotate-12" />
            </div>
          )}

          {item.image && (
            <div className="h-40 w-full bg-gray-800 relative">
               <div className="absolute inset-0 bg-gradient-to-t from-background-deep to-transparent" />
            </div>
          )}

          <div className="p-5 relative z-10">
            <div className="flex justify-between items-start mb-2">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded ${
                item.type === 'rumor' ? 'bg-secondary-alert text-white' : 'bg-primary-neon text-background-deep'
              }`}>
                {item.type === 'rumor' ? 'RUMOR MILL' : 'NEWS'}
              </span>
              <span className="text-xs text-text-dim font-mono">{item.time}</span>
            </div>

            <h2 className="text-xl font-bold text-white leading-tight mb-2">
              {item.title}
            </h2>
            <p className="text-xs text-text-dim mb-4">via {item.source}</p>

            {item.type === 'rumor' ? (
              <div className="bg-black/40 rounded-xl p-3 border border-white/5 mt-4">
                <p className="text-[10px] text-center text-text-dim mb-3 uppercase font-bold">What's the vibe?</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleVote(item.id, 'real')}
                    disabled={!!userVotes[item.id]}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                      userVotes[item.id] === 'real' ? 'bg-green-500 text-black' : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <ThumbsUp size={16} />
                    <span className="font-black text-xs">REAL {item.votes?.real}</span>
                  </button>
                  <button 
                    onClick={() => handleVote(item.id, 'fake')}
                    disabled={!!userVotes[item.id]}
                    className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                      userVotes[item.id] === 'fake' ? 'bg-secondary-alert text-white' : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <ThumbsDown size={16} />
                    <span className="font-black text-xs">FAKE {item.votes?.fake}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
                <button className="flex items-center gap-1 text-text-dim hover:text-white transition-colors">
                  <MessageCircle size={16} />
                  <span className="text-xs">24</span>
                </button>
                <button className="flex items-center gap-1 text-text-dim hover:text-white transition-colors">
                  <Share2 size={16} />
                  <span className="text-xs">Share</span>
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaddockPass;