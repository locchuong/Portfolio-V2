import useMousePosition from "@hooks/useMousePosition";
import { useRef, useEffect, useState, ComponentProps, useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";

const FPS = 180;

let stars: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

function distance(point1: { x: number; y: number }, point2: { x: number; y: number }) {
  let xs = 0;
  let ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
}

export default function AnimatedCanvas(props: ComponentProps<"canvas">) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const mousePosition = useMousePosition();

  const draw = useCallback(() => {
    context!.clearRect(0, 0, context!.canvas.width, context!.canvas.height);

    context!.globalCompositeOperation = "lighter";

    for (const a of stars) {
      context!.fillStyle = "#28e98c";
      context!.beginPath();
      context!.arc(a.x, a.y, a.radius, 0, 2 * Math.PI);
      context!.fill();

      context!.lineWidth = 0.2;
      context!.strokeStyle = "#28e98c";
      context!.moveTo(a.x, a.y);

      if (distance(mousePosition.current, a) < 150) {
        context!.lineWidth = 1;
        context!.lineTo(mousePosition.current.x, mousePosition.current.y);
      }

      for (const b of stars) {
        if (distance(a, b) < 150) {
          context!.lineTo(b.x, b.y);
        }
      }
      context!.stroke();
    }
  }, [context, mousePosition]);

  const update = useCallback(() => {
    for (const s of stars) {
      if (s.x < 0) s.x = 0;
      s.x += s.vx / FPS;
      s.y += s.vy / FPS;

      if (s.x < 0 || s.x > context!.canvas.width) {
        s.vx = -s.vx;
      }
      if (s.y < 0 || s.y > context!.canvas.height) {
        s.vy = -s.vy;
      }
    }
  }, [context]);

  const initCanvas = useDebouncedCallback(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");
      setContext(ctx);

      stars = new Array(canvas.clientWidth < 768 ? 25 : 50).fill(0).map(() => ({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      }));
    }
  }, 200);

  useEffect(() => {
    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, [initCanvas]);

  useEffect(() => {
    let animationFrameId: number;

    // Check if null context has been replaced on component mount
    if (context) {
      //Our draw came here
      const render = () => {
        draw();
        update();
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [context, update, draw]);

  return <canvas className="fixed left-0 top-0 opacity-20" ref={canvasRef} {...props} />;
}
