import type { GalleryImage, GalleryCategory } from '../../types/gallery';
import { GALLERY_PAINTING } from './painting';
import { GALLERY_PLASTERING } from './plastering';
import { GALLERY_GYPSUM } from './gypsum';
import { GALLERY_TILES_MARBLE } from './tiles-marble';
import { GALLERY_PLUMBING } from './plumbing';
import { GALLERY_METAL_WOOD } from './metal-wood';

export const ALL_GALLERY: GalleryImage[] = [
  ...GALLERY_PAINTING,
  ...GALLERY_PLASTERING,
  ...GALLERY_GYPSUM,
  ...GALLERY_TILES_MARBLE,
  ...GALLERY_PLUMBING,
  ...GALLERY_METAL_WOOD,
];

export function getGalleryByCategory(category: GalleryCategory | 'all'): GalleryImage[] {
  if (category === 'all') return ALL_GALLERY;
  return ALL_GALLERY.filter((img) => img.category === category);
}
