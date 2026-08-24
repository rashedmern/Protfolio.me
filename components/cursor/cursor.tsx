"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    let glowX = mouseX;
    let glowY = mouseY;

    let animationFrame: number;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      /*
       * Small dot follows faster
       */
      cursorX += (mouseX - cursorX) * 0.35;
      cursorY += (mouseY - cursorY) * 0.35;

      /*
       * Glow follows slower
       * Creates a soft trailing feeling
       */
      glowX += (mouseX - glowX) * 0.09;
      glowY += (mouseY - glowY) * 0.09;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate3d(${glowX}px, ${glowY}px, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* =====================================
          Ambient Cursor Glow
      ===================================== */}
      <div
        ref={glowRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9997]

          h-40
          w-40

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-orange-500/[0.045]

          blur-[45px]
        "
      />

      {/* =====================================
          Cursor Dot
      ===================================== */}
      <div
        ref={cursorRef}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]

          h-[10px]
          w-[10px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-orange-400

          shadow-[
            0_0_8px_rgba(255,122,24,0.95),
            0_0_18px_rgba(255,122,24,0.45)
          ]
        "
      />
    </>
  );
}