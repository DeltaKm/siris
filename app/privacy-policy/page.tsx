import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | SIRIS – Festa della Birra",
  description: "Informativa sulla privacy di SIRIS – Festa della Birra.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col gap-6 px-4 py-24 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Torna alla home
      </Link>
      <h1 className="font-display text-5xl uppercase text-cream">Privacy Policy</h1>

      <div className="flex flex-col gap-4 leading-relaxed text-cream-dim">
        <p>
          Questo sito è la pagina informativa di SIRIS – Festa della Birra,
          organizzata dall&apos;Associazione Tetris ETS. Non richiede
          registrazione e non raccoglie dati personali tramite moduli.
        </p>

        <h2 className="mt-4 font-display text-2xl uppercase text-cream">
          Dati raccolti
        </h2>
        <p>
          Se acconsenti ai cookie di analisi, vengono raccolte statistiche
          aggregate e anonimizzate sulle visite tramite Google Analytics 4
          (vedi la{" "}
          <Link href="/cookie-policy" className="text-gold hover:underline">
            cookie policy
          </Link>
          ). Se ci contatti via email o WhatsApp, i dati che ci fornisci
          vengono usati esclusivamente per risponderti.
        </p>

        <h2 className="mt-4 font-display text-2xl uppercase text-cream">
          Titolare del trattamento
        </h2>
        <p>
          Associazione Tetris ETS — contatti:{" "}
          <a
            href="mailto:info@sirisbeerfest.it"
            className="text-gold hover:underline"
          >
            info@sirisbeerfest.it
          </a>
          .
        </p>

        <h2 className="mt-4 font-display text-2xl uppercase text-cream">
          I tuoi diritti
        </h2>
        <p>
          Ai sensi del GDPR puoi chiedere in qualsiasi momento accesso,
          rettifica o cancellazione dei tuoi dati scrivendo all&apos;indirizzo
          email sopra indicato.
        </p>
      </div>
    </main>
  );
}
