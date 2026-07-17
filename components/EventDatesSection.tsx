"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Moon } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import { programDays } from "@/data/program-data";

/**
 * Le tre serate: timeline verticale che si riempie durante lo scroll,
 * con una card per ogni data che entra alternata da destra e sinistra.
 */
export default function EventDatesSection() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.6"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="date" ref={ref} className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Le date"
          title="Tre serate, un'unica festa"
          subtitle="Venerdì, sabato e domenica: ogni serata ha il suo carattere. Scorri per scoprirle."
        />

        <div className="relative mt-16">
          {/* Timeline verticale animata */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-gold/15 sm:left-1/2"
          >
            <motion.div
              className="h-full w-full origin-top bg-gold/70"
              style={reduceMotion ? undefined : { scaleY: lineScale }}
            />
          </div>

          <ol className="flex flex-col gap-16 sm:gap-24">
            {programDays.map((day, index) => {
              const fromLeft = index % 2 === 0;
              return (
                <li key={day.id} className="relative">
                  {/* Punto sulla timeline */}
                  <span
                    aria-hidden="true"
                    className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rotate-45 border border-gold bg-night sm:left-1/2"
                  />

                  <motion.article
                    initial={
                      reduceMotion
                        ? false
                        : { opacity: 0, x: fromLeft ? -48 : 48 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className={`corner-frame ml-10 border border-gold/15 bg-panel/50 backdrop-blur-sm sm:ml-0 sm:w-[calc(50%-3rem)] ${
                      fromLeft ? "sm:mr-auto" : "sm:ml-auto"
                    } ${day.isWhiteNight ? "border-moon/30" : ""}`}
                  >
                    <div className="relative h-44 overflow-hidden sm:h-52">
                      <Image
                        src={day.image}
                        alt={day.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, 45vw"
                        className="object-cover opacity-80"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-panel via-panel/30 to-transparent"
                      />
                      <p className="hud-label absolute bottom-3 left-4 text-gold">
                        {day.dayLabel} — {day.dateLabel}
                      </p>
                      {day.isWhiteNight && (
                        <p className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-moon/40 bg-midnight/80 px-3 py-1 text-xs font-medium text-moon">
                          <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                          Notte Bianca
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 p-5 sm:p-6">
                      <h3 className="font-display text-3xl uppercase leading-none text-cream">
                        {day.title}
                      </h3>
                      <p className="text-sm uppercase tracking-widest text-gold/80">
                        {day.subtitle}
                      </p>
                      <p className="text-sm leading-relaxed text-cream-dim">
                        {day.description}
                      </p>
                      <a
                        href="#programma"
                        className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all"
                      >
                        Vedi il programma della serata
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </motion.article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
