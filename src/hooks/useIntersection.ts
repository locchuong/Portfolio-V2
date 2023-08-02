import { useCallback, useEffect, useRef } from "react";

const defaultOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

export default function useIntersection(callbackFn: () => void, options: IntersectionObserverInit = defaultOptions) {
  const containerRef = useRef<HTMLElement>(null);

  const intersectionCallback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && window.scrollY !== 0) {
        callbackFn();
      }
    },
    [callbackFn],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);

    const curr = containerRef.current;

    if (curr) {
      observer.observe(curr);
    }

    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
  }, [containerRef, intersectionCallback, options]);

  return containerRef;
}
