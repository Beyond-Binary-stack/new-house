const GoldDivider = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
      <div className="w-1.5 h-1.5 rotate-45 border border-gold-500/60" />
      <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
    </div>
  );
};

export default GoldDivider;
