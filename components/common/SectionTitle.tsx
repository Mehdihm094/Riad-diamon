import React from 'react';

type Props = { eyebrow?: string; title: string; children?: React.ReactNode };

// Titre de section avec petit eyebrow et style serif
export default function SectionTitle({ eyebrow, title, children }: Props) {
  return (
    <div className="mb-6">
      {eyebrow && <div className="text-sm uppercase tracking-wider text-neutral-500">{eyebrow}</div>}
      <h2 className="text-2xl font-serif mt-1">{title}</h2>
      {children && <div className="mt-2 text-neutral-600">{children}</div>}
    </div>
  );
}
