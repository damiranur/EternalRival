import { DataState, ProductData } from '../../interfaces';

export const mockData: ProductData = {
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
          centAmount: 3,
        },
      },
    ],
  },
  description: {
    en: 'product description',
  },
};

export const contextValue: DataState = {
  productsData: [],
  setProductsData: () => {},
  isLoading: false,
  limit: '10',
  page: '1',
  setIsLoading: () => {},
  inputValue: '',
  setInputValue: () => {},
  setLimit: () => {},
  totalPages: 0,
  setTotalProducts: () => {},
  setPage: () => {},
  product: '',
  setProduct: () => {},
  totalProducts: 0,
};
