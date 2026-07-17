"use client";

import Image from "next/image";
import { CalendarDays, MapPin, Share2 } from "lucide-react";
import { useReducedMotion } from "motion/react";
import ParticleField from "@/components/ParticleField";
import Reveal from "@/components/Reveal";
import { eventData } from "@/data/event-data";

/** Call to action finale: invito a partecipare e condividere l'evento. */
export default function FinalCta() {
  const reduceMotion = useReducedMotion();

  const share = async () => {
    const shareData = {
      title: eventData.fullName,
      text: `${eventData.fullName} — ${eventData.datesLabel}. ${eventData.tagline}`,
      url: typeof window !== "undefined" ? window.location.href : eventData.siteUrl,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        window.alert("Link copiato negli appunti!");
      }
    } catch {
      // condivisione annullata dall'utente: nessuna azione necessaria
    }
  };

  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_#2a1c08_0%,_#120d06_60%,_#0b0906_100%)]"
      />
      <div className="absolute inset-0">
        <ParticleField density={0.6} variant="gold" connect={false} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-7 px-4 text-center sm:px-6">
        <Reveal from={reduceMotion ? "none" : "up"}>
          <Image
            src="/logos/siris/siris-logo.svg"
            alt="Logo SIRIS"
            width={120}
            height={120}
            className="h-28 w-28 drop-shadow-[0_0_35px_rgba(254,204,0,0.25)]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-glow text-5xl uppercase leading-none text-cream sm:text-6xl md:text-7xl">
            Preparati a vivere
            <br />
            <span className="text-gold">tre notti indimenticabili</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col items-center gap-1">
            <p className="font-display text-3xl tracking-widest text-gold">
              {eventData.datesLabel}
            </p>
            <p className="flex items-center gap-2 text-cream-dim">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
              {eventData.town}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#programma"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-8 font-semibold text-night transition-transform hover:scale-[1.03] active:scale-95"
            >
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
              Scopri il programma
            </a>
            <button
              type="button"
              onClick={share}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/40 px-8 font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              <Share2 className="h-5 w-5" aria-hidden="true" />
              Condividi l&apos;evento
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
