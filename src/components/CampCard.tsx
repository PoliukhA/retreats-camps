'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Camp } from '@/types/camp';
import { fetchUnsplashImage } from '@/utils/fetchUnsplashImage';

type Props = {
  camp: Camp;
};

export default function CampCard({ camp }: Props) {
  const [imageUrl, setImageUrl] = useState(camp.imageUrl);

  useEffect(() => {
    const loadImage = async () => {
      if (!camp.imageUrl) {
        const unsplashImage = await fetchUnsplashImage(camp.sport);
        if (unsplashImage) {
          setImageUrl(unsplashImage);
        }
      }
    };
    loadImage();
  }, [camp.imageUrl, camp.sport]);

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <Image
        src={imageUrl}
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
  );
}
