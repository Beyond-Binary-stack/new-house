import { Gem, Clock, Users, Star } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import { WHY_CHOOSE_US } from '../../data/whyChooseUs';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Gem, Clock, Users, Star,
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title="Why Choose Us"
          subtitle="What sets us apart from the rest"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = iconMap[item.icon] || Gem;
            return (
              <AnimatedSection key={item.title} delay={i * 150} className="group">
                <div className="p-6 md:p-8 bg-dark-800 border border-dark-600/30 text-center
                                transition-all duration-400 ease-out
                                hover:border-gold-500/30 hover:shadow-gold hover:-translate-y-1">
                  <div className="w-14 h-14 mx-auto mb-6 border border-gold-500/20 flex items-center justify-center
                                  transition-colors duration-300 group-hover:border-gold-500 group-hover:bg-gold-500/10">
                    <Icon size={28} className="text-gold-500" />
                  </div>
                  <h3 className="font-display text-lg text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
