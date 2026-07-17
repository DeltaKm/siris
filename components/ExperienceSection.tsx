"use client";

import { Beer, Music4, PartyPopper, UtensilsCrossed } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";

const experiences = [
  {
    icon: Beer,
    title: "Birre",
    description:
      "Birre alla spina e selezioni artigianali per tutti i gusti: bionde, ambrate e scure servite fresche tutta la sera.",
  },
  {
    icon: UtensilsCrossed,
    title: "Area food",
    description:
      "Stand gastronomici con piatti della tradizione e street food: il gusto dell'estate caiatina in ogni assaggio.",
  },
  {
    icon: Music4,
    title: "Musica dal vivo",
    description:
      "Concerti e dj set ogni sera sul palco principale: la colonna sonora perfetta per le tue notti d'estate.",
  },
  {
    icon: PartyPopper,
    title: "Spettacoli e divertimento",
    description:
      "Artisti di strada, animazione e sorprese per grandi e piccoli, tra le vie del centro storico.",
  },
];

/** Le quattro anime della festa: birra, food, musica e divertimento. */
export default function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="L'esperienza"
          title="Birra, food, musica e divertimento"
          subtitle="Tutto quello che rende SIRIS la festa più attesa dell'estate."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.title}
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index, duration: 0.6, ease: "easeOut" }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              className="corner-frame group flex flex-col gap-4 border border-gold/15 bg-panel/50 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-night">
                <experience.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-2xl uppercase text-cream">
                {experience.title}
              </h3>
              <p className="text-sm leading-relaxed text-cream-dim">
                {experience.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
