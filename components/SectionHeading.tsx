import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  /** Etichetta micro in stile HUD sopra il titolo */
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Allineamento del blocco */
  align?: "left" | "center";
  /** Variante colore per la sezione Notte Bianca */
  variant?: "gold" | "moon";
}

/** Intestazione di sezione riutilizzabile con etichetta, titolo e sottotitolo. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "gold",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";
  const accent = variant === "gold" ? "text-gold" : "text-moon";
  const line = variant === "gold" ? "bg-gold/60" : "bg-moon/60";

  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass}`}>
      <p className={`hud-label flex items-center gap-3 ${accent}`}>
        <span aria-hidden="true" className={`inline-block h-px w-8 ${line}`} />
        {eyebrow}
        <span aria-hidden="true" className={`inline-block h-px w-8 ${line}`} />
      </p>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-none uppercase">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base sm:text-lg text-cream-dim leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
