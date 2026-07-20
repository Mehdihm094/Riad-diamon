"use client";
import { useEffect } from 'react';

export default function HashScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // small delay to wait layout and avoid being hidden by the navbar
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60);
      }
    }
  }, []);
  return null;
}
