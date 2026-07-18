/**
 * Galleria fotografica.
 * Le immagini vanno in `public/images/gallery/`.
 * Le foto attuali provengono dalle precedenti edizioni di SIRIS.
 */

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Occupa più spazio nella griglia */
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/spettacolo-fuoco.jpeg",
    alt: "Spettacolo di fuoco durante una precedente edizione di SIRIS",
    width: 623,
    height: 664,
    featured: true,
  },
  {
    src: "/images/gallery/palco-band.png",
    alt: "Band sul palco principale",
    width: 400,
    height: 220,
  },
  {
    src: "/images/gallery/piazza-live.png",
    alt: "Concerto in piazza a Caiazzo",
    width: 400,
    height: 220,
  },
  {
    src: "/images/gallery/concerto-rock.jpg",
    alt: "Concerto rock dal vivo",
    width: 410,
    height: 220,
  },
  {
    src: "/images/gallery/cantante-live.jpg",
    alt: "Cantante durante un live",
    width: 666,
    height: 498,
    featured: true,
  },
  {
    src: "/images/gallery/rap-live.png",
    alt: "Esibizione rap sul palco",
    width: 410,
    height: 220,
  },
];
