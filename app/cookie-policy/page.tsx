import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | SIRIS – Festa della Birra di Caiazzo",
  description: "Informativa sui cookie di SIRIS – Festa della Birra di Caiazzo.",
};

/** Pagina segnaposto: inserire qui la cookie policy definitiva. */
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
      <p className="text-cream-dim leading-relaxed">
        Contenuto in preparazione. Questo sito al momento non utilizza cookie di
        tracciamento o di profilazione: se verranno aggiunti strumenti di
        analisi o marketing, aggiornare questa pagina e predisporre un banner
        di consenso. [DA COMPLETARE]
      </p>
    </main>
  );
}
