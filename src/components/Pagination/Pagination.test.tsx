import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';

describe('Pagination component', () => {
  test('the component updates URL query parameter when page changes', async () => {
    const switchPage = vi.fn();
    const switchLimit = vi.fn();
    const click = userEvent.click;

    render(
      <Pagination
        totalPage={82}
        limit={10}
        switchLimit={switchLimit}
        switchPage={switchPage}
      />
    );
    const pageButtons = screen.getAllByRole('button');

    for (let i = 0; i < pageButtons.length; i++) {
      click(pageButtons[i]);
      await waitFor(() => expect(switchPage).toHaveBeenCalledWith(i + 1));
    }
  });

  test('the component updates URL query parameter when limit changes', async () => {
    const switchPageMock = vi.fn();
    const switchLimitMock = vi.fn();

    render(
      <Pagination
        totalPage={82}
        limit={10}
        switchLimit={switchLimitMock}
        switchPage={switchPageMock}
      />
    );

    const limitSelect = screen.getByRole('combobox');
    fireEvent.change(limitSelect, { target: { value: '5' } });

    await waitFor(() => expect(switchLimitMock).toHaveBeenCalledWith(5));
  });
});
