'use client';

import React, { useState } from 'react';
import { ShoppingBag, Plus, Heart, X, Trash2, ArrowRight } from 'lucide-react';

const products = [
  { id: 1, name: 'Neon Team Hoodie', price: 89.99, image: '/merch/hoodie.png', tag: 'BESTSELLER' },
  { id: 2, name: 'Carbon Cap 2025', price: 45.00, image: '/merch/cap.png', tag: 'NEW' },
  { id: 3, name: 'Trackside Tee', price: 35.50, image: '/merch/tee.png' },
  { id: 4, name: 'Scale Model 1:18', price: 120.00, image: '/merch/model.png', tag: 'LIMITED' },
];

const MerchStore = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Mock iniziale

  return (
    <div className="w-full pb-24 px-4 pt-6 relative min-h-screen">
      
      {/* Header Store */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-black text-white italic tracking-tighter">THE DRIP</h1>
          <p className="text-xs text-text-dim font-mono">OFFICIAL TEAM GEAR</p>
        </div>
        <button 
          onClick={() => setIsCartOpen(true)}
          className="bg-white/10 p-2 rounded-full relative hover:bg-white/20 transition-colors"
        >
          <ShoppingBag size={24} className="text-white" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-neon rounded-full text-[10px] font-bold text-background-deep flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Griglia Prodotti */}
      <div className="grid grid-cols-2 gap-4">
        {products.map((item) => (
          <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#1a1a1a] border border-white/5 hover:border-primary-neon/50 transition-all">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10" />
            
            {/* Placeholder immagine */}
            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center text-white/10 font-black text-4xl">
               IMG
            </div>

            {item.tag && (
              <div className="absolute top-3 left-3 z-20">
                <span className="bg-primary-neon text-background-deep text-[10px] font-black px-2 py-1 rounded shadow-[0_0_10px_rgba(0,229,255,0.5)]">
                  {item.tag}
                </span>
              </div>
            )}

            <button className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center text-white hover:text-secondary-alert transition-colors">
              <Heart size={16} />
            </button>

            <div className="absolute bottom-0 left-0 w-full p-4 z-20">
              <h3 className="text-white font-bold leading-tight mb-1 truncate">{item.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-primary-neon font-mono font-bold">${item.price.toFixed(2)}</span>
                <button 
                  onClick={() => setCartCount(prev => prev + 1)}
                  className="w-8 h-8 bg-white text-background-deep rounded-full flex items-center justify-center hover:bg-primary-neon hover:scale-110 active:scale-95 transition-all"
                >
                  <Plus size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button (FAB) che apre il carrello */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-primary-neon text-background-deep rounded-full shadow-[0_0_30px_rgba(0,229,255,0.4)] flex items-center justify-center z-30 hover:scale-110 transition-transform active:scale-95 border-2 border-white/20"
      >
        <ShoppingBag size={24} strokeWidth={2.5} />
      </button>

      {/* --- CART DRAWER (IL CARRELLO LATERALE) --- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop scuro che chiude il carrello se cliccato */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsCartOpen(false)}
          />
          
          {/* Pannello Carrello */}
          <div className="relative w-full max-w-sm h-full bg-[#121212] border-l border-white/10 shadow-2xl flex flex-col animate-slide-in-right">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1a1a1a]">
              <h2 className="text-xl font-black italic text-white">YOUR CART ({cartCount})</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Fake Cart Item 1 */}
              <div className="flex gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-16 h-16 bg-white/10 rounded-lg" />
                <div className="flex-1">
                   <h3 className="font-bold text-white text-sm">Neon Team Hoodie</h3>
                   <p className="text-xs text-text-dim">Size: L • Qty: 1</p>
                   <div className="flex justify-between items-center mt-2">
                      <span className="text-primary-neon font-mono font-bold">$89.99</span>
                      <button className="text-secondary-alert hover:text-white transition-colors"><Trash2 size={14} /></button>
                   </div>
                </div>
              </div>
              {/* Fake Cart Item 2 */}
              <div className="flex gap-4 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="w-16 h-16 bg-white/10 rounded-lg" />
                <div className="flex-1">
                   <h3 className="font-bold text-white text-sm">Carbon Cap 2025</h3>
                   <p className="text-xs text-text-dim">Size: One Size • Qty: 1</p>
                   <div className="flex justify-between items-center mt-2">
                      <span className="text-primary-neon font-mono font-bold">$45.00</span>
                      <button className="text-secondary-alert hover:text-white transition-colors"><Trash2 size={14} /></button>
                   </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#1a1a1a] border-t border-white/10">
              <div className="flex justify-between items-center mb-4">
                 <span className="text-text-dim text-sm uppercase font-bold">Total</span>
                 <span className="text-2xl font-mono font-bold text-white">$134.99</span>
              </div>
              <button className="w-full py-4 bg-primary-neon text-background-deep font-black uppercase tracking-wider rounded-xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                 Checkout <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default MerchStore;