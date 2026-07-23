import type { GalleryCategory } from '../../types/gallery';
import { CATEGORIES, CATEGORY_LABELS } from '../../types/gallery';
import { cn } from '../../utils/cn';

interface GalleryFilterProps {
  active: GalleryCategory | 'all';
  onSelect: (category: GalleryCategory | 'all') => void;
  counts: Record<string, number>;
}

export default function GalleryFilter({ active, onSelect, counts }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
      <button
        onClick={() => onSelect('all')}
        className={cn(
          'px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300',
          active === 'all'
            ? 'bg-gold-500 text-dark-900 border-gold-500'
            : 'border-dark-600/50 text-gray-400 hover:border-gold-500/50 hover:text-gold-500',
        )}
      >
        All ({counts.all})
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            'px-5 py-2 text-xs uppercase tracking-widest border transition-all duration-300',
            active === cat
              ? 'bg-gold-500 text-dark-900 border-gold-500'
              : 'border-dark-600/50 text-gray-400 hover:border-gold-500/50 hover:text-gold-500',
          )}
        >
          {CATEGORY_LABELS[cat]} ({counts[cat]})
        </button>
      ))}
    </div>
  );
}
