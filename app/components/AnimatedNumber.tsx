'use client'
import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const start = Date.now();

    const frame = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / duration, 1);
      const currentDisplayValue = Math.round(progress * value);

      setDisplayValue(currentDisplayValue);

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    return () => {
      setDisplayValue(value);
    };
  }, [value, duration]);

  return <span>{displayValue}</span>;
};

