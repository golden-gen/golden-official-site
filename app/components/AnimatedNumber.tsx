"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface AnimatedNumberProps {
  value: number;
  duration?: number; // duration of the animation in milliseconds
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
}) => {
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

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

  return (
    <span ref={ref}>
      {hasStarted && (
        <CountUp start={0} end={value} duration={duration / 1000} />
      )}
    </span>
  );
};
