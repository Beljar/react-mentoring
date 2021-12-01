import * as React from 'react';
import { emptyMovie } from 'src/entities/movie';
import IconSuccess from 'src/components/ui/Icons/IconCheckedCircle.svg';
import { apiDeleteMovie } from 'src/apiCall/apiCallMovies';
import { MovieForm } from '../MovieForm/MovieForm';
import { Button } from '../ui/Button';
import { MessageView } from '../ui/MessageView';
import { MovieDelete } from '../MovieDelete';
import { MovieEdit } from '../MovieEdit';

export const FILM_MENU_ITEMS = [
  {
    id: 1,
    name: 'edit',
    action: (movie, setModal) => {
      setModal(
        <MovieEdit
          movie={movie}
          onDone={() => {
            setModal(
              <MessageView
                icon={<IconSuccess />}
                title="CONGRATULATIONS!"
                text="The movie has been updated successfully"
              />,
            );
          }}
        />,
      );
    },
  },
  {
    id: 2,
    name: 'delete',
    action: (movie, setModal) => {
      setModal(<MovieDelete onDone={setModal()} id={movie.id} />);
    },
  },
];
