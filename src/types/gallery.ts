export type GalleryCategory =
  | 'painting'
  | 'plastering'
  | 'gypsum'
  | 'tiles-marble'
  | 'plumbing'
  | 'metal-wood';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  painting: 'Painting',
  plastering: 'Plastering',
  gypsum: 'Gypsum',
  'tiles-marble': 'Tiles & Marble',
  plumbing: 'Plumbing',
  'metal-wood': 'Metal & Wood',
};

export const CATEGORIES: GalleryCategory[] = [
  'painting',
  'plastering',
  'gypsum',
  'tiles-marble',
  'plumbing',
  'metal-wood',
];
