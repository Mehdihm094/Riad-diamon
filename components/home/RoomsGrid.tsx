import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';

const rooms = [
  { name: 'Chambre Standard', image: '/images/rooms/standard.PNG' },
  { name: 'Chambre Supérieure', image: '/images/rooms/superieure.PNG' },
  { name: 'Chambre Deluxe', image: '/images/rooms/deluxe.PNG' },
  { name: 'Suite Junior', image: '/images/rooms/suite-junior.PNG' },
  { name: 'Suite Deluxe', image: '/images/rooms/suite-deluxe.PNG' },
];

export default function RoomsGrid(){
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <ScrollReveal>
        <SectionTitle title="Chambres & Suites" eyebrow={undefined}>
          Nos hébergements allient charme traditionnel et confort moderne.
        </SectionTitle>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((r, i) => (
          <ScrollReveal key={r.name}>
            <div className="relative rounded-lg overflow-hidden border border-gold">
              <Image
                src={r.image}
                alt={r.name}
                width={800}
                height={600}
                className="object-cover h-48 w-full"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <div className="bg-black/40 text-white rounded px-3 py-2">
                  {r.name} — <a href="/chambres" className="underline">Découvrir →</a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}