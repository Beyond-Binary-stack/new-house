const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-dark-400" />

      {/* Animated gradient orbs */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full animate-gradient-shift opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #C8A15A 0%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full animate-gradient-shift opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, #C8A15A 0%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 15s ease-in-out infinite reverse',
        }}
      />
      <div
        className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full animate-gradient-shift opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #E5C982 0%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 10s ease-in-out infinite',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,161,90,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,161,90,0.3) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, #111111 100%)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
