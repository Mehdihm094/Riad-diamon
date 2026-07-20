import Hero from '../components/home/Hero';
import Welcome from '../components/home/Welcome';
import RoomsGrid from '../components/home/RoomsGrid';
import SpaSection from '../components/home/SpaSection';
import ActivitiesSection from '../components/home/ActivitiesSection';
import ComfortSection from '../components/home/ComfortSection';
import HashScroll from '../components/common/HashScroll';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HashScroll />
      <Hero />
      <section className="py-16">
        <Welcome />
      </section>
      <section className="py-16 bg-neutral-900 text-white">
        <RoomsGrid />
      </section>
      <section className="py-16">
        <SpaSection />
      </section>
      <section className="py-16 bg-neutral-900 text-white">
        <ActivitiesSection />
      </section>
      <section className="py-16">
        <ComfortSection />
      </section>
    </div>
  );
}
