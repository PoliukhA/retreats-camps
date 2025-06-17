import { Camp } from '@/types/camp';
import rawCamps from '@/data/camps.json';
import Image from 'next/image';

const camps = rawCamps as Camp[];

export default function CampsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Кемпы и ретриты</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {camps.map((camp: Camp) => (
          <div key={camp.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <Image
              src={camp.imageUrl}
              alt={camp.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{camp.title}</h2>
            <p className="text-sm text-gray-500">
              {camp.country} {camp.city ? `· ${camp.city}` : ''} · {camp.sport}
            </p>
            <p className="mt-1 font-medium">
              от {camp.priceFrom} {camp.currency}
            </p>
            <a
              href={camp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-500 hover:underline"
            >
              Подробнее →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
