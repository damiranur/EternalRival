import React, { ReactNode } from 'react';

export interface SearchButtonProps {
  text: string;
}

export interface ProductData {
  name: {
    en: string;
  };
  species: string;
  status: string;
  location: {
    name: string;
  };
  episode: string[];
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
    gender: string;
  };
}

export interface ProductCardProps {
  data: ProductData | null;
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
  setCharactersData: React.Dispatch<React.SetStateAction<ProductData[] | null>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
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
