import { useEffect, useRef, useState } from 'react';
import { Calendar, Building2, Users, Users2 } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { COMPANY } from '../../config/company';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Calendar, Building2, Users, Users2,
};

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {COMPANY.stats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Building2;
            return (
              <AnimatedSection key={stat.label} delay={i * 100} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-gold-500/20 flex items-center justify-center">
                  <Icon size={22} className="text-gold-500" />
                </div>
                <div className="font-display text-3xl md:text-4xl text-gold-500 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
