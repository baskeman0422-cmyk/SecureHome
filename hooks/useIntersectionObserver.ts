import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  root?: Element | Document | null;
}

export const useIntersectionObserver = (options: UseIntersectionObserverOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // モバイル版の固定フッター（約80px）を考慮し、画面下部から80px余裕を持たせて検知を開始する
  // これにより、ボタンに隠れた状態でアニメーションが始まってしまうのを防ぐ
  const defaultRootMargin = typeof window !== 'undefined' && window.innerWidth < 768 
    ? '0px 0px -80px 0px' 
    : '0px';

  const { threshold = 0, rootMargin = defaultRootMargin, root = null } = options;

  useEffect(() => {
    const element = elementRef.current;
    
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
        setIsVisible(true);
    }
  }, [threshold, rootMargin, root]);

  return { elementRef, isVisible };
};