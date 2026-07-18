import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | SIRIS – Festa della Birra",
  description: "Informativa sulla privacy di SIRIS – Festa della Birra.",
};

/** Pagina segnaposto: inserire qui l'informativa privacy definitiva. */
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
      <p className="text-cream-dim leading-relaxed">
        Contenuto in preparazione. Inserire qui l&apos;informativa sulla privacy
        completa prima della pubblicazione del sito. [DA COMPLETARE]
      </p>
    </main>
  );
}
