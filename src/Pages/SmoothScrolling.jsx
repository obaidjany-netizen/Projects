// src/components/SmoothScrolling.jsx
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrolling = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust for desired scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      // Add other options as needed, e.g., smoothWheel, lerp, etc.
    });

    lenisRef.current = lenis;

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenis.destroy(); // Clean up Lenis instance on unmount
    };
  }, []);

  return <div className="smooth-scroll-container">{children}</div>;
};

export default SmoothScrolling;