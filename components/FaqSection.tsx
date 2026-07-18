import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { faqItems } from "@/data/faq-data";

/**
 * FAQ con accordion nativo (details/summary): accessibile da tastiera
 * e senza JavaScript aggiuntivo. Contenuti in `data/faq-data.ts`.
 */
export default function FaqSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Domande frequenti"
          subtitle="Tutto quello che c'è da sapere per vivere al meglio la festa."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={Math.min(index * 0.04, 0.3)}>
              <details className="corner-frame group border border-gold/15 bg-panel/50">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-medium text-cream transition-colors hover:text-gold [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-cream-dim">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
