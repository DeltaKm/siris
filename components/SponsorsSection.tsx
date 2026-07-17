import { Handshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import SponsorCard from "@/components/SponsorCard";
import { sponsors, tierLabels, tierOrder, type SponsorTier } from "@/data/sponsors-data";
import { eventData } from "@/data/event-data";

const tierSizes: Record<SponsorTier, "large" | "medium" | "small"> = {
  main: "large",
  gold: "medium",
  partner: "small",
  technical: "small",
};

// Larghezza delle card per categoria: i Main Sponsor sono più grandi
const tierCardWidths: Record<SponsorTier, string> = {
  main: "w-full max-w-md",
  gold: "w-full max-w-[17rem] sm:w-64",
  partner: "w-[calc(50%-0.5rem)] sm:w-52",
  technical: "w-[calc(50%-0.5rem)] sm:w-52",
};

/** Area sponsor organizzata per categorie, con CTA "Diventa sponsor". */
export default function SponsorsSection() {
  // Link della CTA: WhatsApp se configurato, altrimenti email
  const sponsorCtaHref = eventData.contacts.whatsappUrl
    ? eventData.contacts.whatsappUrl
    : `mailto:${eventData.contacts.email}?subject=Sponsor%20SIRIS%202026`;

  return (
    <section id="sponsor" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Sponsor"
          title="I nostri sponsor"
          subtitle="Grazie alle aziende e alle realtà che sostengono SIRIS."
        />

        <div className="mt-14 flex flex-col gap-14">
          {tierOrder.map((tier) => {
            const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);
            if (tierSponsors.length === 0) return null;
            return (
              <Reveal key={tier}>
                <div className="flex flex-col items-center gap-6">
                  <h3 className="hud-label flex items-center gap-3 text-gold/80">
                    <span aria-hidden="true" className="inline-block h-px w-6 bg-gold/40" />
                    {tierLabels[tier]}
                    <span aria-hidden="true" className="inline-block h-px w-6 bg-gold/40" />
                  </h3>
                  <div className="flex w-full flex-wrap items-stretch justify-center gap-4">
                    {tierSponsors.map((sponsor) => (
                      <div key={sponsor.id} className={tierCardWidths[tier]}>
                        <SponsorCard sponsor={sponsor} size={tierSizes[tier]} />
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Call to action per nuovi sponsor */}
        <Reveal className="mt-20">
          <div className="corner-frame mx-auto flex max-w-2xl flex-col items-center gap-4 border border-gold/25 bg-gold/5 p-8 text-center sm:p-10">
            <Handshake className="h-8 w-8 text-gold" aria-hidden="true" />
            <h3 className="font-display text-3xl uppercase text-cream sm:text-4xl">
              Vuoi diventare sponsor di SIRIS?
            </h3>
            <p className="text-sm leading-relaxed text-cream-dim sm:text-base">
              Porta il tuo marchio al centro della festa più attesa dell&apos;estate
              caiatina. Contattaci per scoprire le opportunità di partnership.
            </p>
            <a
              href={sponsorCtaHref}
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-gold px-8 font-semibold text-night transition-transform hover:scale-[1.03] active:scale-95"
            >
              Diventa sponsor
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
