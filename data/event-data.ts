/**
 * Dati principali dell'evento SIRIS.
 * Modifica qui date, luogo, contatti e testi generali.
 */

export const eventData = {
  name: "SIRIS",
  fullName: "SIRIS – Festa della Birra",
  tagline: "Tre notti di birra, musica, sapori e divertimento nel cuore di Caiazzo.",
  town: "Caiazzo",
  province: "CE",
  region: "Campania",
  country: "IT",
  year: 2026,
  // Date dell'evento (ISO, usate anche nel JSON-LD)
  startDate: "2026-08-28",
  endDate: "2026-08-30",
  datesLabel: "28 · 29 · 30 Agosto 2026",
  openingTime: "Dalle ore 19:00",
  venue: {
    name: "Piazza Santo Stefano Menecillo, Caiazzo",
    address: "P.za S. Stefano Menecillo, 81013 Caiazzo (CE)",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Piazza+Santo+Stefano+Menecillo+81013+Caiazzo+CE",
  },
  parking: "Informazioni su parcheggi e aree di sosta in aggiornamento.",
  accessibility: "Informazioni sull'accessibilità dell'area evento in aggiornamento.",
  contacts: {
    email: "info@sirisbeerfest.it",
    sponsorEmail: "sponsor@sirisbeerfest.it",
    whatsapp: "+39 389 549 1390",
    whatsappUrl: "https://wa.me/393895491390",
  },
  organizers: "Organizzato dall'Associazione Tetris ETS",
  siteUrl: "https://www.sirisbeerfest.it",
} as const;

export const whiteNight = {
  date: "2026-08-29",
  dateLabel: "29 Agosto 2026",
  title: "SIRIS incontra la Notte Bianca",
  badge: "Evento speciale",
  description:
    "Una notte speciale nel cuore di Caiazzo. Musica, spettacoli, attività, locali aperti e Festa della Birra fino a tarda sera.",
  // Programma della Notte Bianca: aggiungi qui gli appuntamenti reali
  schedule: [
    {
      time: "19:00",
      title: "Apertura Notte Bianca",
      description: "Locali aperti e animazione per le vie del centro.",
    },
    {
      time: "21:00",
      title: "Musica e spettacoli",
      description: "Esibizioni diffuse nel centro storico.",
    },
    {
      time: "24:00",
      title: "Fino a tarda notte",
      description: "SIRIS e Notte Bianca insieme fino a tarda sera.",
    },
  ],
} as const;
