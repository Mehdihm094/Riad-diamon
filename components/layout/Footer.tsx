import Link from 'next/link';

export default function Footer(){
  return (
    <footer className="bg-neutral-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold rounded-full" />
            <h3 className="font-serif text-xl">Riad Diamond</h3>
          </div>
          <p className="mt-4 text-sm">Un havre de paix au cœur de la médina de Marrakech.</p>
        </div>

        <div>
          <h4 className="font-semibold">Our Address</h4>
          <p className="text-sm mt-2">Quartier de la médina, Marrakech</p>
          <p className="text-sm">Tél réception: +212 6 15 64 98</p>
          <p className="text-sm">Tél réservation: +212 7 85 95 46</p>
          <p className="text-sm">Email: contact@riad-diamond.com</p>
        </div>

        <div>
          <h4 className="font-semibold">Réseaux</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>TripAdvisor</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="bg-black/30 text-center py-4 text-sm">© {new Date().getFullYear()} Riad Diamond. Tous droits réservés.</div>
      <a href="#top" className="fixed right-6 bottom-6 bg-gold text-black p-3 rounded-full">↑</a>
    </footer>
  );
}
