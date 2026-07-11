import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import { MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    icon: FacebookIcon,
    href: '#',
    label: 'Facebook',
  },
  {
    icon: InstagramIcon,
    href: '#',
    label: 'Instagram',
  },
  {
    icon: MessageCircle,
    href: '#',
    label: 'WhatsApp',
  },
];

const SocialIcons = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12
                     border border-gold-700/30 rounded-full
                     transition-all duration-500 ease-out
                     hover:border-gold-500 hover:shadow-gold hover:bg-gold-500/10
                     focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark-400"
        >
          <Icon
            size={18}
            className="text-gold-600 transition-colors duration-500 group-hover:text-gold-400"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
