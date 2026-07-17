/**
 * Dati principali dell'evento SIRIS.
 * Modifica qui date, luogo, contatti e testi generali.
 * I valori contrassegnati con [DA CONFERMARE] sono segnaposto.
 */

export const eventData = {
  name: "SIRIS",
  fullName: "SIRIS – Festa della Birra di Caiazzo",
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
  // Orario indicativo di apertura serale [DA CONFERMARE]
  openingTime: "Dalle ore 19:00 [orario da confermare]",
  venue: {
    name: "Centro storico di Caiazzo [zona da confermare]",
    address: "Caiazzo (CE) — indirizzo esatto da confermare",
    // Link generico alla città: sostituire con il pin esatto dell'area evento
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Caiazzo+CE",
  },
  parking: "Informazioni su parcheggi e aree di sosta in aggiornamento. [DA CONFERMARE]",
  accessibility: "Informazioni sull'accessibilità dell'area evento in aggiornamento. [DA CONFERMARE]",
  contacts: {
    email: "info@sirisfestival.it", // [DA CONFERMARE]
    whatsapp: "", // es. "+39 333 0000000" [DA CONFERMARE]
    whatsappUrl: "", // es. "https://wa.me/393330000000"
  },
  organizers: "Organizzato dall'Associazione Tetris [DA CONFERMARE]",
  // URL canonico del sito: sostituire con il dominio definitivo
  siteUrl: "https://www.sirisfestival.it",
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
      description: "Locali aperti e animazione per le vie del centro. [Programma da confermare]",
    },
    {
      time: "21:00",
      title: "Musica e spettacoli",
      description: "Esibizioni diffuse nel centro storico. [Programma da confermare]",
    },
    {
      time: "24:00",
      title: "Fino a tarda notte",
      description: "SIRIS e Notte Bianca insieme fino a tarda sera. [Programma da confermare]",
    },
  ],
} as const;
