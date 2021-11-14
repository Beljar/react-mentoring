import * as React from 'react';
import { apiPostMovie } from 'src/apiCall/apiCallMovies/apiPostMovie';
import { Button } from 'src/components/ui/Button';
import IconSuccess from 'src/components/ui/Icons/IconCheckedCircle.svg';
import { Movie } from 'src/entities/movie';
import { MovieForm } from '../MovieForm/MovieForm';
import { MessageView } from '../ui/MessageView';
import { Modal } from '../ui/Modal';

export const AddMovieButton = () => {
  const [modal, setModal] = React.useState<React.ReactElement>();
  const success = (
    <MessageView
      icon={<IconSuccess />}
      title="CONGRATULATIONS!"
      text={`The movie has been added to \n database successfully`}
    />
  );
  const form = (
    <MovieForm
      title="ADD MOVIE"
      onSubmit={(movie: Movie) => {
        apiPostMovie(movie);
        setModal(success);
      }}
    />
  );
  return (
    <>
      <Modal isOpened={!!modal} onClose={() => setModal(null)}>
        {modal}
      </Modal>
      <Button
        width={177}
        height={46}
        type="transparent"
        onClick={() => {
          setModal(form);
        }}
      >
        + ADD MOVIE
      </Button>
    </>
  );
};
