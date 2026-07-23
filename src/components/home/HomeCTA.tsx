import AnimatedSection from '../ui/AnimatedSection';
import GoldButton from '../ui/GoldButton';

export default function HomeCTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #C8A15A 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <AnimatedSection>
          <p className="text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="max-w-lg mx-auto text-gray-400 text-sm md:text-base leading-relaxed mb-10">
            Let&apos;s discuss your project. Contact us today for a consultation.
          </p>
          <GoldButton to="/contact" variant="filled" size="large">
            Contact Us
          </GoldButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
