"use client";
import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  value: number;
  duration?: number; // duration of the animation in milliseconds
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null); 
  const [hasStarted, setHasStarted] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.unobserve(ref.current!);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

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
  }, [hasStarted, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
};
