'use client';

import Image from 'next/image';
import { Camp } from '@/types/camp';

type Props = {
  camp: Camp;
};

export default function CampCard({ camp }: Props) {

  return (
    <div className="font-secondary border border-light-lavender rounded-xl shadow hover:shadow-lg transition">
      <div className='relative'>
        <p className="absolute top-3 right-3 text-xs border-0 rounded-2xl bg-white p-1">
          <b>From {camp.priceFrom} {camp.currency}</b>
        </p>

      <Image
        src={camp.imageUrl || '/fallback.jpg'}
        alt={camp.title}
        width={400}
        height={250}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      </div>
      <div className='m-3'>
        <h2 className="text-lg xs:text-base uppercase mt-2 mb-3">{camp.title}</h2>
        <p className="text-sm text-gray-500">
          <b>· Location:</b> {camp.country} {camp.city ? `| ${camp.city}` : ''}<br/>
          <b>· Course:</b> {camp.sport}
        </p>
        <a
          href={camp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 hover:underline"
        >
          More about →
        </a>
      </div>
    </div>
  );
}
