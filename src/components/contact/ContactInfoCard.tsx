import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import type { ReactNode } from 'react';

interface ContactInfoCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}

export default function ContactInfoCard({ icon, label, value, href }: ContactInfoCardProps) {
  const content = (
    <div className="p-6 md:p-8 bg-dark-800 border border-dark-600/30 text-center
                    transition-all duration-400 ease-out
                    hover:border-gold-500/30 hover:shadow-gold hover:-translate-y-1 h-full">
      <div className="w-12 h-12 mx-auto mb-4 border border-gold-500/20 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">{label}</h3>
      <p className="text-white text-sm font-light">{value}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}

export const contactIcons = {
  phone: <Phone size={22} className="text-gold-500" />,
  whatsapp: <MessageCircle size={22} className="text-gold-500" />,
  email: <Mail size={22} className="text-gold-500" />,
  address: <MapPin size={22} className="text-gold-500" />,
};
