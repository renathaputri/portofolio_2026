"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const S = 34;

type CubeDef = { gx: number; gy: number; delay: number };

const CUBES: CubeDef[] = [
  { gx: 160, gy: 48, delay: 0 },
  { gx: 124, gy: 87, delay: 0.18 },
  { gx: 196, gy: 87, delay: 0.35 },
  { gx: 88, gy: 126, delay: 0.1 },
  { gx: 160, gy: 126, delay: 0.28 },
  { gx: 232, gy: 126, delay: 0.45 },
  { gx: 124, gy: 165, delay: 0.2 },
  { gx: 196, gy: 165, delay: 0.38 },
  { gx: 160, gy: 204, delay: 0.3 },
];

function isoPoints(cx: number, cy: number, s: number) {
  const h = s * 0.577;
  return {
    top: [[cx, cy], [cx + s, cy + h], [cx, cy + h * 2], [cx - s, cy + h]],
    left: [
      [cx - s, cy + h],
      [cx, cy + h * 2],
      [cx, cy + h * 2 + s],
      [cx - s, cy + h + s],
    ],
    right: [
      [cx + s, cy + h],
      [cx, cy + h * 2],
      [cx, cy + h * 2 + s],
      [cx + s, cy + h + s],
    ],
    shadowY: cy + h * 2 + s,
  };
}

function drawPoly(
  ctx: CanvasRenderingContext2D,
  pts: number[][],
  color: string
) {
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

export function Preloader() {
  const [show, setShow] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);
  const tRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const r = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: (e.clientX - r.left) * (canvas.width / r.width),
      y: (e.clientY - r.top) * (canvas.height / r.height),
    };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const r = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: (e.touches[0].clientX - r.left) * (canvas.width / r.width),
      y: (e.touches[0].clientY - r.top) * (canvas.height / r.height),
    };
  }, []);

  const clearMouse = useCallback(() => {
    mouseRef.current = { x: -999, y: -999 };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isDark = document.documentElement.classList.contains("dark");

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", clearMouse);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", clearMouse);

    function draw() {
      // 🔥 FIX: canvas sudah dijamin non-null di scope ini
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const t = tRef.current;

      CUBES.forEach((cube) => {
        const phase = t * 1.8 + cube.delay * Math.PI * 2;
        const baseFloat = Math.sin(phase) * 9;

        const dx = mouseRef.current.x - cube.gx;
        const dy = mouseRef.current.y - (cube.gy + S * 0.577 * 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repel = Math.max(0, 1 - dist / 90);

        const offsetX = -dx * repel * 0.18;
        const offsetY = -dy * repel * 0.18 + baseFloat;

        const cx = cube.gx + offsetX;
        const cy = cube.gy + offsetY;
        const p = isoPoints(cx, cy, S);

        const bright = 1 + repel * 0.3;
        const shadowAlpha = 0.08 + Math.sin(phase) * 0.03;

        ctx.beginPath();
        ctx.ellipse(
          cube.gx,
          p.shadowY - offsetY * 0.4 + S * 0.15,
          S * 0.72,
          S * 0.18,
          0,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(33,150,243,${shadowAlpha})`;
        ctx.fill();

        const r = Math.round;
        const topC = isDark
          ? `rgb(${r(100 * bright)},${r(181 * bright)},${r(246 * bright)})`
          : `rgb(${r(66 * bright)},${r(165 * bright)},${r(245 * bright)})`;

        const leftC = isDark ? "#0d47a1" : "#1565c0";
        const rightC = isDark ? "#1565c0" : "#1976d2";

        drawPoly(ctx, p.left, leftC);
        drawPoly(ctx, p.right, rightC);
        drawPoly(ctx, p.top, topC);
      });

      tRef.current += 0.016;
      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", clearMouse);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", clearMouse);
    };
  }, [show, handleMouseMove, handleTouchMove, clearMouse]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#f8fafc] dark:bg-[#020617]"
        >
          <motion.div
            animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 280,
              height: 280,
              background:
                "radial-gradient(circle, rgba(33,150,243,0.13) 0%, transparent 70%)",
              filter: "blur(48px)",
            }}
          />

          <canvas
            ref={canvasRef}
            width={320}
            height={280}
            className="relative z-10"
            style={{
              width: "min(320px, 80vw)",
              height: "auto",
              aspectRatio: "320 / 280",
              touchAction: "none",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}