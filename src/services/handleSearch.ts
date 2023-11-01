import { ProductData } from '../interfaces';
import React from 'react';
import { getProductsList } from './getProductList';

const handleSearch = async (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setProductsData: React.Dispatch<React.SetStateAction<ProductData[] | null>>,
  text: string
) => {
  setIsLoading(true);
  const newState: ProductData[] = await getProductsList(text);
  setIsLoading(false);
  setProductsData(newState);
  localStorage.setItem('term', text);
};

export default handleSearch;
