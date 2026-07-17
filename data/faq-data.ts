/**
 * Domande frequenti.
 * Le risposte contrassegnate con [DA CONFERMARE] sono segnaposto
 * da aggiornare con le informazioni ufficiali.
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "L'ingresso è gratuito?",
    answer: "Informazione in aggiornamento. [DA CONFERMARE]",
  },
  {
    question: "Dove si svolge SIRIS?",
    answer:
      "SIRIS si svolge a Caiazzo, in provincia di Caserta. La zona esatta dell'evento sarà comunicata a breve. [DA CONFERMARE]",
  },
  {
    question: "A che ora iniziano le serate?",
    answer: "Orario indicativo dalle 19:00. [DA CONFERMARE]",
  },
  {
    question: "Sono presenti stand gastronomici?",
    answer:
      "Sì, l'area food è uno dei cuori della festa: stand gastronomici con piatti della tradizione e street food. [Dettagli da confermare]",
  },
  {
    question: "Ci saranno opzioni vegetariane o senza glutine?",
    answer: "Informazione in aggiornamento. [DA CONFERMARE]",
  },
  {
    question: "Dove posso parcheggiare?",
    answer: "Le informazioni su parcheggi e aree di sosta saranno pubblicate a breve. [DA CONFERMARE]",
  },
  {
    question: "Cosa succede il 29 agosto durante la Notte Bianca?",
    answer:
      "Il 29 agosto SIRIS incontra la Notte Bianca di Caiazzo: locali aperti, spettacoli, musica e attività per le vie del centro fino a tarda notte. [Programma completo in aggiornamento]",
  },
  {
    question: "Come posso diventare sponsor?",
    answer:
      "Contatta gli organizzatori tramite la sezione sponsor di questa pagina o via email: trovi i riferimenti nel footer. [Contatti da confermare]",
  },
  {
    question: "Come posso contattare gli organizzatori?",
    answer:
      "Puoi scrivere via email o WhatsApp: i riferimenti sono nel footer della pagina. [Contatti da confermare]",
  },
];
