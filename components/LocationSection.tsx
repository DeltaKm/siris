import { Accessibility, CalendarDays, Car, Clock, MapPin, Navigation } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { eventData } from "@/data/event-data";

const infoItems = [
  {
    icon: MapPin,
    title: "Dove",
    text: eventData.venue.name,
  },
  {
    icon: CalendarDays,
    title: "Quando",
    text: eventData.datesLabel,
  },
  {
    icon: Clock,
    title: "Orari",
    text: eventData.openingTime,
  },
  {
    icon: Car,
    title: "Parcheggi",
    text: eventData.parking,
  },
  {
    icon: Accessibility,
    title: "Accessibilità",
    text: eventData.accessibility,
  },
];

/** Posizione e informazioni pratiche, con spazio per la mappa. */
export default function LocationSection() {
  return (
    <section id="dove-siamo" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Dove siamo"
          title="Caiazzo ti aspetta"
          subtitle="Tutte le informazioni utili per raggiungere la festa."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Informazioni pratiche */}
          <Reveal from="right">
            <ul className="flex h-full flex-col gap-3">
              {infoItems.map((item) => (
                <li
                  key={item.title}
                  className="corner-frame flex items-start gap-4 border border-gold/15 bg-panel/50 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-cream">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-cream-dim">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Spazio mappa: sostituire l'iframe con l'embed dell'area evento */}
          <Reveal from="left">
            <div className="corner-frame flex h-full min-h-72 flex-col overflow-hidden border border-gold/15 bg-panel/50">
              <iframe
                title="Mappa di Caiazzo"
                src="https://www.google.com/maps?q=Caiazzo%20CE&output=embed"
                className="min-h-64 w-full flex-1 border-0 grayscale-[0.4] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="flex items-center justify-between gap-3 border-t border-gold/10 p-4">
                <p className="text-sm text-cream-dim">{eventData.venue.address}</p>
                <a
                  href={eventData.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-gold/40 px-5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Apri su Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
