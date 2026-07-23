import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import PageBanner from '../components/ui/PageBanner';
import AnimatedSection from '../components/ui/AnimatedSection';
import GalleryFilter from '../components/gallery/GalleryFilter';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryStats from '../components/gallery/GalleryStats';
import { ALL_GALLERY, getGalleryByCategory } from '../data/gallery';
import { CATEGORIES } from '../types/gallery';
import type { GalleryCategory } from '../types/gallery';
import 'react-photo-view/dist/react-photo-view.css';

export default function Gallery() {
  const [category, setCategory] = useState<GalleryCategory | 'all'>('all');

  const filtered = getGalleryByCategory(category);

  const counts = {
    all: ALL_GALLERY.length,
    ...Object.fromEntries(
      CATEGORIES.map((cat) => [cat, getGalleryByCategory(cat).length]),
    ),
  } as Record<string, number>;

  const handleImageClick = useCallback((index: number) => {
    // react-photo-view handles this via PhotoView wrapping
  }, []);

  return (
    <>
      <Helmet>
        <title>Gallery — New House Decoration</title>
        <meta name="description" content="Browse our portfolio of completed interior finishing and decoration projects." />
      </Helmet>

      <PageBanner
        title="Our Gallery"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Gallery' },
        ]}
      />

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection>
            <GalleryStats total={ALL_GALLERY.length} current={filtered.length} />
            <GalleryFilter
              active={category}
              onSelect={setCategory}
              counts={counts}
            />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <PhotoProvider
              maskOpacity={0.9}
              bannerVisible={true}
              toolbarElements={[]}
            >
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {filtered.map((img, i) => (
                  <PhotoView key={img.id} src={img.src}>
                    <button
                      className="group relative w-full overflow-hidden bg-dark-800 border border-dark-600/30
                                 transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-gold-500"
                      style={{ aspectRatio: `${img.width}/${img.height}` }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-dark-900/0 transition-colors duration-500 group-hover:bg-dark-900/60" />
                      <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <span className="text-gold-500 text-xs uppercase tracking-widest">
                          {img.category}
                        </span>
                      </div>
                    </button>
                  </PhotoView>
                ))}
              </div>
            </PhotoProvider>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-sm uppercase tracking-widest">
                  No images in this category yet
                </p>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
