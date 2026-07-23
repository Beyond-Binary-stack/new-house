import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col items-center text-center mb-12 md:mb-16', className)}>
      <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4">{title}</h2>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
        <div className="w-1.5 h-1.5 rotate-45 border border-gold-500/60" />
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
      </div>
      {subtitle && (
        <p className="max-w-lg text-gray-400 text-sm md:text-base font-light">{subtitle}</p>
      )}
    </div>
  );
}
