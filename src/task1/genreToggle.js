import * as React from 'react';

const e = React.createElement;

export class GenreToggle extends React.PureComponent {
    state = {}
    setGenre(genre) {
        this.setState({genre});
    }
    render() {
        const allLink = e('a', { href: '#', onClick: () => this.setGenre('All') }, 'All');
        const docLink = e('a', { href: '#', onClick: () => this.setGenre('Documentary') }, 'Documentary');
        const comLink = e('a', { href: '#', onClick: () => this.setGenre('Comedy') }, 'Comedy');
        const horLink = e('a', { href: '#', onClick: () => this.setGenre('Horror') }, 'Horror');
        const crmLink = e('a', { href: '#', onClick: () => this.setGenre('Crime') }, 'Crime');
        const menu = e('ul', null, 
        e('li', null, allLink),
        e('li', null, docLink),
        e('li', null, comLink),
        e('li', null, horLink),
        e('li', null, crmLink),
        );
        const {genre} = this.state;
        return e('div', null, menu, genre ? `u've selected ${genre}` : null)
    }
}