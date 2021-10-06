import * as React from 'react';
import { Film } from 'src/entities/film';

type Props = {
    film: Film;
}

export const MovieCard: React.FC<Props> = ({ film }: Props) => <div>
<img src={film.coverUrl}/>
<h3>{film.title}</h3>
<span>{film.genres.join(', ')}</span>
</div>