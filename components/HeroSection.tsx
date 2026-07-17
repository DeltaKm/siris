"use client";

import { useRef } from "react";
import Image from "next/image";
import { CalendarDays, ChevronDown, MapPin } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import ParticleField from "@/components/ParticleField";
import { eventData } from "@/data/event-data";

/**
 * Hero a tutto schermo: campo di bollicine dorate in stile "costellazione",
 * logo ufficiale e date. Durante lo scroll il contenuto scala e sfuma
 * trasformandosi nella sezione successiva.
 */
export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.2]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden"
    >
      {/* Sfondo: gradiente notturno caldo + particelle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#241a08_0%,_#120d06_55%,_#0b0906_100%)]"
      />
      <motion.div
        aria-hidden="true"
        style={{ opacity: reduceMotion ? 1 : glowOpacity }}
        className="absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="absolute inset-0">
        <ParticleField density={0.7} variant="gold" connect />
      </div>

      {/* Griglia prospettica sul fondo, come il pavimento della reference */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 opacity-20 [background-image:linear-gradient(to_right,rgba(254,204,0,0.25)_1px,transparent_1px),linear-gradient(to_top,rgba(254,204,0,0.25)_1px,transparent_1px)] [background-size:48px_24px] [mask-image:linear-gradient(to_top,black,transparent)] [transform:perspective(400px)_rotateX(55deg)] origin-bottom"
      />

      <motion.div
        style={
          reduceMotion
            ? undefined
            : { y: contentY, scale: contentScale, opacity: contentOpacity }
        }
        className="relative z-10 flex flex-col items-center gap-6 px-4 py-28 text-center"
      >
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/logos/siris/siris-logo.svg"
            alt="Logo ufficiale SIRIS – Festa della Birra"
            width={200}
            height={200}
            priority
            className="h-40 w-40 sm:h-52 sm:w-52 drop-shadow-[0_0_45px_rgba(254,204,0,0.25)]"
          />
        </motion.div>

        <motion.p
          className="hud-label text-gold/90"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          Festa della Birra di Caiazzo
        </motion.p>

        <motion.h1
          className="font-display text-glow max-w-4xl text-6xl leading-[0.95] uppercase text-cream sm:text-7xl md:text-8xl"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Tre notti <span className="text-gold">di festa</span>
          <br />
          sotto le stelle
        </motion.h1>

        <motion.div
          className="flex flex-col items-center gap-2"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <p className="font-display text-3xl sm:text-4xl tracking-widest text-gold">
            28 · 29 · 30 Agosto 2026
          </p>
          <p className="flex items-center gap-2 text-cream-dim">
            <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
            Caiazzo (CE)
          </p>
        </motion.div>

        <motion.p
          className="max-w-xl text-base sm:text-lg text-cream/85 leading-relaxed"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          {eventData.tagline}
        </motion.p>

        <motion.div
          className="mt-2 flex flex-col gap-3 sm:flex-row"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <a
            href="#programma"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-8 font-semibold text-night transition-transform hover:scale-[1.03] active:scale-95"
          >
            <CalendarDays className="h-5 w-5" aria-hidden="true" />
            Scopri il programma
          </a>
          <a
            href="#dove-siamo"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/40 px-8 font-semibold text-gold transition-colors hover:bg-gold/10"
          >
            <MapPin className="h-5 w-5" aria-hidden="true" />
            Come arrivare
          </a>
        </motion.div>
      </motion.div>

      {/* Indicatore di scroll */}
      <motion.a
        href="#siris"
        aria-label="Scorri alla sezione successiva"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-gold/70 hover:text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.span
          className="block"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" aria-hidden="true" />
        </motion.span>
      </motion.a>

      {/* Dissolvenza verso la sezione successiva */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-night"
      />
    </section>
  );
}
