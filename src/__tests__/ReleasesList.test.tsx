import { render } from '@testing-library/react';
import ReleasesList from '../components/ReleasesList';
import { MemoryRouter } from 'react-router-dom';
import AppContextProvider from '../context';
import { Release } from '../types';

describe('Tests for the Releases List component', () => {
  test('Verify that the component renders the specified number of cards', () => {
    const releases: Release[] = [
      {
        id: 1,
        title: 'Mac Demarco',
        cover_image: 'release.jpg',
        year: '1995',
        style: ['Indie-Rock', 'Lo-fi'],
        genre: ['Rock'],
      },
      {
        id: 2,
        title: 'Mac Demarco',
        cover_image: 'release.jpg',
        year: '1998',
        style: ['Indie-Rock'],
        genre: ['Rock'],
      },
    ];

    const { queryAllByRole } = render(
      <AppContextProvider mockData={{ releases: releases }}>
        <MemoryRouter initialEntries={['/']}>
          <ReleasesList />
        </MemoryRouter>
      </AppContextProvider>
    );

    const cards = queryAllByRole('link');
    expect(cards.length).toBe(releases.length);
  });

  test('Check that an appropriate message is displayed if no cards are present', () => {
    const releases: Release[] = [];
    const { queryAllByRole, queryByText } = render(
      <AppContextProvider mockData={{ releases: releases }}>
        <MemoryRouter initialEntries={['/']}>
          <ReleasesList />
        </MemoryRouter>
      </AppContextProvider>
    );

    const links = queryAllByRole('link');
    expect(links.length).toBe(releases.length);

    const message = queryByText(/Not Found/i);
    expect(message).not.toBeInTheDocument();
  });
});
