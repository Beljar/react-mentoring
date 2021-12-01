import { GENRES } from 'src/entities/genre';

export const genresToString = (genres: string[]) =>
  genres
    .map((genreName) => {
      const genreObj = GENRES.find((genre) => genre.value === genreName.toLowerCase());
      return genreObj ? genreObj.label : genreName;
    })
    .join(', ');
