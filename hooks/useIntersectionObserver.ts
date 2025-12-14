import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | Document | null;
}

export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Default threshold to 0 to ensure elements trigger as soon as they enter viewport
  const { threshold = 0, rootMargin = '0px', root = null } = options;

  useEffect(() => {
    const element = elementRef.current;
    
    // Safety check: if IntersectionObserver is not supported, show immediately
    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
        setIsVisible(true);
        return;
    }

    if (!element) return;

    try {
        const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
        }
        }, { threshold, rootMargin, root });

        observer.observe(element);

        return () => {
             if (element) observer.unobserve(element);
        };
    } catch (e) {
        // Fallback in case of error
        setIsVisible(true);
    }
  }, [threshold, rootMargin, root]);

  return { elementRef, isVisible };
};