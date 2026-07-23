import type { Service } from '../../types/service';

interface ServiceDetailImagesProps {
  service: Service;
}

export default function ServiceDetailImages({ service }: ServiceDetailImagesProps) {
  if (!service.images || service.images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {service.images.map((src, i) => (
        <div key={i} className="aspect-[4/3] bg-dark-800 border border-dark-600/30 overflow-hidden group">
          <img
            src={src}
            alt={`${service.title} - Image ${i + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
