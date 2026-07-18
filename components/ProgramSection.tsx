"use client";

import { useState } from "react";
import {
  Beer,
  Clock,
  MapPin,
  Mic2,
  Music,
  Sparkles,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import { programDays, type ProgramItem } from "@/data/program-data";

const icons: Record<ProgramItem["icon"], typeof Music> = {
  music: Music,
  beer: Beer,
  utensils: UtensilsCrossed,
  sparkles: Sparkles,
  mic: Mic2,
  star: Star,
};

/**
 * Programma completo con tab per giorno e timeline degli appuntamenti.
 * I contenuti si modificano in `data/program-data.ts`.
 */
export default function ProgramSection() {
  const [activeId, setActiveId] = useState(programDays[0].id);
  const reduceMotion = useReducedMotion();
  const activeDay = programDays.find((day) => day.id === activeId) ?? programDays[0];

  return (
    <section id="programma" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Il programma"
          title="Programma delle serate"
          subtitle="Il programma ufficiale sarà annunciato a breve: ecco un'anteprima delle tre serate."
        />

        {/* Tab dei giorni */}
        <div
          role="tablist"
          aria-label="Scegli la serata"
          className="mt-12 grid grid-cols-3 gap-2 sm:gap-3"
        >
          {programDays.map((day) => {
            const isActive = day.id === activeId;
            return (
              <button
                key={day.id}
                role="tab"
                id={`tab-${day.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${day.id}`}
                onClick={() => setActiveId(day.id)}
                className={`corner-frame flex min-h-16 flex-col items-center justify-center gap-0.5 border px-2 py-3 transition-colors ${
                  isActive
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-gold/15 bg-panel/40 text-cream-dim hover:border-gold/40 hover:text-cream"
                }`}
              >
                <span className="font-display text-2xl leading-none sm:text-3xl">
                  {day.dateLabel}
                </span>
                <span className="text-xs uppercase tracking-widest">
                  {day.dayLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Pannello del giorno attivo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay.id}
            role="tabpanel"
            id={`panel-${activeDay.id}`}
            aria-labelledby={`tab-${activeDay.id}`}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-8"
          >
            <div className="mb-6 flex flex-col gap-1">
              <h3 className="font-display text-3xl uppercase text-cream">
                {activeDay.title}
              </h3>
              <p className="text-sm text-cream-dim">{activeDay.description}</p>
            </div>

            <ol className="relative flex flex-col gap-4 border-l border-gold/20 pl-6">
              {activeDay.items.map((item, index) => {
                const Icon = icons[item.icon];
                return (
                  <motion.li
                    key={`${activeDay.id}-${item.time}-${item.title}`}
                    initial={reduceMotion ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * index, duration: 0.4 }}
                    className="relative"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.85rem] top-5 h-2.5 w-2.5 rotate-45 border border-gold bg-night"
                    />
                    <article className="corner-frame border border-gold/15 bg-panel/40 p-4 sm:p-5">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                        <p className="flex items-center gap-1.5 font-mono text-sm text-gold">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.time}
                        </p>
                        {item.location ? (
                          <p className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-cream-dim">
                            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                            {item.location}
                          </p>
                        ) : null}
                      </div>
                      <h4 className="mt-1.5 flex items-center gap-2 font-semibold text-cream">
                        <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-cream-dim">
                        {item.description}
                      </p>
                    </article>
                  </motion.li>
                );
              })}
            </ol>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
