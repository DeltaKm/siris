"use client";

import { useRef } from "react";
import { Beer, Music, UtensilsCrossed, Sun, MapPin, PartyPopper } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

// Testo di presentazione: modificabile liberamente
const aboutText =
  "SIRIS è la Festa della Birra: tre serate a Caiazzo dedicate alla birra, alla musica, al buon cibo e al divertimento. Dal 28 al 30 agosto vivi insieme a noi uno degli appuntamenti più attesi dell'estate.";

const keywords = [
  { label: "Birra", icon: Beer },
  { label: "Musica", icon: Music },
  { label: "Food", icon: UtensilsCrossed },
  { label: "Estate", icon: Sun },
  { label: "Caiazzo", icon: MapPin },
  { label: "Divertimento", icon: PartyPopper },
];

/** Presentazione di SIRIS con parole chiave che compaiono allo scroll. */
export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Leggero parallasse del bagliore di sfondo
  const glowY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section id="siris" ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <motion.div
        aria-hidden="true"
        style={reduceMotion ? undefined : { y: glowY }}
        className="absolute right-[-20%] top-1/4 h-96 w-96 rounded-full bg-amber/10 blur-[140px]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-10 px-4 sm:px-6">
        <SectionHeading
          eyebrow="L'evento"
          title="Cos'è SIRIS"
        />

        <Reveal delay={0.1}>
          <p className="text-center text-lg sm:text-2xl leading-relaxed text-cream/90">
            {aboutText}
          </p>
        </Reveal>

        {/* Parole chiave che entrano in cascata */}
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {keywords.map((keyword, index) => (
            <motion.li
              key={keyword.label}
              initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.08 * index, duration: 0.5, ease: "easeOut" }}
            >
              <span className="corner-frame flex items-center gap-2 border border-gold/20 bg-panel/60 px-4 py-2 text-sm sm:text-base text-cream">
                <keyword.icon className="h-4 w-4 text-gold" aria-hidden="true" />
                {keyword.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
