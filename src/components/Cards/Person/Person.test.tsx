import { render, screen } from '@testing-library/react';
import { mockPeople } from '../../../Tests/Mock/mockPeople';
import Person from './Person';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Cards from '../Cards';
import Details from '../Details/Details';
import { userEvent } from '@testing-library/user-event';
import { PeopleContext } from '../../../Context/peopleContext';
import { getPersonData } from '../../../api/data';

/* afterEach(() => {
  vi.clearAllMocks();
});
 */
describe('Person component', () => {
  test('the card component renders the relevant card data', () => {
    const { name, height, mass, skin_color, hair_color, url } = mockPeople[0];
    const data = {
      name,
      height,
      mass,
      skin_color,
      hair_color,
      url,
    };
    render(<Person data={data} />);
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  test('clicking on a card opens a detailed card component', async () => {
    const click = userEvent.click;
    const mockData = mockPeople;
    render(
      <MemoryRouter>
        <PeopleContext.Provider value={mockData}>
          <Routes>
            <Route path="/" element={<Cards loader={false} limit={1} />}>
              <Route path=":id" element={<Details />} />
            </Route>
          </Routes>
        </PeopleContext.Provider>
      </MemoryRouter>
    );
    await click(screen.getByRole('link'));
    const hair_color = await screen.findByText('Hair color:');

    expect(hair_color).toBeInTheDocument();
  });

  test('clicking triggers an additional API call to fetch detailed information.', async () => {
    vi.mock('../../../api/data', () => ({
      getPersonData: vi.fn((id) => Promise.resolve(mockPeople[id - 1])),
    }));
    const click = userEvent.click;
    const mockData = mockPeople;
    render(
      <MemoryRouter>
        <PeopleContext.Provider value={mockData}>
          <Routes>
            <Route path="/" element={<Cards loader={false} limit={1} />}>
              <Route path=":id" element={<Details />} />
            </Route>
          </Routes>
        </PeopleContext.Provider>
      </MemoryRouter>
    );
    await click(screen.getByRole('link'));
    await screen.findByText('Hair color:');

    expect(getPersonData).toHaveBeenCalled();
  });
});
