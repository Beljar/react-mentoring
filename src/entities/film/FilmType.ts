import { GenreName } from "../genre/GenreType";

export type Movie = {
    id: string;
    title: string;
    genres: number[];
    year: number;
    releaseDate?: string;
    duration: number;
    rating: number;
    coverUrl?: string;
    url?: string;
    description?: string;    
}
