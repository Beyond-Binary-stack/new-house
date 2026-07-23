import type { GalleryImage } from '../../types/gallery';
import { CATEGORY_LABELS } from '../../types/gallery';

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
}

export default function GalleryCard({ image, onClick }: GalleryCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden bg-dark-800 border border-dark-600/30
                 transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-gold-500"
      style={{ aspectRatio: `${image.width}/${image.height}` }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-dark-900/0 transition-colors duration-500 group-hover:bg-dark-900/60" />
      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <span className="text-gold-500 text-xs uppercase tracking-widest">
          {CATEGORY_LABELS[image.category]}
        </span>
      </div>
    </button>
  );
}
