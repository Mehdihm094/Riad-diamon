"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>20);
    window.addEventListener('scroll',onScroll);
    return ()=>window.removeEventListener('scroll',onScroll);
  },[]);

  // anchor handling for "Activités"
  const pathname = usePathname();
  const router = useRouter();
  const handleActivitiesClick = (e: React.MouseEvent) => {
    if (typeof window === 'undefined') return;
    if (pathname === '/') {
      e.preventDefault();
      document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      router.push('/#activities');
    }
  };

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gold/90 shadow-lg shadow-amber-500/15 ring-1 ring-white/15">
            <Image
              src="/images/riad-logo.png"
              alt="Logo Diamond of Marrakech"
              width={40}
              height={40}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="block font-serif text-2xl tracking-[0.06em] text-stone-900">Diamond of Marrakech</span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-stone-600">Riad de luxe</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-stone-800 md:flex">
          <Link href="/" className="transition hover:text-amber-700">Accueil</Link>
          <Link href="/le-riad" className="transition hover:text-amber-700">Le Riad</Link>
          <div className="group relative">
            <button className="transition hover:text-amber-700">Chambres</button>
            <div className="absolute left-0 top-full mt-3 hidden min-w-[160px] rounded-2xl border border-stone-200 bg-white/95 p-3 shadow-xl group-hover:block">
              <Link href="/chambres" className="block rounded-xl px-3 py-2 transition hover:bg-stone-100">Toutes les chambres</Link>
            </div>
          </div>
          <Link href="/spa-hammam" className="transition hover:text-amber-700">Spa & Hammam</Link>
          <Link href="/restaurant" className="transition hover:text-amber-700">Le Restaurant</Link>
          <Link href="/#activities" onClick={handleActivitiesClick} className="transition hover:text-amber-700">Activités</Link>
          <Link href="/galerie" className="transition hover:text-amber-700">Galerie</Link>
          <Link href="/contact" className="rounded-full border border-stone-300 px-4 py-2 font-semibold transition hover:border-amber-600 hover:text-amber-700">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <select aria-label="Langue" className="rounded-full border border-stone-300 bg-white/80 px-3 py-2 text-sm outline-none">
              <option>FR</option>
              <option>EN</option>
            </select>
          </div>
          <button className="rounded-full border border-stone-300 bg-white/80 p-2.5 shadow-sm md:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">
            <span className="mb-1 block h-0.5 w-6 bg-stone-800"></span>
            <span className="mb-1 block h-0.5 w-6 bg-stone-800"></span>
            <span className="block h-0.5 w-6 bg-stone-800"></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-stone-200 bg-white/95 px-4 py-4 md:hidden">
          <Link href="/" className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100">Accueil</Link>
          <Link href="/le-riad" className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100">Le Riad</Link>
          <Link href="/chambres" className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100">Chambres</Link>
          <Link href="/spa-hammam" className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100">Spa & Hammam</Link>
          <Link href="/restaurant" className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100">Le Restaurant</Link>
          <Link href="/#activities" onClick={handleActivitiesClick} className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100">Activités</Link>
          <Link href="/galerie" className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100">Galerie</Link>
          <Link href="/contact" className="block rounded-xl px-3 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-100">Contact</Link>
        </div>
      )}
    </header>
  );
}
