"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import { galleryImages } from "@/data/gallery-data";

/**
 * Galleria fotografica: griglia dinamica con hover, reveal allo scroll
 * e lightbox accessibile (frecce, ESC, pulsanti).
 */
export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((current) =>
        current === null
          ? null
          : (current - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );
  const next = useCallback(
    () =>
      setLightboxIndex((current) =>
        current === null ? null : (current + 1) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  const current = lightboxIndex === null ? null : galleryImages[lightboxIndex];

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="I momenti di SIRIS"
          subtitle="Scatti dalle precedenti edizioni: palco, piazza e notti d'estate a Caiazzo."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 [grid-auto-flow:dense]">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Apri l'immagine: ${image.alt}`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * (index % 3), duration: 0.5 }}
              className={`group relative block overflow-hidden border border-gold/10 bg-panel/40 ${
                image.featured ? "col-span-2 row-span-2 aspect-square sm:aspect-[4/3]" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={image.featured ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 50vw, 33vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-night/95 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Chiudi la galleria"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream hover:text-gold"
            >
              <X aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                prev();
              }}
              aria-label="Immagine precedente"
              className="absolute left-2 sm:left-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream hover:text-gold"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <motion.div
              key={current.src}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[80vh] w-full max-w-4xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width * 2}
                height={current.height * 2}
                sizes="90vw"
                className="mx-auto max-h-[80vh] w-auto object-contain"
              />
              <p className="mt-3 text-center text-sm text-cream-dim">
                {current.alt}
              </p>
            </motion.div>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              aria-label="Immagine successiva"
              className="absolute right-2 sm:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-cream hover:text-gold"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
