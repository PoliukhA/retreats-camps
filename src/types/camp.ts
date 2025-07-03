export type Camp = {
  id: string;
  title: string;
  sport: 'yoga' | 'stretching' | 'exotic-pole' | 'high-heels' | 'strip-dance' | 'pilates' | 'barre';
  country: string;
  city?: string;
  startDate: string; // ISO 
  endDate: string;   // ISO 
  priceFrom: number; // minimal price
  currency: 'EUR' | 'PLN' | 'UAH';
  gender: 'female' | 'male' | 'all';
  imageUrl: string | null;
  organizer: string;
  link: string;      // camp link
  description?: string;
};
