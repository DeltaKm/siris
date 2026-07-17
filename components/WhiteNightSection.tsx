"use client";

import { useRef } from "react";
import { Moon, Sparkles, Star } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import ParticleField from "@/components/ParticleField";
import Reveal from "@/components/Reveal";
import { whiteNight } from "@/data/event-data";

/**
 * Sezione speciale Notte Bianca: durante lo scroll l'atmosfera passa
 * dal tramonto dorato alla notte blu, con stelle che si accendono.
 */
export default function WhiteNightSection() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Il cielo notturno emerge man mano che la sezione entra in vista
  const nightOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const starsOpacity = useTransform(scrollYProgress, [0.3, 1], [0, 1]);
  const skylineY = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <section
      id="notte-bianca"
      ref={ref}
      className="relative overflow-hidden py-24 sm:py-36"
    >
      {/* Strato tramonto (base) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#0b0906_0%,#2a1a10_45%,#3a2410_100%)]"
      />
      {/* Strato notte che si sovrappone con lo scroll */}
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { opacity: nightOpacity }}
        className="absolute inset-0 bg-[linear-gradient(to_bottom,#070b1e_0%,#0d1330_60%,#131b42_100%)]"
      />
      {/* Stelle */}
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { opacity: starsOpacity }}
        className="absolute inset-0"
      >
        <ParticleField density={0.5} variant="moon" connect={false} />
      </motion.div>

      {/* Skyline stilizzata di paese che sale con lo scroll */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 1200 140"
        preserveAspectRatio="none"
        style={reduceMotion ? undefined : { y: skylineY }}
        className="absolute bottom-0 left-0 h-24 w-full text-midnight sm:h-32"
      >
        <path
          fill="currentColor"
          d="M0 140V96h40V70h28v26h36V54h20l6-18 6 18h18v42h40V78h32v18h44V60h26V38h10V24h8v14h10v22h24v36h48V72h36v24h40V58h24l8-22 8 22h22v38h44V80h30v16h52V64h28V44h12V28h8v16h12v20h22v32h46V76h34v20h38V62h26l6-16 6 16h20v34h42V82h30v14h48V70h30v26h32v44z"
        />
        {/* Finestrelle illuminate */}
        <g fill="#fecc00" opacity="0.8">
          <rect x="76" y="82" width="5" height="6" />
          <rect x="252" y="72" width="5" height="6" />
          <rect x="410" y="86" width="5" height="6" />
          <rect x="608" y="76" width="5" height="6" />
          <rect x="806" y="88" width="5" height="6" />
          <rect x="1010" y="80" width="5" height="6" />
        </g>
      </motion.svg>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-moon/40 bg-midnight/70 px-4 py-1.5 text-sm font-medium text-moon">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {whiteNight.badge}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="hud-label flex items-center justify-center gap-3 text-moon-dim">
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            {whiteNight.dateLabel}
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <h2 className="font-display text-glow-moon text-5xl uppercase leading-none text-moon sm:text-6xl md:text-7xl">
            29 Agosto: SIRIS
            <br />
            incontra la <span className="text-white">Notte Bianca</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="max-w-2xl text-base leading-relaxed text-moon-dim sm:text-lg">
            {whiteNight.description}
          </p>
        </Reveal>

        {/* Timeline della serata — facilmente aggiornabile in data/event-data.ts */}
        <div className="mt-6 grid w-full gap-4 sm:grid-cols-3">
          {whiteNight.schedule.map((item, index) => (
            <motion.article
              key={item.time}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.12 * index, duration: 0.6, ease: "easeOut" }}
              className="corner-frame flex flex-col gap-2 border border-moon/20 bg-midnight/60 p-5 text-left backdrop-blur-sm [&::before]:border-[color-mix(in_srgb,var(--moon)_50%,transparent)] [&::after]:border-[color-mix(in_srgb,var(--moon)_50%,transparent)]"
            >
              <p className="hud-label text-moon">{item.time}</p>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-moon-dim">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="flex items-center gap-2 text-sm text-moon-dim">
            <Moon className="h-4 w-4" aria-hidden="true" />
            Programma completo della Notte Bianca in aggiornamento
          </p>
        </Reveal>
      </div>
    </section>
  );
}
