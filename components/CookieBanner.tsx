"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

const CONSENT_KEY = "siris-cookie-consent";
// L'ID è pubblico per natura (visibile comunque nel sorgente della pagina).
// NEXT_PUBLIC_GA_ID viene inlined in build: su Cloud Run le env di runtime
// non bastano, quindi il default è nel codice.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-FS6FRQ457H";

type Consent = "granted" | "denied" | null;

/**
 * Banner di consenso cookie: Google Analytics viene caricato SOLO dopo
 * il consenso esplicito (nessun cookie prima della scelta). La scelta è
 * salvata in localStorage e può essere azzerata dalla pagina cookie policy.
 */
export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "granted" || stored === "denied") setConsent(stored);
    setReady(true);
  }, []);

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  // Senza Measurement ID configurato non c'è tracciamento: niente banner
  if (!GA_ID) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div
          role="dialog"
          aria-label="Consenso all'uso dei cookie"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-gold/25 bg-night p-4 sm:p-5"
        >
          <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center">
            <p className="flex-1 text-sm leading-relaxed text-cream-dim">
              Questo sito usa cookie di analisi (Google Analytics) per capire
              come viene visitato, solo se accetti. Puoi rifiutare senza
              limitazioni: il sito funziona comunque.{" "}
              <Link href="/cookie-policy" className="text-gold hover:underline">
                Cookie policy
              </Link>
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="inline-flex h-11 items-center justify-center rounded-full border border-gold/40 px-5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
              >
                Rifiuta
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-6 text-sm font-semibold text-night transition-transform hover:scale-[1.03] active:scale-95"
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
