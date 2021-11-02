import * as React from 'react';
import { Button } from 'src/components/ui/Button';
import { MovieForm } from '../MovieForm/MovieForm';
import { Modal } from '../ui/Modal';

export const AddMovieButton = () => {
    const [isOpened, setIsOpened] = React.useState(false);
    return <>
    {<Modal isOpened={isOpened} onClose={() => setIsOpened(false)}><MovieForm title='ADD MOVIE'/></Modal>}
    <Button width={177} height={46} type='transparent' onClick={() => {setIsOpened(true)}}>+ ADD MOVIE</Button>
    </>
}