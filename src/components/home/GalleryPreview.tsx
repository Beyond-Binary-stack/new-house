import { Link } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import SectionHeader from '../ui/SectionHeader';
import { ALL_GALLERY } from '../../data/gallery';

export default function GalleryPreview() {
  const previewImages = ALL_GALLERY.slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          title="Our Work"
          subtitle="A glimpse of our completed projects"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {previewImages.map((img, i) => (
            <AnimatedSection key={img.id} delay={i * 100}>
              <div className="group relative aspect-square overflow-hidden bg-dark-800">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-dark-900/0 transition-colors duration-500 group-hover:bg-dark-900/60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-gold-500 text-xs uppercase tracking-widest">{img.category}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300} className="text-center mt-10">
          <Link to="/gallery" className="btn-gold-outlined inline-flex">
            View Full Gallery
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
