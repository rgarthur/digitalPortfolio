import { useEffect, useRef, useState } from 'react';

export function Reveal({ children, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) 
                setIsVisible(true)
            else 
                setIsVisible(false)
        },
        { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const directions = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: '-translate-x-10',
    right: 'translate-x-10',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 
            'opacity-100 translate-y-0' 
            : `opacity-0 ${direction[direction]}`
      }`}
    >
      {children}
    </div>
  );
}