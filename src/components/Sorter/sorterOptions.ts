import { setSorting } from 'src/actions';
import { Movie, MOVIES_INITIAL_REQUEST } from 'src/entities/movie';

export const SORTINGS = [
  {
    label: 'RELEASE DATE',
    value: 'release_date',
  },
  {
    label: 'RATING',
    value: 'vote_average',
  },
  {
    label: 'DURATION',
    value: 'runtime',
  },
];

export const getSorterInitialOption = () => SORTINGS.find((sorting) => sorting.value === MOVIES_INITIAL_REQUEST.sortBy);
