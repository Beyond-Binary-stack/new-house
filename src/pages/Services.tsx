import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';
import SectionHeader from '../components/ui/SectionHeader';
import AnimatedSection from '../components/ui/AnimatedSection';
import ServiceCard from '../components/services/ServiceCard';
import { SERVICES } from '../data/services';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services — New House Decoration</title>
        <meta name="description" content="Explore our comprehensive interior finishing services including painting, plastering, gypsum, tiles, plumbing, and metal & wood works." />
      </Helmet>
      <PageBanner
        title="Our Services"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
      />
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeader
            title="What We Offer"
            subtitle="Comprehensive interior finishing solutions for every space"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <AnimatedSection key={service.id} delay={i * 100}>
                <ServiceCard service={service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
