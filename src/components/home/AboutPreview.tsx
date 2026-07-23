import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';

export default function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">About Us</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-6">
              Crafting Spaces,{' '}
              <span className="text-gradient-gold">Creating Dreams</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              New House Decoration has been transforming spaces into works of art. 
              With years of experience in interior finishing, we bring precision, 
              elegance, and craftsmanship to every project we undertake. Our team of 
              skilled professionals is dedicated to delivering excellence in every detail.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold-500 text-sm uppercase tracking-widest
                         hover:text-gold-400 transition-colors duration-300 group"
            >
              Learn More
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden bg-dark-800">
              <img
                src="/gallery/gypsum/10.jpeg"
                alt="About New House Decoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/10 -z-10" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
