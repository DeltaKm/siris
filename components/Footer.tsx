import Image from "next/image";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import type { SVGProps } from "react";
import { eventData } from "@/data/event-data";
import { socialLinks, type SocialLink } from "@/data/social-links";

// Icone social inline (i loghi brand non sono più inclusi in lucide-react)
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socialIcons: Record<SocialLink["id"], typeof InstagramIcon> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TiktokIcon,
  youtube: YoutubeIcon,
};

/** Footer con logo, contatti, social e link legali. */
export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-night-soft">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logos/siris/siris-logo.png"
              alt="Logo SIRIS – Festa della Birra"
              width={72}
              height={72}
              className="h-18 w-18"
            />
            <p className="font-display text-2xl uppercase leading-tight text-cream">
              {eventData.fullName}
            </p>
            <p className="text-sm text-cream-dim">{eventData.organizers}</p>
          </div>

          {/* Evento */}
          <div className="flex flex-col gap-3">
            <h3 className="hud-label text-gold/80">Evento</h3>
            <p className="flex items-center gap-2 text-sm text-cream-dim">
              <MapPin className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {eventData.town} ({eventData.province})
            </p>
            <p className="text-sm text-cream-dim">{eventData.datesLabel}</p>
            <p className="text-sm text-cream-dim">{eventData.openingTime}</p>
          </div>

          {/* Contatti */}
          <div className="flex flex-col gap-3">
            <h3 className="hud-label text-gold/80">Contatti</h3>
            <a
              href={`mailto:${eventData.contacts.email}`}
              className="flex items-center gap-2 text-sm text-cream-dim transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {eventData.contacts.email}
            </a>
            <a
              href={eventData.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-cream-dim transition-colors hover:text-gold"
            >
              <MessageCircle className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              WhatsApp {eventData.contacts.whatsapp}
            </a>
            <div className="mt-1 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.id];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-cream-dim transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-gold/10 pt-6 text-center">
          <p className="text-xs text-cream-dim">
            © {eventData.year} {eventData.fullName}. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
