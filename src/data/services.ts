import type { Service } from '../types/service';

export const SERVICES: Service[] = [
  {
    id: '1',
    slug: 'painting',
    title: 'Painting & Decoration',
    shortDescription: 'Professional painting and decorative finishes that transform your space with elegance.',
    description:
      'We deliver premium painting and decoration services using high-quality materials and expert techniques. From residential interiors to commercial spaces, our team ensures flawless finishes with attention to every detail. We specialize in color consultation, texture finishes, and protective coatings that stand the test of time.',
    icon: 'PaintBucket',
    bannerImage: '/gallery/painting/1.jpg',
    images: ['/gallery/painting/2.jpg', '/gallery/painting/3.jpg', '/gallery/painting/6.jpg'],
    features: [
      { title: 'Interior Painting', description: 'Walls, ceilings, and trim with premium finishes in any color of your choice.' },
      { title: 'Exterior Painting', description: 'Weather-resistant coatings that protect and beautify your property\'s exterior.' },
      { title: 'Decorative Finishes', description: 'Texture walls, stucco effects, gold leaf, and custom artistic wall treatments.' },
    ],
  },
  {
    id: '2',
    slug: 'plastering',
    title: 'Plastering',
    shortDescription: 'Expert plastering for smooth, durable walls and ceilings with a perfect finish.',
    description:
      'Our plastering team brings decades of experience to every project, delivering smooth, durable surfaces ready for any finish. We use traditional techniques combined with modern materials to achieve superior results. Whether it\'s new construction or restoration of historic properties, we handle it all with precision.',
    icon: 'Hammer',
    bannerImage: '/gallery/plastering/4.jpg',
    images: ['/gallery/plastering/2.jpg', '/gallery/plastering/3.jpg', '/gallery/plastering/5.png'],
    features: [
      { title: 'Wall Plastering', description: 'Smooth and even wall surfaces prepared perfectly for painting or wallpaper.' },
      { title: 'Ceiling Plastering', description: 'Flawless ceiling finishes for any room, from standard to decorative.' },
      { title: 'Restoration', description: 'Expert repair and restoration of existing plaster work including heritage properties.' },
    ],
  },
  {
    id: '3',
    slug: 'gypsum',
    title: 'Gypsum Board & Cornices',
    shortDescription: 'Modern gypsum solutions including boards, cornices, and decorative ceiling elements.',
    description:
      'We specialize in gypsum board installations and decorative cornices that add elegance and character to any space. Our designs range from classic to contemporary, with integrated lighting solutions. Gypsum offers versatility, durability, and excellent thermal and acoustic insulation properties.',
    icon: 'LayoutGrid',
    bannerImage: '/gallery/gypsum/10.jpeg',
    images: ['/gallery/gypsum/1.jpg', '/gallery/gypsum/2.jpg', '/gallery/gypsum/3.jpg'],
    features: [
      { title: 'Gypsum Boards', description: 'Partition walls, ceiling cladding, and curved designs for modern interiors.' },
      { title: 'Cornices & Molding', description: 'Decorative crown molding, ceiling roses, and architectural trim elements.' },
      { title: 'False Ceilings', description: 'Suspended ceilings with integrated LED lighting and acoustic panels.' },
    ],
  },
  {
    id: '4',
    slug: 'tiles-marble',
    title: 'Tiles & Marble',
    shortDescription: 'Premium tile and marble installation for floors, walls, and countertops with precision.',
    description:
      'From ceramic and porcelain tiles to natural marble and granite, our installation services ensure perfect alignment and lasting beauty. We work with all tile types and patterns, including herringbone, hexagonal, and custom mosaics. Our team takes pride in precision cutting and flawless finishing.',
    icon: 'Square',
    bannerImage: '/gallery/tiles-marble/1.jpg',
    images: ['/gallery/tiles-marble/2.jpg', '/gallery/tiles-marble/3.jpg', '/gallery/tiles-marble/5.jpg'],
    features: [
      { title: 'Floor Tiling', description: 'Ceramic, porcelain, natural stone, and luxury vinyl tile flooring.' },
      { title: 'Wall Tiling', description: 'Kitchen backsplashes, bathroom walls, and feature wall installations.' },
      { title: 'Marble & Granite', description: 'Premium natural stone installation for floors, countertops, and vanities.' },
    ],
  },
  {
    id: '5',
    slug: 'plumbing',
    title: 'Plumbing',
    shortDescription: 'Complete plumbing solutions from installation to maintenance for any property.',
    description:
      'Our comprehensive plumbing services cover everything from full system installation to regular maintenance and emergency repairs. We work with modern piping systems and fixtures, ensuring code compliance and long-term reliability. Our team handles both residential and commercial projects of any scale.',
    icon: 'Wrench',
    bannerImage: '/gallery/plumbing/2.jpg',
    images: ['/gallery/plumbing/1.jpg', '/gallery/plumbing/3.jpg', '/gallery/plumbing/7.jpg'],
    features: [
      { title: 'Installation', description: 'Complete plumbing systems for new construction and renovation projects.' },
      { title: 'Maintenance & Repair', description: 'Regular maintenance, leak repairs, and emergency plumbing services.' },
      { title: 'Fixture Installation', description: 'Premium faucets, sinks, toilets, showers, and water heater installation.' },
    ],
  },
  {
    id: '6',
    slug: 'metal-wood',
    title: 'Metal & Wood Works',
    shortDescription: 'Custom metal and wood fabrication for stunning structural and decorative elements.',
    description:
      'We craft custom metal and wood elements that add character and functionality to your space. From elegant staircases and railings to custom cabinetry and furniture, our skilled artisans deliver precision craftsmanship. We combine traditional woodworking with modern metal fabrication for unique, lasting results.',
    icon: 'Trees',
    bannerImage: '/gallery/metal-wood/3.jpg',
    images: ['/gallery/metal-wood/1.jpg', '/gallery/metal-wood/7.jpg', '/gallery/metal-wood/14.jpg'],
    features: [
      { title: 'Custom Woodwork', description: 'Built-in cabinets, wardrobes, paneling, stairs, and custom furniture pieces.' },
      { title: 'Metal Fabrication', description: 'Railings, gates, window grilles, staircases, and structural metal elements.' },
      { title: 'Combined Designs', description: 'Mixed-material creations blending wood and metal for unique architectural features.' },
    ],
  },
];
