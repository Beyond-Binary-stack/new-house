import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../config/navigation';
import { SOCIAL_LINKS } from '../../config/social';
import SocialIcons from '../ui/SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-600/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 mb-4">
              <img src="/assets/logo.png" alt="NHD" className="h-10 w-auto" />
              <span className="text-sm tracking-[0.3em] uppercase text-gold-500 font-display">
                NHD
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium interior finishing and decoration services. Where Quality Meets Design.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 hover:text-gold-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-500 mb-4">Follow Us</h4>
            <SocialIcons />
          </div>
        </div>

        <div className="border-t border-dark-600/30 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {year} New House Decoration. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
