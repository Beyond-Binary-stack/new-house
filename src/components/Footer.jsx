const Footer = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative z-10 py-8 ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-700/30 to-transparent" />
        <p className="text-sm text-gray-500 tracking-wider font-light">
          &copy; {currentYear} New House Decoration. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
