/**
 * Link social dell'evento.
 * Sostituisci gli URL segnaposto con i profili reali. [DA CONFERMARE]
 */

export interface SocialLink {
  id: "facebook" | "instagram" | "tiktok" | "youtube";
  label: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/", // [DA CONFERMARE]
  },
  {
    id: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/", // [DA CONFERMARE]
  },
];
