import type { ImageMetadata } from 'astro';
import gato from '../assets/cronica/gato.webp';
import bigotes from '../assets/cronica/bigotes.webp';
import noHayGato from '../assets/cronica/no-hay-gato.webp';
import parque from '../assets/cronica/parque.webp';
import perfil from '../assets/cronica/perfil.webp';
import sendero from '../assets/cronica/sendero.webp';

export type Photo = { image: ImageMetadata; alt: string };
export type Paragraph = {
  id: string;
  voice: string;
  runs: { text: string; italic?: boolean }[];
};

// The opening of the first source paragraph, through the second sentence.
export const leadLength = 105;

type Scene = {
  from: number;
  through: number;
} & ({ side: 'left' | 'right'; photo: Photo } | { side?: never; photo?: never });

export const cover: Photo = {
  image: gato,
  alt: 'El Gato del Río visto desde abajo, con los bigotes en espiral y la cola levantada.',
};

export const scenes: Scene[] = [
  { from: 1, through: 4 },
  {
    from: 5, through: 7, side: 'left',
    photo: {
      image: noHayGato,
      alt: 'Vista de espaldas de No hay gato, con nombres de animales y referencias bíblicas escritas en el cuerpo.',
    },
  },
  {
    from: 8, through: 10, side: 'right',
    photo: {
      image: bigotes,
      alt: 'Detalle de la cara del Gato del Río y de sus bigotes en espiral.',
    },
  },
  {
    from: 11, through: 14, side: 'left',
    photo: {
      image: sendero,
      alt: 'Una persona de espaldas camina por el sendero del parque bajo las luces de los postes.',
    },
  },
  { from: 15, through: 25 },
  {
    from: 26, through: 28, side: 'right',
    photo: {
      image: perfil,
      alt: 'Perfil de una escultura felina junto a la reja que separa el parque de la vía.',
    },
  },
  {
    from: 29, through: 31, side: 'left',
    photo: {
      image: parque,
      alt: 'Vista nocturna del sendero curvo, los árboles iluminados y las esculturas del parque.',
    },
  },
  { from: 32, through: 34 },
];
