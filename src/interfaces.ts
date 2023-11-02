import React, { ReactNode } from 'react';

export interface SearchButtonProps {
  inputValue: string;
  limit: number;
}

export interface ProductData {
  name: {
    en: string;
  };
  masterVariant: {
    images: [
      {
        url: string;
      },
    ];
    prices: [
      {
        value: {
          centAmount: number;
        };
      },
    ];
  };
}
export interface ProductCardProps {
  data: ProductData | null;
  setSelectedItemName: React.Dispatch<React.SetStateAction<string>>;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ImageComponentProps {
  src: string;
  alt: string;
}

export interface DataState {
  productsData: ProductData[] | null;
  setProductsData: React.Dispatch<React.SetStateAction<ProductData[] | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  totalProducts: number;
  setTotalProducts: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  totalPages: number;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export interface ResponseError {
  response: {
    data: {
      statusCode: number;
    };
  };
}

export interface AxiosResponse {
  data: {
    access_token: string;
  };
}

export interface SearchParams {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProductsData: React.Dispatch<React.SetStateAction<ProductData[] | null>>;
  inputValue: string;
  limit: number;
  setTotalProducts: React.Dispatch<React.SetStateAction<number>>;
  page?: string;
}
