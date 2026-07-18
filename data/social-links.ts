/**
 * Link social dell'evento.
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
    url: "https://www.instagram.com/tetris_ets/",
  },
];
