import { Image } from 'lucide-react';

interface GalleryStatsProps {
  total: number;
  current: number;
}

export default function GalleryStats({ total, current }: GalleryStatsProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8 text-xs uppercase tracking-widest text-gray-500">
      <Image size={14} className="text-gold-500" />
      <span>
        Showing <span className="text-gold-500">{current}</span> of <span className="text-gold-500">{total}</span> projects
      </span>
    </div>
  );
}
