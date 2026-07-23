import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface PageBannerProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
  className?: string;
}

export default function PageBanner({ title, breadcrumbs, className }: PageBannerProps) {
  return (
    <section
      className={cn(
        'relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden',
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent" />
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #C8A15A 0%, transparent 70%)' }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-4">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight size={12} />}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-gold-500 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold-500">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-semibold text-white">{title}</h1>
      </div>
    </section>
  );
}
