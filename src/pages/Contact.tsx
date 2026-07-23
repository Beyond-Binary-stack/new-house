import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';
import AnimatedSection from '../components/ui/AnimatedSection';
import SectionHeader from '../components/ui/SectionHeader';
import ContactInfoCard, { contactIcons } from '../components/contact/ContactInfoCard';
import ContactForm from '../components/contact/ContactForm';
import SocialIcons from '../components/ui/SocialIcons';
import { CONTACT } from '../config/contact';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us — New House Decoration</title>
        <meta name="description" content="Get in touch with New House Decoration. Call, WhatsApp, email, or visit us." />
      </Helmet>

      <PageBanner
        title="Contact Us"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ContactInfoCard
              icon={contactIcons.phone}
              label="Phone"
              value={CONTACT.phone}
              href={`tel:${CONTACT.phone}`}
            />
            <ContactInfoCard
              icon={contactIcons.whatsapp}
              label="WhatsApp"
              value={CONTACT.phone}
              href={`https://wa.me/${CONTACT.whatsapp}`}
            />
            <ContactInfoCard
              icon={contactIcons.email}
              label="Email"
              value={CONTACT.email}
              href={`mailto:${CONTACT.email}`}
            />
            <ContactInfoCard
              icon={contactIcons.address}
              label="Address"
              value={CONTACT.address}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <SectionHeader title="Send Us a Message" className="text-left items-start !mb-8" />
              <ContactForm />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="aspect-[16/9] bg-dark-800 border border-dark-600/30 overflow-hidden">
                <iframe
                  src={CONTACT.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.5)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company Location"
                />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300} className="text-center mt-16 pt-12 border-t border-dark-600/30">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">Follow Us</p>
            <SocialIcons className="justify-center" />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
