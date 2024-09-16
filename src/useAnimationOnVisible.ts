import { useEffect, useRef, useState } from "react";

interface UseAnimationOnVisibleOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

const useAnimationOnVisible = <T extends HTMLElement>(
  animationClass: string,
  options: UseAnimationOnVisibleOptions = {}
) => {
  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const {
      root = null,
      rootMargin = "0px",
      threshold = 0,
      once = true,
    } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            elementRef.current?.classList.add(animationClass);
          } else {
            setIsVisible(false);
            if (!once) {
              elementRef.current?.classList.remove(animationClass);
            }
          }
        });
      },
      { root, rootMargin, threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationClass, options]);

  return elementRef;
};

export default useAnimationOnVisible;
