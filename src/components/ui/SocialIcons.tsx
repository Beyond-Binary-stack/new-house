import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../../config/social';

function FacebookIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  MessageCircle,
};

interface SocialIconsProps {
  className?: string;
}

export default function SocialIcons({ className = '' }: SocialIconsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map((link) => {
        const Icon = icons[link.icon];
        if (!Icon) return null;
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="flex items-center justify-center w-10 h-10 border border-gold-700/30 rounded-full
                       text-gold-600 transition-all duration-500 ease-out
                       hover:border-gold-500 hover:shadow-gold hover:bg-gold-500/10 hover:text-gold-400
                       focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark-900"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
