import AnimatedSection from '../ui/AnimatedSection';
import { COMPANY } from '../../config/company';

export default function CompanyStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] bg-dark-800 border border-dark-600/30 flex items-center justify-center">
              <span className="text-gray-600 text-sm">Company Image</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/10 -z-10" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">Our Story</p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-6">
              Our <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">{COMPANY.story}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
