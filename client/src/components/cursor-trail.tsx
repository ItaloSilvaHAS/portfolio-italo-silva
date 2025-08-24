import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const trails = useRef<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    // Only show cursor on desktop
    if (window.innerWidth <= 768) return;

    // Initialize trails
    for (let i = 0; i < 10; i++) {
      trails.current.push({
        x: 0,
        y: 0,
        opacity: (10 - i) / 10
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 10}px`;
        cursorRef.current.style.top = `${e.clientY - 10}px`;
      }
    };

    const animateTrails = () => {
      let currentX = mousePos.current.x;
      let currentY = mousePos.current.y;
      
      trails.current.forEach((trail, index) => {
        trail.x += (currentX - trail.x) * 0.3;
        trail.y += (currentY - trail.y) * 0.3;
        
        const trailElement = trailsRef.current[index];
        if (trailElement) {
          trailElement.style.left = `${trail.x - 2}px`;
          trailElement.style.top = `${trail.y - 2}px`;
          trailElement.style.opacity = `${trail.opacity * 0.8}`;
        }
        
        currentX = trail.x;
        currentY = trail.y;
      });
      
      requestAnimationFrame(animateTrails);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateTrails();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <div ref={cursorRef} className="cursor-custom" />
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailsRef.current[i] = el;
          }}
          className="cursor-trail"
        />
      ))}
    </>
  );
}
