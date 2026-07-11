const FadeIn = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 'duration-1000',
  className = '',
}) => {
  const directionClasses = {
    up: 'animate-fade-in-up',
    down: 'animate-fade-in-down',
    fade: 'animate-fade-in',
  };

  const delayClasses = {
    0: '',
    200: 'animation-delay-200',
    400: 'animation-delay-400',
    600: 'animation-delay-600',
    800: 'animation-delay-800',
    1000: 'animation-delay-1000',
  };

  return (
    <div
      className={`${directionClasses[direction]} ${delayClasses[delay] || ''} ${duration} ${className}`}
      style={{ opacity: 0, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
