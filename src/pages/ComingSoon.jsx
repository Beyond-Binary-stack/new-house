import AnimatedBackground from '../components/AnimatedBackground';
import Logo from '../components/Logo';
import GoldDivider from '../components/GoldDivider';
import SocialIcons from '../components/SocialIcons';
import Footer from '../components/Footer';
import FadeIn from '../components/FadeIn';

const ComingSoon = () => {
  return (
    <>
      <AnimatedBackground />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16">
        {/* Logo */}
        <FadeIn direction="down" delay={0}>
          <Logo className="mb-8" />
        </FadeIn>

        {/* Company Name */}
        <FadeIn delay={200}>
          <h1 className="text-sm md:text-base tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold-500 font-light mb-4">
            New House Decoration
          </h1>
        </FadeIn>

        {/* Tagline */}
        <FadeIn delay={400}>
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500 font-light mb-12">
            Where Quality Meets Design
          </p>
        </FadeIn>

        {/* Gold Divider */}
        <FadeIn delay={500}>
          <GoldDivider className="mb-12" />
        </FadeIn>

        {/* Main Heading */}
        <FadeIn delay={600}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 text-center leading-tight">
            Coming{' '}
            <span className="text-gradient-gold">Soon</span>
          </h2>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={800}>
          <p className="max-w-lg text-center text-gray-400 text-sm md:text-base leading-relaxed font-light mb-12 px-4">
            We&apos;re building a premium digital experience to showcase our interior
            finishing, decoration, and construction services.
            <br />
            <span className="text-gold-600/80 mt-2 inline-block">Stay tuned.</span>
          </p>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={1000}>
          <button
            type="button"
            className="btn-gold mb-16"
          >
            Contact Us
          </button>
        </FadeIn>

        {/* Social Icons */}
        <FadeIn delay={1000}>
          <SocialIcons />
        </FadeIn>
      </main>

      <Footer />
    </>
  );
};

export default ComingSoon;
