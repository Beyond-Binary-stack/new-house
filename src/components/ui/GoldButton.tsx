import { Link } from 'react-router-dom';
import type { ComponentProps } from 'react';
import { cn } from '../../utils/cn';

interface GoldButtonProps extends ComponentProps<'button'> {
  to?: string;
  variant?: 'outlined' | 'filled';
  size?: 'default' | 'large';
}

export default function GoldButton({
  children,
  to,
  variant = 'outlined',
  size = 'default',
  className,
  ...props
}: GoldButtonProps) {
  const baseClasses = cn(
    'relative inline-flex items-center justify-center font-medium tracking-widest uppercase transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 focus:ring-offset-dark-900',
    size === 'default' ? 'px-8 py-3 text-xs' : 'px-10 py-4 text-sm',
    variant === 'outlined'
      ? 'border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900 hover:shadow-gold-lg'
      : 'bg-gold-500 text-dark-900 hover:bg-gold-400 hover:shadow-gold-lg',
    className,
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
