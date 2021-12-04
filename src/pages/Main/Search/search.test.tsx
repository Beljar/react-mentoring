import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { Search } from './Search';

let path;

jest.mock('react-router', () => ({
  ...(jest.requireActual('react-router') as object),
  useLocation: () => ({
    pathname: 'localhost:3000/search',
  }),
  useNavigate: () => (val) => {
    path = val;
  },
}));

const PLACEHOLDER = 'What do you want to watch?';

const SEARCH_STRING = 'transformers 7';

const EXPECTED_PATH = { pathname: '/search/transformers 7', search: 'searchBy=title' };

describe('Search component', () => {
  it('renders snapshot', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders input field', () => {
    const { getByRole } = render(<Search />);
    expect(getByRole('textbox')).toBeInTheDocument();
  });
  it('rendes button', () => {
    const { getByRole } = render(<Search />);
    expect(getByRole('button')).toBeInTheDocument();
  });
  it('renders placeholder', () => {
    const { getByPlaceholderText } = render(<Search />);
    expect(getByPlaceholderText(PLACEHOLDER)).toBeInTheDocument();
  });
  it('displays entered text', async () => {
    const { getByRole, queryByDisplayValue } = render(<Search />);
    const inputEl = getByRole('textbox');
    await userEvent.type(inputEl, SEARCH_STRING);
    expect(queryByDisplayValue(SEARCH_STRING)).toBeInTheDocument();
  });
  it('processes user input', async () => {
    const { getByRole } = render(<Search />);
    const inputEl = getByRole('textbox');
    const buttonEl = getByRole('button');
    await userEvent.type(inputEl, SEARCH_STRING);
    await userEvent.click(buttonEl);
    expect(path).toEqual(EXPECTED_PATH);
  });
});
