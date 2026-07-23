import type { GalleryImage } from '../../types/gallery';
import GalleryCard from './GalleryCard';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

export default function GalleryGrid({ images, onImageClick }: GalleryGridProps) {
  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-sm uppercase tracking-widest">No images in this category yet</p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
      {images.map((img, i) => (
        <GalleryCard
          key={img.id}
          image={img}
          onClick={() => onImageClick(i)}
        />
      ))}
    </div>
  );
}
