import React, { useEffect, useState } from 'react';
import Header from '../components/header/header';
import MainSection from '../components/body/mainSection';
import { ProductData, DataState } from '../interfaces';
import MyContext from '../services/myContext';
import ErrorBoundary from '../components/addition/errorBoundary';
import { setAnonymousToken } from '../services/getToken';

function Posts() {
  useEffect(() => {
    async function fetchData() {
      if (!localStorage.getItem('token')) {
        await setAnonymousToken();
      }
    }

    fetchData();
  }, []);

  const [productsData, setProductsData] = useState<ProductData[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const state: DataState = {
    productsData: productsData,
    setCharactersData: setProductsData,
    setIsLoading,
    isLoading,
  };

  return (
    <MyContext.Provider value={state}>
      <ErrorBoundary>
        <Header />
        <MainSection />
      </ErrorBoundary>
    </MyContext.Provider>
  );
}

export default Posts;
