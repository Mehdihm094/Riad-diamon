import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode };

// Composant bouton réutilisable, stylisé doré et arrondi
export default function Button({ children, className = '', ...props }: Props) {
  return (
    <button {...props} className={`px-4 py-2 rounded-full gold-btn text-black font-semibold ${className}`}>
      {children}
    </button>
  );
}
