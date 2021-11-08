import { setSorting } from 'src/actions';
import { Movie } from 'src/entities/movie';

export const SORTINGS = [
  {
    label: 'RELEASE DATE',
    value: '1',
    rule: (dispatch) => dispatch(setSorting('release_date')),
  },
  {
    label: 'RATING',
    value: '2',
    rule: (dispatch) => dispatch(setSorting('vote_average')),
  },
  {
    label: 'DURATION',
    value: '3',
    rule: (dispatch) => dispatch(setSorting('runtime')),
  },
];
