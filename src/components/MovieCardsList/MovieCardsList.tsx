import * as React from 'react'
import { FILMS } from 'src/entities/film/films'
import { MovieCard } from '../MovieCard'

export const MovieCardsLst = () => {
    return <>{FILMS.map((film) => <MovieCard key={film.id} film={film}/>)}</>
}
