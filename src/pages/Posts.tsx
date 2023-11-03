import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import MainSection from '../components/body/MainSection';
import { ProductData, DataState } from '../interfaces';
import MyContext from '../services/myContext';
import ErrorBoundary from '../components/addition/ErrorBoundary';
import { setAnonymousToken } from '../services/getToken';
import getPagesCount from '../services/getPagesCount';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Posts() {
  useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const currentPage = searchParams.get('page');
  const currentProduct = searchParams.get('product');

  useEffect(() => {
    async function fetchData() {
      if (!localStorage.getItem('token')) {
        await setAnonymousToken();
      }
    }
    fetchData();
  }, []);

  const [page, setPage] = useState(currentPage || '1');
  const [product, setProduct] = useState(currentProduct);
  const [totalPages, setTotalPages] = useState(0);
  const [productsData, setProductsData] = useState<ProductData[] | null>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [limit, setLimit] = useState(10);
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('term') || ''
  );
  const state: DataState = {
    productsData,
    setProductsData,
    setIsLoading,
    isLoading,
    totalProducts,
    setTotalProducts,
    setLimit,
    limit,
    inputValue,
    setInputValue,
    totalPages,
    page,
    setPage,
    product,
    setProduct,
  };

  useEffect(() => {
    setTotalPages(getPagesCount(totalProducts, limit));
  }, [productsData]);

  return (
    <MyContext.Provider value={state}>
      <ErrorBoundary>
        <Outlet />
        <Header />
        <MainSection />
      </ErrorBoundary>
    </MyContext.Provider>
  );
}

export default Posts;
