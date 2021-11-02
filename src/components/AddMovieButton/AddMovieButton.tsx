import * as React from 'react';
import { Button } from 'src/components/ui/Button';
import { MovieForm } from '../MovieForm/MovieForm';
import { MessageView } from '../ui/MessageView';
import { Modal } from '../ui/Modal';

import IconSuccess from 'src/components/ui/Icons/IconCheckedCircle.svg';

export const AddMovieButton = () => {
    const [modal, setModal] = React.useState<React.ReactElement>();
    const success = <MessageView icon={<IconSuccess />} title='CONGRATULATIONS!' text={`The movie has been added to \n database successfully`}/>
    const form = <MovieForm title='ADD MOVIE' onSubmit={() => {
        setModal(success);
        window.scroll(0,0);
    }}/>
    return <>
    {<Modal isOpened={!!modal} onClose={() => setModal(null)}>{modal}</Modal>}
    <Button width={177} height={46} type='transparent' onClick={() => {setModal(form)}}>+ ADD MOVIE</Button>
    </>
}
