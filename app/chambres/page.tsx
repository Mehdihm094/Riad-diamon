import Link from 'next/link';

const list = [
  'chambre-standard',
  'chambre-superieure',
  'chambre-deluxe',
  'suite-junior',
  'suite-deluxe'
];

export default function Chambres(){
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#f8f4eb_0%,#fffdf9_100%)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-700">Nos hébergements</p>
          <h1 className="mb-4 font-serif text-4xl text-stone-900 md:text-5xl">Chambres & Suites</h1>
          <p className="text-lg leading-8 text-stone-600">
            Découvrez une sélection raffinée d’espaces de séjour pensée pour le confort, l’intimité et le charme marocain.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {list.map((s, index) => (
            <Link
              key={s}
              href={`/chambres/${s}`}
              className="group rounded-[24px] border border-stone-200 bg-white/80 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Suite {index + 1}</p>
                  <h2 className="mt-2 font-serif text-2xl text-stone-900">{s.replace('-', ' ')}</h2>
                  <p className="mt-3 text-sm leading-7 text-stone-600">
                    Une expérience soignée, avec un décor élégant et des prestations pensées pour un séjour inoubliable.
                  </p>
                </div>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700 transition group-hover:bg-amber-100">
                  Voir la chambre →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
