import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CookieConsentReset from "@/components/CookieConsentReset";

export const metadata: Metadata = {
  title: "Cookie Policy | SIRIS – Festa della Birra",
  description: "Informativa sui cookie di SIRIS – Festa della Birra.",
};

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col gap-6 px-4 py-24 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Torna alla home
      </Link>
      <h1 className="font-display text-5xl uppercase text-cream">Cookie Policy</h1>

      <div className="flex flex-col gap-4 leading-relaxed text-cream-dim">
        <p>
          Questo sito utilizza soltanto i cookie descritti di seguito. Nessun
          cookie viene installato prima del tuo consenso, fatta eccezione per
          quelli tecnici strettamente necessari al funzionamento del sito.
        </p>

        <h2 className="mt-4 font-display text-2xl uppercase text-cream">
          Cookie tecnici
        </h2>
        <p>
          Servono al funzionamento del sito (ad esempio per ricordare la tua
          scelta sul consenso ai cookie). Non richiedono consenso e non
          raccolgono dati per finalità di marketing.
        </p>

        <h2 className="mt-4 font-display text-2xl uppercase text-cream">
          Cookie di analisi (Google Analytics)
        </h2>
        <p>
          Solo se accetti, il sito utilizza Google Analytics 4 per raccogliere
          statistiche aggregate sulle visite (pagine viste, provenienza,
          dispositivo). L&apos;indirizzo IP viene anonimizzato. I dati sono
          trattati da Google Ireland Ltd secondo la sua{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            privacy policy
          </a>
          . Se rifiuti, nessuno strumento di analisi viene caricato e il sito
          funziona senza limitazioni.
        </p>

        <h2 className="mt-4 font-display text-2xl uppercase text-cream">
          Gestire il consenso
        </h2>
        <p>
          Puoi cambiare idea in qualsiasi momento: azzera la tua scelta con il
          pulsante qui sotto e il banner ti verrà riproposto.
        </p>
        <CookieConsentReset />

        <p className="mt-6 text-xs">
          Per qualsiasi domanda scrivi a{" "}
          <a
            href="mailto:info@sirisbeerfest.it"
            className="text-gold hover:underline"
          >
            info@sirisbeerfest.it
          </a>
          .
        </p>
      </div>
    </main>
  );
}
