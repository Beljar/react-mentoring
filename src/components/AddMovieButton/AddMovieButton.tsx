import * as React from 'react';
import { connect } from 'react-redux';
import { initLoadMovies } from 'src/actions';
import { apiPostMovie } from 'src/apiCall/apiCallMovies/apiPostMovie';
import { Button } from 'src/components/ui/Button';
import IconSuccess from 'src/components/ui/Icons/IconCheckedCircle.svg';
import { Movie } from 'src/entities/movie';
import { MovieForm } from '../MovieForm/MovieForm';
import { MessageView } from '../ui/MessageView';
import { Modal } from '../ui/Modal';

type Props = {
  update?: () => void;
};

export const AddMovieButton: React.FC<Props> = ({ update }) => {
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
        apiPostMovie(movie).then(() => {
          update?.();
          setModal(success);
        });
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

const mapDispatchToProps = (dispatch) => ({
  update: () => dispatch(initLoadMovies()),
});

export default connect(null, mapDispatchToProps)(AddMovieButton);
