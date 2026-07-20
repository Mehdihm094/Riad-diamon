import Image from "next/image";
import { Diamond } from "lucide-react";

/**
 * Page "Activities & Excursions"
 *
 * Placez vos photos dans /public/images/activities/ avec ces noms
 * (ou changez les chemins ci-dessous) :
 *
 *   hero-camels.jpg        -> image de fond du hero (chameaux, désert)
 *   private-tours.jpg      -> cascades d'Ouzoud
 *   traditional-evening.jpg-> soirée traditionnelle / marché de nuit
 *   hot-air-balloon.jpg    -> montgolfière au lever du soleil
 *   camel-ride.jpg         -> balade à dos de chameau
 *   quad-buggy.jpg         -> quad / buggy dans le désert
 */

type Activity = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean; // true = image à droite, texte à gauche
};

const activities: Activity[] = [
  {
    title: "Private tours and tailor-made excursions",
    description:
      "For those seeking exclusivity, we offer private tours tailored to your preferences. Whether you want to explore the Ouzoud Waterfalls, the dunes of Merzouga, or the Berber villages of the Atlas, we organize personalized excursions to suit your needs. Enjoy luxury service with a local guide and a comfortable vehicle to discover Morocco's treasures in complete comfort.",
    image: "/images/activities/private-tours.png",
    imageAlt: "Cascades d'Ouzoud, excursion privée",
  },
  {
    title: "Traditional evenings and dinner shows",
    description:
      "Immerse yourself in the enchantment of Moroccan traditional evenings at Riad Diamond of Marrakech. Enjoy delicious meals in a beautiful setting, accompanied by performances of belly dancing, traditional music, or dinner shows at iconic venues in the city. Dive into the mesmerizing atmosphere of local culture, a sensory experience that will captivate you.",
    image: "/images/activities/traditional-evening.jpg",
    imageAlt: "Soirée traditionnelle marocaine",
    reverse: true,
  },
  {
    title: "Hot air balloon ride at sunrise",
    description:
      "Take to the skies with a hot air balloon ride over the stunning landscapes surrounding Marrakech. Soar above the red city, the Atlas Mountains, and the vast desert plains, all bathed in the magical light of sunrise. This unforgettable experience combines a sense of freedom with the beauty of the natural world.",
    image: "/images/activities/hot-air-balloon.png",
    imageAlt: "Montgolfière au lever du soleil",
  },
  {
    title: "Camel ride through the desert",
    description:
      "Experience authentic Morocco with a camel ride through the stunning desert landscapes or the oases of Marrakech. Led by local guides, this excursion lets you immerse yourself in Berber traditions while discovering the natural wonders of the region, all while enjoying peaceful moments and awe-inspiring views.",
    image: "/images/activities/camel-ride.jpg",
    imageAlt: "Balade à dos de chameau dans le désert",
    reverse: true,
  },
  {
    title: "Quad and buggy adventures in the desert",
    description:
      "Embark on an adventure aboard a powerful quad or buggy through the vast expanses of the Agafay Desert or the Atlas Mountains. These excursions will treat you to breathtaking landscapes, from dunes to arid lands, allowing you to experience the ultimate feeling of freedom. Perfect for thrill-seekers and nature lovers alike.",
    image: "/images/activities/quad-buggy.jpg",
    imageAlt: "Quad et buggy dans le désert d'Agafay",
  },
];

function SectionIcon() {
  return (
    <div className="flex flex-col items-center mb-4">
      <Diamond className="w-6 h-6 text-[#C89B3C]" strokeWidth={1.5} />
      <span className="mt-2 text-xs tracking-[0.2em] text-neutral-500 font-sans">
        DISCOVER
      </span>
    </div>
  );
}

export default function ActivitiesSection() {
  return (
    <section id="activities">
      {/* ------------------------------------------------------------------ */}
      {/* HERO */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative h-[420px] flex items-end">
        <Image
          src="/images/activities/hero-camels.png"
          alt="Chameaux dans le désert près de Marrakech"
          fill
          priority
          className="object-cover"
        />
        {/* subtle gradient overlay that darkens the bottom only */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        <div className="relative z-10 w-full bg-gradient-to-r from-[#8a6a1f]/90 to-[#8a6a1f]/90 py-10">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h1 className="font-serif text-3xl md:text-4xl text-[#F3D98B]">
              Activities &amp; Excursions
            </h1>
            <p className="mt-3 italic text-white/90">
              Discover unforgettable excursions at Riad Diamond of Marrakech
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* INTRO */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative py-20 px-6">
        
        <div className="absolute inset-0 bg-[#8a6a1f]/85" />

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <Diamond className="w-6 h-6 mx-auto mb-6 text-[#F3D98B]" strokeWidth={1.5} />
          <p className="text-lg leading-relaxed">
            At Riad Diamond of Marrakech, each excursion is a unique adventure
            designed to create unforgettable memories. Our activities are led
            by passionate local professionals, dedicated to offering you an
            authentic, safe, and discovery-filled experience.
          </p>
          <p className="mt-6 font-serif italic text-xl text-[#F3D98B]">
            Come and explore Marrakech like never before with our exceptional
            excursions!
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* BLOCS D'ACTIVITÉS (image + texte alternés) */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {activities.map((activity, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                activity.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-10 md:gap-16`}
            >
              {/* Photo */}
              <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] rounded-md overflow-hidden bg-neutral-100">
                <Image
                  src={activity.image}
                  alt={activity.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Texte */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="md:hidden">
                  <SectionIcon />
                </div>
                <div className="hidden md:flex flex-col items-start mb-4">
                  <Diamond className="w-6 h-6 text-[#C89B3C]" strokeWidth={1.5} />
                  <span className="mt-2 text-xs tracking-[0.2em] text-neutral-500 font-sans">
                    DISCOVER
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#C89B3C] leading-tight">
                  {activity.title}
                </h2>
                <p className="mt-5 text-neutral-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}