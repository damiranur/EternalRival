import { render, screen } from '@testing-library/react';
import { PeopleContext } from '../../Context/peopleContext';
import Cards from './Cards';
import { mockPeople } from '../../Tests/Mock/mockPeople';
import { BrowserRouter } from 'react-router-dom';

describe('Cards component', () => {
  test('renders a limited number of cards', () => {
    const limit = 3;

    render(
      <BrowserRouter>
        <PeopleContext.Provider value={mockPeople}>
          <Cards limit={limit} loader={false} />
        </PeopleContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getAllByRole('link')).toHaveLength(limit);
  });

  test('the render "Not Found" if the no cards', () => {
    render(
      <BrowserRouter>
        <PeopleContext.Provider value={[]}>
          <Cards limit={5} loader={false} />
        </PeopleContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText('Not found')).toBeInTheDocument();
  });
});
