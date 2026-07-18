/**
 * Domande frequenti.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Dove si svolge SIRIS?",
    answer:
      "SIRIS si svolge a Caiazzo, in provincia di Caserta, in Piazza Santo Stefano Menecillo, nel cuore del centro storico.",
  },
  {
    question: "A che ora iniziano le serate?",
    answer: "Le serate iniziano dalle ore 19:00.",
  },
  {
    question: "Sono presenti stand gastronomici?",
    answer:
      "Sì, l'area food è uno dei cuori della festa: stand gastronomici con piatti della tradizione e street food.",
  },
  {
    question: "Dove posso parcheggiare?",
    answer:
      "Le informazioni su parcheggi e aree di sosta saranno pubblicate a breve sui nostri canali ufficiali.",
  },
  {
    question: "Cosa succede il 29 agosto durante la Notte Bianca?",
    answer:
      "Il 29 agosto SIRIS incontra la Notte Bianca di Caiazzo: locali aperti, spettacoli, musica e attività per le vie del centro fino a tarda notte.",
  },
  {
    question: "Come posso diventare sponsor?",
    answer:
      "Scrivi a sponsor@sirisbeerfest.it: ti presenteremo tutte le opportunità di partnership per SIRIS 2026.",
  },
  {
    question: "Come posso contattare gli organizzatori?",
    answer:
      "Puoi scrivere a info@sirisbeerfest.it oppure contattarci su WhatsApp al 389 549 1390.",
  },
];
