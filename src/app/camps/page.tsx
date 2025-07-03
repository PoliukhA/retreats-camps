'use client';

import { useState, useEffect } from 'react';
import CampCard from '@/components/CampCard';
import type { Camp } from '@/types/camp';
import rawCamps from '@/data/camps.json';
import { fetchUnsplashImage } from '@/utils/fetchUnsplashImage';

export default function CampsPage() {
  const [camps, setCamps] = useState<Camp[]>([]);

  useEffect(() => {
    const fetchCamps = async () => {
      const data = await Promise.all(
        (rawCamps as Camp[]).map(async (camp) => {
          if (!camp.imageUrl) {
            const img = await fetchUnsplashImage(camp.sport);
            return { ...camp, imageUrl: img ?? '/fallback.jpg' };
          }
          return camp;
        })
      );
      setCamps(data);
    };

    fetchCamps();
  }, []);

  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="font-primary text-[clamp(1rem,2.5vw,2rem)] font-bold my-6 text-center">Camps & Retreats</h1>
      <section className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {camps.map((camp) => (
        <CampCard key={camp.id} camp={camp} />
      ))}
      </section>
    </main>
  );
}
