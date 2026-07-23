import { Eye, Target } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { COMPANY } from '../../config/company';

export default function VisionMission() {
  return (
    <section className="py-16 md:py-24 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection delay={0}>
            <div className="p-8 md:p-10 bg-dark-800 border border-dark-600/30 h-full
                            transition-all duration-400 hover:border-gold-500/30 hover:shadow-gold">
              <div className="w-14 h-14 border border-gold-500/20 flex items-center justify-center mb-6">
                <Eye size={28} className="text-gold-500" />
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">{COMPANY.vision}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="p-8 md:p-10 bg-dark-800 border border-dark-600/30 h-full
                            transition-all duration-400 hover:border-gold-500/30 hover:shadow-gold">
              <div className="w-14 h-14 border border-gold-500/20 flex items-center justify-center mb-6">
                <Target size={28} className="text-gold-500" />
              </div>
              <h3 className="font-display text-2xl text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">{COMPANY.mission}</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
