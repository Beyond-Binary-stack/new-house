const Logo = ({ className = '' }) => {
  return (
    <div className={`inline-flex flex-col items-center gap-3 ${className}`}>
      <img
        src="/assets/logo.png"
        alt="New House Decoration Logo"
        className="h-28 md:h-36 lg:h-44 w-auto"
      />
    </div>
  );
};

export default Logo;
