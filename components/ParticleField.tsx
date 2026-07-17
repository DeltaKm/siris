"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  drift: number;
  phase: number;
  alpha: number;
}

interface ParticleFieldProps {
  className?: string;
  /** Particelle per 10.000 px² circa (default calibrato per non pesare) */
  density?: number;
  /** "gold" per la festa, "moon" per la Notte Bianca */
  variant?: "gold" | "moon";
  /** Disegna sottili linee di connessione tra particelle vicine */
  connect?: boolean;
}

/**
 * Campo di particelle su canvas: bollicine dorate che salgono, con
 * connessioni sottili che reinterpretano la costellazione della grafica
 * di riferimento. Si mette in pausa fuori viewport e rispetta
 * prefers-reduced-motion (rendering statico, nessuna animazione).
 */
export default function ParticleField({
  className,
  density = 0.6,
  variant = "gold",
  connect = true,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const color = variant === "gold" ? "254, 204, 0" : "196, 208, 255";
    let particles: Particle[] = [];
    let raf = 0;
    let running = false;
    let width = 0;
    let height = 0;

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        90,
        Math.round(((width * height) / 10000) * density)
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.8 + Math.random() * 1.8,
        speed: 0.15 + Math.random() * 0.4,
        drift: 0.2 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.25 + Math.random() * 0.5,
      }));
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!reduceMotion) {
          p.y -= p.speed;
          p.x += Math.sin(time / 1800 + p.phase) * p.drift * 0.3;
          if (p.y < -6) {
            p.y = height + 6;
            p.x = Math.random() * width;
          }
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();
      }

      if (connect) {
        const maxDist = 90;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.hypot(dx, dy);
            if (dist < maxDist) {
              const alpha = (1 - dist / maxDist) * 0.14;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(${color}, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }
    };

    const loop = (time: number) => {
      draw(time);
      if (!reduceMotion && running) raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    setup();
    draw(0);

    // Anima solo quando il canvas è visibile
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const ro = new ResizeObserver(() => {
      setup();
      draw(0);
    });
    ro.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
    };
  }, [density, variant, connect]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
