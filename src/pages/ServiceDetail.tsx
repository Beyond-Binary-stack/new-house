import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import AnimatedSection from '../components/ui/AnimatedSection';
import GoldButton from '../components/ui/GoldButton';
import ServiceDetailImages from '../components/services/ServiceDetailImages';
import { SERVICES } from '../data/services';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn-gold-outlined inline-flex">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} — New House Decoration</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <PageBanner
        title={service.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-gray-400 leading-relaxed text-lg">{service.description}</p>
          </AnimatedSection>

          {service.features && service.features.length > 0 && (
            <AnimatedSection delay={150} className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.features.map((feature) => (
                  <div key={feature.title} className="p-6 bg-dark-800 border border-dark-600/30">
                    <div className="w-10 h-10 border border-gold-500/20 flex items-center justify-center mb-4">
                      <Check size={20} className="text-gold-500" />
                    </div>
                    <h3 className="font-display text-lg text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection delay={300} className="mb-16">
            <ServiceDetailImages service={service} />
          </AnimatedSection>

          <AnimatedSection delay={400} className="text-center">
            <p className="text-gray-400 mb-6">Need this service? Let&apos;s discuss your project.</p>
            <GoldButton to="/contact" variant="filled" size="large">
              Contact Us Today
            </GoldButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
