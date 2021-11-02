import * as React from 'react';
import { MovieForm } from '../MovieForm/MovieForm';
import { Modal } from '../ui/Modal';

export const FILM_MENU_ITEMS = [
    {
        id: 1,
        name: 'edit' ,
        action: (movie, setModal) => {
            setModal(<Modal isOpened={true} onClose={() => setModal(null)}><MovieForm movie={movie}/></Modal>)
            window.scrollTo(0, 0)
        },
    },
    {
        id: 2,
        name: 'delete' ,
        action: () => {},
    }
]