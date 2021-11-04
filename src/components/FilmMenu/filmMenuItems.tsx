import * as React from 'react';
import { MovieForm } from '../MovieForm/MovieForm';
import { Button } from '../ui/Button';
import { MessageView } from '../ui/MessageView';
import { emptyMovie } from 'src/entities/film';

import IconSuccess from 'src/components/ui/Icons/IconCheckedCircle.svg';


export const FILM_MENU_ITEMS = [
    {
        id: 1,
        name: 'edit',
        action: (movie, setModal) => {
            setModal(<MovieForm movie={{...emptyMovie, ...movie}} title='EDIT MOVIE' onSubmit={() => {
                setModal(<MessageView
                icon={<IconSuccess />}
                title='CONGRATULATIONS!'
                text={`The movie has been updated successfully`} />);
                window.scrollTo(0, 0)
            }
            } />)
            window.scrollTo(0, 0)
        },
    },
    {
        id: 2,
        name: 'delete',
        action: (movie, setModal) => {
            setModal(<MessageView icon={undefined} title={'Delete MOVIE'} text={'Are you sure you want to delete this movie?'} button={<Button type={'filled'} width={180} height={57} onClick={() => setModal()}>CONFIRM</Button>} />)
            window.scrollTo(0, 0)
        },
    }
]