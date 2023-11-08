import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from '../../components/body/CardList';
import MyContext from '../../services/myContext';
import { BrowserRouter } from 'react-router-dom';

describe('CardList', () => {
  it('renders the correct number of product cards', () => {
    const mockProductsData = [
      {
        name: {
          en: 'Product 1',
        },
        masterVariant: {
          images: [
            {
              url: 'some url',
            },
            {
              url: 'some url',
            },
          ],
          prices: [
            {
              value: {
                centAmount: '3',
              },
            },
          ],
        },
        description: {
          en: 'product description',
        },
      },
      {
        name: {
          en: 'Product 2',
        },
        masterVariant: {
          images: [
            {
              url: 'some url',
            },
            {
              url: 'some url',
            },
          ],
          prices: [
            {
              value: {
                centAmount: '3',
              },
            },
          ],
        },
        description: {
          en: 'product description',
        },
      },
    ];

    // Mock the context value for testing
    const contextValue = {
      productsData: mockProductsData,
      isLoading: false,
      limit: '10',
      page: '1',
      setIsLoading: () => {},
    };

    // Render the CardList component with the mock context value
    render(
      <MyContext.Provider value={contextValue}>
        <BrowserRouter>
          <CardList />
        </BrowserRouter>
      </MyContext.Provider>
    );

    // Query for the product cards within the rendered component
    const productCards = screen.getAllByTestId('product-card');
    console.log(productCards.length);

    expect(productCards.length).toBe(mockProductsData.length);
  });
});
