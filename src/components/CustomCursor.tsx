"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!cursor || !ring || !glow) return;

    let mx = 0, my = 0, rx = 0, ry = 0, gx = 0, gy = 0;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = `${mx - 6}px`;
      cursor.style.top = `${my - 6}px`;
    };
    const onMouseDown = () => cursor?.classList.add("scale-150");
    const onMouseUp = () => cursor?.classList.remove("scale-150");

    const animate = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
      gx += (mx - gx) * 0.06; gy += (my - gy) * 0.06;
      ring.style.left = `${rx - 18}px`; ring.style.top = `${ry - 18}px`;
      glow.style.left = `${gx}px`; glow.style.top = `${gy}px`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef}
        className="fixed pointer-events-none z-[9999] w-3 h-3 rounded-full bg-[var(--accent-olive)] mix-blend-screen transition-transform duration-150 ease-out hidden md:block"
        style={{ left: 0, top: 0 }} />
      <div ref={ringRef}
        className="fixed pointer-events-none z-[9998] w-9 h-9 rounded-full border border-[var(--accent-olive)] opacity-40 hidden md:block"
        style={{ left: 0, top: 0 }} />
      <div ref={glowRef}
        className="fixed pointer-events-none z-[9995] hidden md:block"
        style={{
          left: 0, top: 0,
          width: "300px", height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,138,58,0.06) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }} />
    </>
  );
}
