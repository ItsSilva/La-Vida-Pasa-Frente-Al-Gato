import type { ImageMetadata } from 'astro';
import gato from '../assets/cronica/gato.webp';
import bigotes from '../assets/cronica/bigotes.webp';
import noHayGato from '../assets/cronica/no-hay-gato.webp';
import parque from '../assets/cronica/parque.webp';
import perfil from '../assets/cronica/perfil.webp';
import sendero from '../assets/cronica/sendero.webp';

export type Photo = { image: ImageMetadata; alt: string };

type Scene = {
  from: number;
  through: number;
} & ({ side: 'left' | 'right'; photo: Photo } | { side?: never; photo?: never });

export const cover: Photo = {
  image: gato,
  alt: 'El Gato del Río visto desde abajo, con los bigotes en espiral y la cola levantada.',
};

export const scenes: Scene[] = [
  { from: 1, through: 3 },
  {
    from: 4, through: 6, side: 'left',
    photo: {
      image: noHayGato,
      alt: 'Vista de espaldas de No hay gato, con nombres de animales y referencias bíblicas escritas en el cuerpo.',
    },
  },
  {
    from: 7, through: 9, side: 'right',
    photo: {
      image: bigotes,
      alt: 'Detalle de la cara del Gato del Río y de sus bigotes en espiral.',
    },
  },
  {
    from: 10, through: 13, side: 'left',
    photo: {
      image: sendero,
      alt: 'Una persona de espaldas camina por el sendero del parque bajo las luces de los postes.',
    },
  },
  { from: 14, through: 23 },
  {
    from: 24, through: 26, side: 'right',
    photo: {
      image: perfil,
      alt: 'Perfil de una escultura felina junto a la reja que separa el parque de la vía.',
    },
  },
  {
    from: 27, through: 29, side: 'left',
    photo: {
      image: parque,
      alt: 'Vista nocturna del sendero curvo, los árboles iluminados y las esculturas del parque.',
    },
  },
  { from: 30, through: 32 },
];
