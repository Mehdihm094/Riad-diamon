import Image from 'next/image';
import ScrollReveal from '../common/ScrollReveal';
import SectionTitle from '../common/SectionTitle';

export default function SpaSection(){
  return (
    <div className="max-w-7xl mx-auto px-6">
      <ScrollReveal>
        <SectionTitle title="Éveillez vos sens dans notre spa luxueux" />
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-6">
        <ScrollReveal>
          <div>
            <Image src="/images/7.png" alt="spa" width={900} height={600} className="rounded" />
            <p className="mt-2 text-neutral-600">Soins traditionnels et rituels marocains.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div>
            <Image src="/images/8.png" alt="hammam" width={900} height={600} className="rounded" />
            <p className="mt-2 text-neutral-600">Hammam privé et massages relaxants.</p>
          </div>
        </ScrollReveal>
      </div>
      <div className="mt-4">
        <a href="/spa-hammam" className="inline-block px-4 py-2 rounded-full gold-btn text-black font-semibold">DÉCOUVRIR NOTRE SPA & HAMMAM →</a>
      </div>
    </div>
  );
}
