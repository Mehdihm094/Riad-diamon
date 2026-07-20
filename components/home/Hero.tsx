"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  '/images/1.jpg',
  '/images/3.PNG',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-screen w-full">
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Riad Diamond"
            fill
            className={`object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            priority={i === 0}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-serif">Entrez dans un havre de sérénité</h1>
          <p className="mt-4">Un luxe raffiné au cœur de Marrakech</p>
          <div className="mt-8 mx-auto w-full max-w-3xl rounded-[28px] border border-white/20 bg-white/15 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-end">
              <div className="flex-1 text-left">
                <p className="text-[10px] uppercase tracking-[0.35em] text-amber-200/80">Réservation</p>
                <div className="mt-2 rounded-2xl border border-white/20 bg-black/20 p-3">
                  <label className="mb-1 block text-[11px] uppercase tracking-[0.25em] text-white/70">Arrivée</label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-white/20 bg-white/95 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-200/60"
                  />
                </div>
              </div>

              <div className="flex-1 text-left">
                <div className="rounded-2xl border border-white/20 bg-black/20 p-3">
                  <label className="mb-1 block text-[11px] uppercase tracking-[0.25em] text-white/70">Départ</label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-white/20 bg-white/95 px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-amber-300 focus:ring-2 focus:ring-amber-200/60"
                  />
                </div>
              </div>

              <button className="rounded-full gold-btn px-6 py-3 text-sm font-semibold text-black shadow-lg transition hover:scale-[1.02] md:ml-2">
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 text-3xl z-20"
        onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
        aria-label="Image précédente"
      >
        ‹
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 text-3xl z-20"
        onClick={() => setIndex((index + 1) % slides.length)}
        aria-label="Image suivante"
      >
        ›
      </button>
    </section>
  );
}