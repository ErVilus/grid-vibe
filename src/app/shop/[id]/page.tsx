'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ShoppingBag, Star, ShieldCheck, Truck } from 'lucide-react';

const productsDB: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Neon Team Hoodie',
    price: 89.99,
    image: '/merch/hoodie.png',
    description: 'Il capo definitivo per il paddock. Cotone premium con dettagli neon reattivi.',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.9
  },
  '2': {
    id: 2,
    name: 'Carbon Cap 2025',
    price: 45.00,
    image: '/merch/cap.png',
    description: 'Leggerezza estrema. Visiera curva con texture in fibra di carbonio.',
    sizes: ['One Size'],
    rating: 4.7
  },
  '3': {
    id: 3,
    name: 'Trackside Tee',
    price: 35.50,
    image: '/merch/tee.png',
    description: 'T-shirt ufficiale. Design minimale fronte, grafica tecnica retro.',
    sizes: ['S', 'M', 'L', 'XL'],
    rating: 4.5
  },
  '4': {
    id: 4,
    name: 'Scale Model 1:18',
    price: 120.00,
    image: '/merch/model.png',
    description: 'Replica esatta della vettura 2025. Box da collezione numerato.',
    sizes: ['1:18'],
    rating: 5.0
  }
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const product = productsDB[id as string];
  
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);

  if (!product) return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">Prodotto non trovato</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 pb-32 animate-fade-in">
      
      <div className="max-w-[1200px] mx-auto">
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm uppercase tracking-wider">Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="aspect-square rounded-3xl overflow-hidden bg-[#1a1a1a] border border-white/10 relative group">
             <img 
               src={product.image} 
               alt={product.name} 
               className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
             />
          </div>

          <div className="flex flex-col justify-center">
             <div className="flex items-center gap-2 text-primary-neon mb-2">
                <Star size={16} fill="currentColor" />
                <span className="font-bold">{product.rating} Rating</span>
             </div>
             
             <h1 className="text-4xl md:text-5xl font-black italic text-white mb-4 tracking-tight">{product.name}</h1>
             <p className="text-3xl font-mono font-bold text-white mb-6">${product.price.toFixed(2)}</p>
             
             <p className="text-gray-400 leading-relaxed mb-8 border-b border-white/10 pb-8">
               {product.description}
             </p>

             <div className="mb-8">
               <span className="text-sm font-bold uppercase text-gray-500 mb-3 block">Size</span>
               <div className="flex flex-wrap gap-3">
                   {product.sizes.map((size: string) => (
                       <button
                           key={size}
                           onClick={() => setSelectedSize(size)}
                           className={`h-12 px-6 rounded-xl border font-bold transition-all ${
                               selectedSize === size 
                               ? 'bg-primary-neon text-black border-primary-neon' 
                               : 'bg-transparent border-white/10 text-gray-400 hover:border-white/40 hover:text-white'
                           }`}
                       >
                           {size}
                       </button>
                   ))}
               </div>
             </div>

             <button className="w-full h-16 bg-white text-black rounded-xl font-black uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg mb-8">
                <ShoppingBag size={24} /> Add to Cart
             </button>

             <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                 <div className="flex items-center gap-2"><Truck size={16} className="text-primary-neon"/> Fast Shipping</div>
                 <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-primary-neon"/> Official Merch</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}