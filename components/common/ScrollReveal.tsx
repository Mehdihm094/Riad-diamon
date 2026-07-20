"use client";
import React, { useEffect, useRef } from 'react';

type Props = { children: React.ReactNode; className?: string };

// Wrapper qui révèle son contenu à l'apparition via IntersectionObserver
export default function ScrollReveal({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
