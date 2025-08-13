"use client";
import { useEffect, useRef } from "react";

export default function FloatingBubbles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bubbles: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
    }[] = [];

    function createBubble() {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 50, // start below screen
        radius: 20 + Math.random() * 60, // bigger circles
        speed: 0.5 + Math.random() * 1.5,
        opacity: 0.3 + Math.random() * 0.5,
      });
    }

    // Create some initial bubbles
    for (let i = 0; i < 6; i++) {
      createBubble();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity})`;
        ctx.fill();
        b.y -= b.speed; // move upward
        b.opacity -= 0.001; // slight fade

        // remove bubble when it goes off screen
        if (b.y + b.radius < 0 || b.opacity <= 0) {
          bubbles.splice(i, 1);
          createBubble();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Resize listener
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
