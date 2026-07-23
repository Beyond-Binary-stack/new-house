import { Shield, Award, Lightbulb, Heart, Briefcase } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import { VALUES } from '../../data/values';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Shield, Award, Lightbulb, Heart, Briefcase,
};

export default function CompanyValues() {
  return (
    <section className="py-16 md:py-24 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title="Our Values"
          subtitle="The principles that guide everything we do"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {VALUES.map((value, i) => {
            const Icon = iconMap[value.icon] || Shield;
            return (
              <AnimatedSection key={value.title} delay={i * 100} className="group">
                <div className="p-6 bg-dark-800 border border-dark-600/30 text-center h-full
                                transition-all duration-400 ease-out
                                hover:border-gold-500/30 hover:shadow-gold hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto mb-4 border border-gold-500/20 flex items-center justify-center
                                  transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500/10">
                    <Icon size={22} className="text-gold-500" />
                  </div>
                  <h3 className="font-display text-base text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
