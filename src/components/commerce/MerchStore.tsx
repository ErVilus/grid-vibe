import React from 'react';
import { ShoppingBag, Plus, Heart } from 'lucide-react';

const products = [
  { id: 1, name: 'Neon Team Hoodie', price: 89.99, image: '/merch/hoodie.png', tag: 'BESTSELLER' },
  { id: 2, name: 'Carbon Cap 2025', price: 45.00, image: '/merch/cap.png', tag: 'NEW' },
  { id: 3, name: 'Trackside Tee', price: 35.50, image: '/merch/tee.png' },
  { id: 4, name: 'Scale Model 1:18', price: 120.00, image: '/merch/model.png', tag: 'LIMITED' },
];

const MerchStore = () => {
  return (
    <div className="w-full pb-24 px-4 pt-6 relative min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-black text-white italic tracking-tighter">THE DRIP</h1>
          <p className="text-xs text-text-dim font-mono">OFFICIAL TEAM GEAR</p>
        </div>
        <div className="bg-white/10 p-2 rounded-full relative">
          <ShoppingBag size={24} className="text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-neon rounded-full text-[10px] font-bold text-background-deep flex items-center justify-center">2</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {products.map((item) => (
          <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#1a1a1a]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            
            {/* Placeholder for image */}
            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center text-white/10 font-black text-4xl">
               IMG
            </div>

            {item.tag && (
              <div className="absolute top-3 left-3 z-20">
                <span className="bg-primary-neon text-background-deep text-[10px] font-black px-2 py-1 rounded shadow-neon">
                  {item.tag}
                </span>
              </div>
            )}

            <button className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:text-secondary-alert transition-colors">
              <Heart size={16} />
            </button>

            <div className="absolute bottom-0 left-0 w-full p-4 z-20">
              <h3 className="text-white font-bold leading-tight mb-1">{item.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-primary-neon font-mono font-bold">${item.price.toFixed(2)}</span>
                <button className="w-8 h-8 bg-white text-background-deep rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="fixed bottom-24 right-6 w-14 h-14 bg-primary-neon text-background-deep rounded-full shadow-[0_0_30px_rgba(0,229,255,0.4)] flex items-center justify-center z-30 hover:scale-110 transition-transform active:scale-95">
        <ShoppingBag size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default MerchStore;