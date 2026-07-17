import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Sponsor } from "@/data/sponsors-data";

interface SponsorCardProps {
  sponsor: Sponsor;
  /** I Main Sponsor hanno un contenitore più grande */
  size?: "large" | "medium" | "small";
}

const sizeClasses = {
  large: "h-40 sm:h-48",
  medium: "h-28 sm:h-32",
  small: "h-24 sm:h-28",
};

/**
 * Card sponsor: il logo è sempre centrato, proporzionato e mai deformato
 * (object-contain in un contenitore a dimensione fissa). I loghi scuri
 * poggiano su un fondo chiaro per restare leggibili.
 */
export default function SponsorCard({ sponsor, size = "medium" }: SponsorCardProps) {
  const content = (
    <article className="corner-frame flex h-full flex-col border border-gold/15 bg-panel/50 transition-colors hover:border-gold/40">
      <div
        className={`flex items-center justify-center p-4 ${sizeClasses[size]} ${
          sponsor.needsLightBackground ? "bg-cream" : "bg-transparent"
        }`}
      >
        <div className="relative h-full w-full">
          <Image
            src={sponsor.logo}
            alt={`Logo ${sponsor.name}`}
            fill
            sizes={size === "large" ? "(max-width: 640px) 90vw, 400px" : "240px"}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-0.5 border-t border-gold/10 px-4 py-3 text-center">
        <h4 className="flex items-center justify-center gap-1.5 font-semibold text-cream">
          {sponsor.name}
          {sponsor.url ? (
            <ExternalLink className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
          ) : null}
        </h4>
        {sponsor.description ? (
          <p className="text-xs leading-relaxed text-cream-dim">
            {sponsor.description}
          </p>
        ) : null}
      </div>
    </article>
  );

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visita il sito di ${sponsor.name}`}
        className="block h-full"
      >
        {content}
      </a>
    );
  }
  return content;
}
