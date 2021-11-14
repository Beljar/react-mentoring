import * as React from 'react';
import IconSuccess from 'src/components/ui/Icons/IconCheckedCircle.svg';
import { MovieForm } from '../MovieForm/MovieForm';
import { Button } from '../ui/Button';
import { MessageView } from '../ui/MessageView';
import { Modal } from '../ui/Modal';

export const FILM_MENU_ITEMS = [
  {
    id: 1,
    name: 'edit',
    action: (movie, setModal) => {
      setModal(
        <MovieForm
          movie={movie}
          title="EDIT MOVIE"
          onSubmit={() => {
            setModal(
              <MessageView
                icon={<IconSuccess />}
                title="CONGRATULATIONS!"
                text="The movie has been updated successfully"
              />,
            );
            window.scrollTo(0, 0);
          }}
        />,
      );
      window.scrollTo(0, 0);
    },
  },
  {
    id: 2,
    name: 'delete',
    action: (movie, setModal) => {
      setModal(
        <MessageView
          icon={undefined}
          title="Delete MOVIE"
          text="Are you sure you want to delete this movie?"
          button={
            <Button type="filled" width={180} height={57} onClick={() => setModal()}>
              CONFIRM
            </Button>
          }
        />,
      );
      window.scrollTo(0, 0);
    },
  },
];
