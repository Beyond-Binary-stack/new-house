import { motion } from 'framer-motion';
import GoldButton from '../ui/GoldButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-dark-900" />
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #C8A15A 0%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 12s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(circle, #C8A15A 0%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 15s ease-in-out infinite reverse',
          }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #E5C982 0%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'gradientShift 10s ease-in-out infinite',
            transform: 'translateX(-50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,161,90,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,161,90,0.3) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, #111111 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img src="/logo.png" alt="New House Decoration" className="h-24 md:h-36 w-auto mx-auto mb-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-sm md:text-base tracking-[0.4em] md:tracking-[0.5em] uppercase text-gold-500 font-light mb-4"
        >
          New House Decoration
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-gray-500 font-light mb-12"
        >
          Where Quality Meets Design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold-500/60" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-tight"
        >
          Coming{' '}
          <span className="text-gradient-gold">Soon</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: 'easeOut' }}
          className="max-w-lg mx-auto text-center text-gray-400 text-sm md:text-base leading-relaxed font-light mb-12 px-4"
        >
          We&apos;re building a premium digital experience to showcase our interior
          finishing, decoration, and construction services.
          <br />
          <span className="text-gold-600/80 mt-2 inline-block">Stay tuned.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
        >
          <GoldButton to="/gallery" variant="outlined" size="large">
            Explore Our Work
          </GoldButton>
        </motion.div>
      </div>
    </section>
  );
}
