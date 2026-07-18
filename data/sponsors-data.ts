/**
 * Sponsor di SIRIS.
 * Aggiungi, rimuovi o sposta gli sponsor tra le categorie modificando
 * questo file. I loghi vanno in `public/images/sponsors/`.
 */

export type SponsorTier = "main" | "gold" | "partner" | "technical";

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url?: string;
  tier: SponsorTier;
  description?: string;
  /** true se il logo è scuro e ha bisogno di un contenitore chiaro */
  needsLightBackground?: boolean;
}

export const tierLabels: Record<SponsorTier, string> = {
  main: "Main Sponsor",
  gold: "Gold Sponsor",
  partner: "Partner",
  technical: "Sponsor tecnici",
};

export const tierOrder: SponsorTier[] = ["main", "gold", "partner", "technical"];

export const sponsors: Sponsor[] = [
  {
    id: "il-buco",
    name: "Il Buco – Locale Diffuso",
    logo: "/images/sponsors/il-buco.png",
    tier: "main",
    description: "Locale diffuso nel centro di Caiazzo.",
    needsLightBackground: true,
  },
  {
    id: "sushi-cafone",
    name: "Sushi Cafone",
    logo: "/images/sponsors/sushi-cafone.png",
    tier: "gold",
    needsLightBackground: true,
  },
  {
    id: "cmh",
    name: "CMH",
    logo: "/images/sponsors/cmh.png",
    tier: "technical",
    needsLightBackground: true,
  },
];
