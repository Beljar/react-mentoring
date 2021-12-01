import { connect } from 'react-redux';
import * as React from 'react';
import { initLoadMovies } from 'src/actions';
import { apiDeleteMovie } from 'src/apiCall/apiCallMovies';
import { Button } from '../ui/Button';
import { MessageView } from '../ui/MessageView';

type Props = {
  onDone: () => void;
  id: number;
  update?: () => void;
}

const MovieDelete: React.FC<Props> = ({ id, onDone, update }) => (
  <MessageView
    icon={undefined}
    title="Delete MOVIE"
    text="Are you sure you want to delete this movie?"
    button={
      <Button
        type="filled"
        width={180}
        height={57}
        onClick={() => {
          apiDeleteMovie(id).then(() => {
            update();
            onDone();
          });
        }}
      >
        CONFIRM
      </Button>
    }
  />
);

const mapDispatchToProps = (dispatch) => ({
  update: () => dispatch(initLoadMovies()),
});

export default connect(null, mapDispatchToProps)(MovieDelete);
