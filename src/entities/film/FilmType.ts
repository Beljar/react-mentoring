import { Genre } from "../genre/GenreType";

export type Film = {
    id: string;
    title: string;
    genres: Genre[];
    year: number;
    coverUrl: string;
}
