import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../config/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-dark-600/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="NHD" className="h-8 md:h-10 w-auto" />
            <span className="hidden sm:block text-sm tracking-[0.3em] uppercase text-gold-500 font-display">
              NHD
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 ${
                  pathname === link.href
                    ? 'text-gold-500 after:w-full'
                    : 'text-gray-400 hover:text-gold-500 after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gold-500 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-dark-800/95 backdrop-blur-lg border-t border-dark-600/30">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-sm uppercase tracking-widest py-2 transition-colors ${
                  pathname === link.href ? 'text-gold-500' : 'text-gray-400 hover:text-gold-500'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
