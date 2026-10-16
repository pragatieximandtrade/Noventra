import Lenis from 'lenis';
import { useEffect } from 'react';

let lenisInstance = null;

export const initLenis = () => {
  if (typeof window === 'undefined') return null;
  
  if (!lenisInstance) {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  return lenisInstance;
};

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  }, []);
};

export const getLenis = () => lenisInstance;
