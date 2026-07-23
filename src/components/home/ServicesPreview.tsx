import { Link } from 'react-router-dom';
import { PaintBucket, Hammer, LayoutGrid } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import { SERVICES } from '../../data/services';

const fallbackIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  PaintBucket,
  Hammer,
  LayoutGrid,
};

export default function ServicesPreview() {
  const featured = SERVICES.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive interior finishing solutions tailored to your needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((service, i) => (
            <AnimatedSection key={service.id} delay={i * 150} className="group">
              <Link
                to={`/services/${service.slug}`}
                className="block p-6 md:p-8 bg-dark-800 border border-dark-600/30
                         transition-all duration-400 ease-out
                         hover:border-gold-500/30 hover:shadow-gold hover:-translate-y-1"
              >
                <div className="w-12 h-12 border border-gold-500/20 flex items-center justify-center mb-6
                                transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500/10">
                  <PaintBucket size={24} className="text-gold-500" />
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
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300} className="text-center mt-10">
          <Link
            to="/services"
            className="btn-gold-outlined inline-flex"
          >
            View All Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
