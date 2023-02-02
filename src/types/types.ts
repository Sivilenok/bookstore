export type ListStyle = 'window' | 'list';

interface IBook {
  id: string;
  image?: string;
  category: string;
  author: string;
  title?: string;
  rating: number;
  year: number;
  isBooked: boolean;
  bookedTill: string;
}

export type { IBook };


