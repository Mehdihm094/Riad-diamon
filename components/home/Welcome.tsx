import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';


export default function Welcome(){
  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <ScrollReveal>
          <SectionTitle eyebrow="BIENVENUE" title="Un luxe raffiné au cœur de Marrakech">
            <p className="mt-4 text-neutral-600">Découvrez un riad traditionnel combinant décoration marocaine et confort moderne. Notre équipe vous accueille pour une expérience inoubliable.</p>
          </SectionTitle>
          <a href="/le-riad" className="inline-block">
            <button className="px-4 py-2 rounded-full gold-btn text-black font-semibold">DÉCOUVRIR LE RIAD →</button>
          </a>
        </ScrollReveal>
      </div>
      <div className="relative">
        <ScrollReveal>
          <div className="border-4 border-gold rounded-lg overflow-hidden">
            <Image src="/images/4.PNG" alt="patio" width={900} height={700} className="object-cover" />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
