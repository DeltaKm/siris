"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import ParticleField from "@/components/ParticleField";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "SIRIS", href: "#siris" },
  { label: "Date", href: "#date" },
  { label: "Programma", href: "#programma" },
  { label: "Notte Bianca", href: "#notte-bianca" },
  { label: "Gallery", href: "#gallery" },
  { label: "Sponsor", href: "#sponsor" },
  { label: "Dove siamo", href: "#dove-siamo" },
];

/** Header fisso: trasparente sulla Hero, scuro con blur durante lo scroll. */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blocca lo scroll della pagina quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Con il body bloccato l'ancora nativa non scrolla: chiudi il menu,
  // attendi il rilascio del blocco e poi scorri alla sezione.
  const handleMobileNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    window.setTimeout(() => {
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      history.pushState(null, "", href);
    }, 80);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-night border-b border-gold/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#home"
          className="flex items-center gap-3"
          aria-label="SIRIS – torna all'inizio della pagina"
        >
          <Image
            src="/logos/siris/siris-logo.png"
            alt="Logo SIRIS – Festa della Birra"
            width={48}
            height={48}
            className={`transition-all duration-300 ${scrolled ? "h-10 w-10" : "h-12 w-12"}`}
            priority
          />
          <span className="font-display text-2xl leading-none text-gold hidden sm:inline">
            SIRIS
          </span>
        </Link>

        {/* Navigazione desktop */}
        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-cream/80 hover:text-gold transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger mobile */}
        <button
          type="button"
          className="lg:hidden relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-md border border-gold/25 text-gold"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Chiudi il menu" : "Apri il menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Menu mobile a tutto schermo (sempre montato: visibilità pilotata dallo stato) */}
      <motion.nav
        id="mobile-menu"
        aria-label="Navigazione principale mobile"
        inert={!menuOpen}
        initial={false}
        animate={
          menuOpen
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: reduceMotion ? 0 : -16 }
        }
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={`lg:hidden fixed inset-0 top-0 z-40 flex flex-col overflow-y-auto bg-night px-6 pt-24 pb-10 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Particelle dorate come nella hero, solo a menu aperto */}
        {menuOpen && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <ParticleField density={0.5} variant="gold" connect={false} />
          </div>
        )}
        <Image
          src="/logos/siris/siris-logo.png"
          alt="Logo SIRIS – Festa della Birra"
          width={96}
          height={96}
          className="relative mb-4 h-20 w-20 self-center"
        />
        <ul className="relative flex flex-col gap-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={false}
              animate={
                menuOpen
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: reduceMotion ? 0 : -16 }
              }
              transition={{
                delay: menuOpen ? 0.05 * index : 0,
                duration: 0.3,
              }}
            >
              <a
                href={item.href}
                className="block py-3 font-display text-3xl uppercase text-cream hover:text-gold transition-colors"
                onClick={(event) => handleMobileNavClick(event, item.href)}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <p className="hud-label relative mt-auto text-gold/70">
          28 · 29 · 30 Agosto 2026 — Caiazzo
        </p>
      </motion.nav>
    </header>
  );
}
