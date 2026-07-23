import { Link } from 'react-router-dom';
import { PaintBucket } from 'lucide-react';
import type { Service } from '../../types/service';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PaintBucket,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || PaintBucket;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group block p-6 md:p-8 bg-dark-800 border border-dark-600/30
                 transition-all duration-400 ease-out
                 hover:border-gold-500/30 hover:shadow-gold hover:-translate-y-1"
    >
      <div className="w-12 h-12 border border-gold-500/20 flex items-center justify-center mb-6
                      transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500/10">
        <Icon size={24} className="text-gold-500" />
      </div>
      <h3 className="font-display text-xl text-white mb-3 group-hover:text-gold-500 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {service.shortDescription}
      </p>
      <span className="text-gold-500 text-xs uppercase tracking-widest group-hover:text-gold-400 transition-colors">
        Learn More →
      </span>
    </Link>
  );
}
