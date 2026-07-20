import Image from 'next/image';

type Props = { params: { slug: string } };

export default function RoomDetail({ params }: Props){
  const { slug } = params;
  return (
    <div className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-serif mb-4">{slug.replace('-', ' ')}</h1>
        <Image src="https://images.unsplash.com/photo-1505691723518-36a5b57a5b6a" alt={slug} width={1200} height={800} className="rounded" />
        <p className="mt-4 text-neutral-700">Description détaillée de la chambre.</p>
      </div>
    </div>
  );
}
