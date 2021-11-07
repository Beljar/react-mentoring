import { GENRES } from 'src/entities/genre';

export const genresToString = (genres: string[]) =>
  genres
    .map((genreId) => {
      const genreObj = GENRES.find((genre) => genre.id === genreId);
      return genreObj.nameFull || genreObj.nameShort[0].toUpperCase() + genreObj.nameShort.substring(1);
    })
    .join(', ');
