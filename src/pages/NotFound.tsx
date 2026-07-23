import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import GoldButton from '../components/ui/GoldButton';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | New House Decoration</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
            <div className="w-1.5 h-1.5 rotate-45 border border-gold-500/60 mx-4" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>

          <h1 className="font-display text-8xl md:text-9xl font-bold text-white mb-4">
            <span className="text-gradient-gold">404</span>
          </h1>

          <p className="font-display text-2xl md:text-3xl text-gray-300 mb-4">Page Not Found</p>

          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <GoldButton to="/" variant="outlined" size="large">
            Back to Home
          </GoldButton>
        </div>
      </div>
    </>
  );
}
