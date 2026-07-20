import Image from "next/image";

export default function About() {
  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-serif">Le Riad</h1>
        <p className="mt-4 text-neutral-700">
          Présentation du riad, histoire et philosophie.
        </p>
      </div>

      {/* Galerie photo */}
      <div className="max-w-5xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:h-[480px]">
          {/* Grande photo à gauche */}
          <div className="relative overflow-hidden rounded-md bg-neutral-100 h-[280px] md:h-full group">
            <Image
              src="/images/riad/12.PNG"
              alt="Cour intérieure du Riad Diamond, Marrakech"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white text-sm">
              La cour intérieure
            </div>
          </div>

          {/* Deux photos empilées à droite */}
          <div className="grid grid-rows-2 gap-5 h-full">
            <div className="relative overflow-hidden rounded-md bg-neutral-100 h-[280px] md:h-full group">
              <Image
                src="/images/riad/10.JPG"
                alt="Patio et fontaine du riad"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white text-sm">
                Le patio
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md bg-neutral-100 h-[280px] md:h-full group">
              <Image
                src="/images/riad/11.PNG"
                alt="Terrasse sur le toit du riad"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent text-white text-sm">
                La terrasse
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}