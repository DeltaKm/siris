"use client";

/** Bottone per azzerare la scelta sui cookie e far riapparire il banner. */
export default function CookieConsentReset() {
  return (
    <button
      type="button"
      onClick={() => {
        window.localStorage.removeItem("siris-cookie-consent");
        window.location.href = "/";
      }}
      className="inline-flex h-11 w-fit items-center justify-center rounded-full border border-gold/40 px-5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
    >
      Gestisci il consenso ai cookie
    </button>
  );
}
