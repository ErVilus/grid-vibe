'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Clock, Share2, User, Tag, Calendar } from 'lucide-react';

const newsDB: Record<string, any> = {
  '1': {
    title: "Verstappen: 'Il giro perfetto a Monaco non esiste'",
    category: 'QUALIFYING',
    date: '25 May 2025 • 14:30',
    author: 'Matteo Senna',
    source: 'F1 Official',
    image: '/news/verstappen.jpg', // <-- Immagine Locale
    content: `
      MONTE CARLO - Max Verstappen ha gettato acqua sul fuoco delle aspettative per la qualifica di domani, definendo il circuito di Monaco come "la sfida definitiva" per la nuova generazione di vetture a effetto suolo.
      
      "Non esiste il giro perfetto qui," ha dichiarato l'olandese ai microfoni nel paddock dopo le FP3. "Ogni volta che pensi di aver baciato il guardrail al punto giusto, ti accorgi che potevi osare un millimetro in più. O che hai rischiato troppo e sei stato fortunato."
      
      Red Bull ha portato un pacchetto aerodinamico specifico ad alto carico, ma le simulazioni indicano che Ferrari potrebbe avere un vantaggio di trazione in uscita dalle curve lente come il Portier e la Rascasse.
      
      "Le qualifiche qui sono il 90% della gara. Domani non si tratta di gestire le gomme, si tratta di pura sopravvivenza e velocità bruta. Se parti dietro, è finita," ha concluso il tre volte campione del mondo.
    `
  },
  '2': {
    title: "Analisi Tecnica: Il nuovo fondo Ferrari SF-25 EVO",
    category: 'TECHNICAL',
    date: '25 May 2025 • 13:45',
    author: 'Giorgio Piola Jr.',
    source: 'Tech Talk',
    image: '/news/fondosf25.png', // <-- Immagine Locale
    content: `
      La Scuderia Ferrari è arrivata a Monaco con un aggiornamento cruciale al fondo della SF-25. Le modifiche si concentrano sulla zona davanti alle ruote posteriori e sui canali Venturi.
      
      Dalle immagini raccolte in pitlane, si nota un nuovo taglio longitudinale sul bordo del marciapiede, progettato per sigillare meglio il flusso d'aria e generare carico aerodinamico stabile anche alle basse velocità tipiche del Principato.
      
      I dati GPS delle prime libere confermano che la Rossa è la vettura più rapida nel Settore 2, quello più guidato. Se Leclerc riuscirà a mettere insieme i settori senza errori, la Pole Position è un obiettivo assolutamente realistico.
    `
  },
  '3': {
    title: "Hamilton frustrato dal traffico: 'È un incubo là fuori'",
    category: 'TEAM RADIO',
    date: '25 May 2025 • 12:10',
    author: 'Sarah Holt',
    source: 'Paddock Insider',
    image: '/news/hamiltonfrustrato.png', // <-- Immagine Locale
    content: `
      Le FP3 sono state caratterizzate da un traffico intenso che ha impedito a molti piloti di completare le simulazioni di qualifica. Il più vocale via radio è stato Lewis Hamilton.
      
      "Non riesco a trovare uno spazio pulito, è ridicolo," ha comunicato al suo ingegnere Peter Bonnington in un messaggio colorito. "Tutti si fermano nel terzo settore per preparare il giro. È pericoloso e antisportivo."
      
      La gestione del traffico in Q1 sarà fondamentale domani. Con 20 macchine in pista su un tracciato di soli 3.3 km, il rischio di bandiere gialle o impedimenti è altissimo. La FIA ha avvertito che sarà severa sui delta time minimi.
    `
  },
  '4': {
    title: "FIA: Nessuna investigazione per l'incidente in Curva 1",
    category: 'REGULATIONS',
    date: '25 May 2025 • 11:00',
    author: 'FIA Press Office',
    source: 'FIA Official',
    image: null,
    content: `
      I commissari sportivi del Gran Premio di Monaco hanno deciso di non intraprendere ulteriori azioni riguardo al contatto avvenuto durante le FP3 tra la Haas di Magnussen e la Sauber di Bottas alla Sainte Dévote.
      
      Dopo aver analizzato la telemetria e i video on-board, è stato stabilito che nessuno dei due piloti era prevalentemente colpevole. Bottas era nel suo giro di lancio e ha cercato di dare spazio, ma la conformazione della pista non ha permesso di evitare il contatto leggero.
      
      Nessuna penalità in griglia sarà applicata.
    `
  }
};

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const news = newsDB[id as string];

  if (!news) return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-black mb-2">404</h1>
        <p className="text-gray-500 mb-6">Notizia non trovata.</p>
        <button 
            onClick={() => router.back()} 
            className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold transition-colors"
        >
            Torna al Feed
        </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 pb-32 animate-fade-in">
      
      <div className="max-w-[1000px] mx-auto">
        <button 
          onClick={() => router.back()} 
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-sm uppercase tracking-wider">Back to Feed</span>
        </button>

        <article>
            <div className="mb-8 border-b border-white/10 pb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-primary-neon text-black text-xs font-black px-3 py-1 rounded uppercase tracking-wider shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                        {news.category}
                    </span>
                    <span className="text-gray-500 text-xs font-mono flex items-center gap-1">
                        <Calendar size={12} /> {news.date}
                    </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter text-white mb-6 leading-tight">
                    {news.title}
                </h1>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                            <User size={20} className="text-primary-neon" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white">{news.author}</p>
                            <p className="text-xs text-gray-500 uppercase font-mono">Source: {news.source}</p>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider hover:bg-white/5 px-3 py-2 rounded-lg">
                        <Share2 size={18} /> <span className="hidden sm:inline">Share Article</span>
                    </button>
                </div>
            </div>

            {news.image && (
                <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-10 border border-white/10 shadow-2xl">
                    <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
            )}

            <div className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed font-sans">
                {news.content.split('\n').map((paragraph: string, idx: number) => (
                    paragraph.trim() && <p key={idx} className="mb-6 first-letter:text-3xl first-letter:font-black first-letter:text-primary-neon first-letter:mr-1">{paragraph}</p>
                ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                    {['F1', 'MonacoGP', '2025', news.category].map(tag => (
                        <span key={tag} className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-gray-400 hover:text-white hover:border-primary-neon cursor-pointer transition-all">
                            <Tag size={12} /> #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
      </div>
    </div>
  );
}