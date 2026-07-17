/**
 * Programma delle tre serate.
 * Tutti i contenuti sono SEGNAPOSTO: sostituisci titoli, orari e
 * descrizioni con il programma reale quando disponibile.
 */

export interface ProgramItem {
  time: string;
  title: string;
  description: string;
  location?: string;
  icon: "music" | "beer" | "utensils" | "sparkles" | "mic" | "star";
}

export interface EventDay {
  id: "venerdi" | "sabato" | "domenica";
  date: string; // ISO
  dayLabel: string;
  dateLabel: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  isWhiteNight?: boolean;
  items: ProgramItem[];
}

export const programDays: EventDay[] = [
  {
    id: "venerdi",
    date: "2026-08-28",
    dayLabel: "Venerdì",
    dateLabel: "28 Agosto",
    title: "Serata di apertura",
    subtitle: "Il via alla festa",
    description:
      "La prima serata di SIRIS 2026: apertura degli stand, prime birre alla spina e musica dal vivo. [Descrizione da confermare]",
    image: "/images/gallery/palco-band.png",
    imageAlt: "Band sul palco durante una precedente edizione di SIRIS",
    items: [
      {
        time: "19:00",
        title: "Apertura stand",
        description: "Apertura area food e birre. [Da confermare]",
        location: "Area festa",
        icon: "beer",
      },
      {
        time: "21:30",
        title: "Musica dal vivo",
        description: "Artista o gruppo da annunciare.",
        location: "Palco principale",
        icon: "music",
      },
      {
        time: "23:00",
        title: "Dj set",
        description: "Line-up da annunciare.",
        location: "Palco principale",
        icon: "sparkles",
      },
    ],
  },
  {
    id: "sabato",
    date: "2026-08-29",
    dayLabel: "Sabato",
    dateLabel: "29 Agosto",
    title: "SIRIS + Notte Bianca",
    subtitle: "La notte più lunga dell'estate",
    description:
      "La serata evento: SIRIS incontra la Notte Bianca di Caiazzo. Locali aperti, spettacoli diffusi e festa fino a tarda notte. [Programma da confermare]",
    image: "/images/gallery/spettacolo-fuoco.jpeg",
    imageAlt: "Spettacolo di fuoco in una precedente edizione",
    isWhiteNight: true,
    items: [
      {
        time: "19:00",
        title: "Apertura stand + Notte Bianca",
        description: "Locali aperti in tutto il centro. [Da confermare]",
        location: "Centro storico",
        icon: "star",
      },
      {
        time: "21:30",
        title: "Live sul palco principale",
        description: "Artista o gruppo da annunciare.",
        location: "Palco principale",
        icon: "music",
      },
      {
        time: "22:30",
        title: "Spettacoli itineranti",
        description: "Artisti di strada e animazione. [Da confermare]",
        location: "Vie del centro",
        icon: "sparkles",
      },
      {
        time: "24:00",
        title: "Notte Bianca fino a tardi",
        description: "Musica e locali aperti fino a tarda notte. [Da confermare]",
        location: "Centro storico",
        icon: "star",
      },
    ],
  },
  {
    id: "domenica",
    date: "2026-08-30",
    dayLabel: "Domenica",
    dateLabel: "30 Agosto",
    title: "Gran finale",
    subtitle: "L'ultima serata",
    description:
      "La serata conclusiva di SIRIS 2026: ultime spine, sapori d'estate e il gran finale sul palco. [Descrizione da confermare]",
    image: "/images/gallery/piazza-live.png",
    imageAlt: "Concerto in piazza durante una precedente edizione",
    items: [
      {
        time: "19:00",
        title: "Apertura stand",
        description: "Ultima serata di birre e food. [Da confermare]",
        location: "Area festa",
        icon: "utensils",
      },
      {
        time: "21:30",
        title: "Concerto finale",
        description: "Artista o gruppo da annunciare.",
        location: "Palco principale",
        icon: "mic",
      },
      {
        time: "23:30",
        title: "Chiusura della festa",
        description: "Saluti e arrivederci al prossimo anno. [Da confermare]",
        location: "Palco principale",
        icon: "sparkles",
      },
    ],
  },
];
