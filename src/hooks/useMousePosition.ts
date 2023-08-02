import { useCallback, useEffect, useRef } from "react";

export default function useMousePosition() {
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const setMousePosition = useCallback((e: MouseEvent) => {
    mousePosition.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", setMousePosition);

    return () => {
      window.removeEventListener("mousemove", setMousePosition);
    };
  }, [setMousePosition]);

  return mousePosition;
}
