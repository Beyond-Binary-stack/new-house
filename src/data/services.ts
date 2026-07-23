import { PaintBucket, Hammer, LayoutGrid, Square, Wrench, Trees } from 'lucide-react';
import type { Service } from '../types/service';

export const SERVICES: Service[] = [
  {
    id: '1',
    slug: 'painting',
    title: 'Painting & Decoration',
    shortDescription: 'Professional painting and decorative finishes for interiors and exteriors.',
    description:
      'We provide high-quality painting and decoration services that transform your spaces. Our team uses premium paints and techniques to deliver flawless finishes that stand the test of time.',
    icon: 'PaintBucket',
    bannerImage: '/gallery/painting/painting-banner.jpg',
    images: ['/gallery/painting/img-01.jpg', '/gallery/painting/img-02.jpg'],
    features: [
      { title: 'Interior Painting', description: 'Walls, ceilings, and trim with premium finishes.' },
      { title: 'Exterior Painting', description: 'Weather-resistant coatings for lasting curb appeal.' },
      { title: 'Decorative Finishes', description: 'Texture, stucco, and artistic wall treatments.' },
    ],
  },
  {
    id: '2',
    slug: 'plastering',
    title: 'Plastering',
    shortDescription: 'Expert plastering for smooth, durable wall and ceiling surfaces.',
    description:
      'Our plastering services deliver smooth, durable surfaces for both residential and commercial properties. We combine traditional techniques with modern materials for superior results.',
    icon: 'Hammer',
    bannerImage: '/gallery/plastering/plastering-banner.jpg',
    images: ['/gallery/plastering/img-01.jpg', '/gallery/plastering/img-02.jpg'],
    features: [
      { title: 'Wall Plastering', description: 'Smooth and even wall surfaces ready for finishing.' },
      { title: 'Ceiling Plastering', description: 'Flawless ceiling finishes for any room.' },
      { title: 'Restoration', description: 'Repair and restoration of existing plaster work.' },
    ],
  },
  {
    id: '3',
    slug: 'gypsum',
    title: 'Gypsum Board & Cornices',
    shortDescription: 'Modern gypsum solutions including boards, cornices, and decorative elements.',
    description:
      'We specialize in gypsum board installations and decorative cornices that add elegance to any space. Our designs range from classic to contemporary.',
    icon: 'LayoutGrid',
    bannerImage: '/gallery/gypsum/gypsum-banner.jpg',
    images: ['/gallery/gypsum/img-01.jpg', '/gallery/gypsum/img-02.jpg'],
    features: [
      { title: 'Gypsum Boards', description: 'Partition walls, ceilings, and cladding systems.' },
      { title: 'Cornices', description: 'Decorative crown molding and ceiling trim.' },
      { title: 'False Ceilings', description: 'Suspended ceilings with integrated lighting.' },
    ],
  },
  {
    id: '4',
    slug: 'tiles-marble',
    title: 'Tiles & Marble',
    shortDescription: 'Premium tile and marble installation for floors, walls, and countertops.',
    description:
      'From ceramic tiles to natural marble, our installation services ensure perfect alignment, spacing, and finish for every project.',
    icon: 'Square',
    bannerImage: '/gallery/tiles-marble/tiles-banner.jpg',
    images: ['/gallery/tiles-marble/img-01.jpg', '/gallery/tiles-marble/img-02.jpg'],
    features: [
      { title: 'Floor Tiling', description: 'Ceramic, porcelain, and natural stone flooring.' },
      { title: 'Wall Tiling', description: 'Kitchen backsplashes, bathrooms, and feature walls.' },
      { title: 'Marble Work', description: 'Premium marble installation for floors and countertops.' },
    ],
  },
  {
    id: '5',
    slug: 'plumbing',
    title: 'Plumbing',
    shortDescription: 'Complete plumbing solutions for residential and commercial properties.',
    description:
      'Our plumbing services cover everything from installation to maintenance. We ensure reliable systems that meet all building codes.',
    icon: 'Wrench',
    bannerImage: '/gallery/plumbing/plumbing-banner.jpg',
    images: ['/gallery/plumbing/img-01.jpg', '/gallery/plumbing/img-02.jpg'],
    features: [
      { title: 'Installation', description: 'New plumbing systems for construction projects.' },
      { title: 'Maintenance', description: 'Regular maintenance and emergency repairs.' },
      { title: 'Fixtures', description: 'Premium fixture installation for kitchens and baths.' },
    ],
  },
  {
    id: '6',
    slug: 'metal-wood',
    title: 'Metal & Wood Works',
    shortDescription: 'Custom metal and wood fabrication for structural and decorative elements.',
    description:
      'We craft custom metal and wood elements that add character and functionality to your space. From staircases to cabinetry, we deliver precision craftsmanship.',
    icon: 'Trees',
    bannerImage: '/gallery/metal-wood/metal-wood-banner.jpg',
    images: ['/gallery/metal-wood/img-01.jpg', '/gallery/metal-wood/img-02.jpg'],
    features: [
      { title: 'Woodwork', description: 'Custom cabinetry, furniture, and paneling.' },
      { title: 'Metalwork', description: 'Railings, gates, and structural metal elements.' },
      { title: 'Combined Fabrication', description: 'Mixed material designs for unique pieces.' },
    ],
  },
];
