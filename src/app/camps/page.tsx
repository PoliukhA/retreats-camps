import CampCard from '@/components/CampCard';
import rawCamps from '@/data/camps.json';
import type { Camp } from '@/types/camp';

const camps = rawCamps as Camp[]; 

export default function CampsPage() {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {camps.map((camp) => (
        <CampCard key={camp.id} camp={camp} />
      ))}
    </main>
  );
}
