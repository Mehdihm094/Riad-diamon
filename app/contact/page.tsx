import ContactForm from '../../components/contact/ContactForm';

const contactDetails = [
  { label: 'Adresse', value: '36 Derb Sidi Ahmed, Marrakech' },
  { label: 'Téléphone', value: '+212 5 24 00 00 00' },
  { label: 'Email', value: 'reservations@riad-diamond.com' },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(201,162,92,0.12),_transparent_32%),linear-gradient(135deg,_#060606_0%,_#0f0f0f_100%)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-black/20 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8 lg:p-12">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-[#c9a25c] to-transparent" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-[#c9a25c]">Get in Touch</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a25c]" />
          </div>
          <h1 className="font-serif text-4xl text-white sm:text-5xl">Contactez-nous</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
            Pour une réservation, une demande spéciale ou simplement pour découvrir notre riad, notre équipe vous répondra avec le plus grand soin.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="rounded-[28px] border border-white/10 bg-[#111111]/90 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="rounded-[24px] border border-[#c9a25c]/20 bg-[linear-gradient(145deg,rgba(201,162,92,0.12),rgba(255,255,255,0.03))] p-6">
              <h2 className="font-serif text-2xl text-white">Nous sommes à votre écoute</h2>
              <p className="mt-3 text-sm leading-7 text-stone-400">
                Un séjour au cœur de Marrakech mérite une expérience sur mesure, du premier contact à votre départ.
              </p>

              <div className="mt-6 space-y-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#c9a25c]">{item.label}</p>
                    <p className="mt-2 text-sm text-stone-200">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="h-36 rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(201,162,92,0.25),_transparent_70%)]" />
              </div>

              <div className="mt-6 flex gap-3">
                <a href="https://www.instagram.com" className="rounded-full border border-[#c9a25c]/30 px-4 py-2 text-sm text-stone-200 transition hover:border-[#c9a25c] hover:text-[#c9a25c]">Instagram</a>
                <a href="https://www.facebook.com" className="rounded-full border border-[#c9a25c]/30 px-4 py-2 text-sm text-stone-200 transition hover:border-[#c9a25c] hover:text-[#c9a25c]">Facebook</a>
              </div>
            </div>
          </div>

          <div className="lg:pl-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
