import React, { useContext, useEffect } from 'react';
import Header from '../components/header/Header';
import MainSection from '../components/body/MainSection';
import MyContext, { MyContextProvider } from '../services/myContext';
import ErrorBoundary from '../components/addition/ErrorBoundary';
import { checkToken } from '../services/getToken';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { closeDetails } from '../services/closeProductWindow';

function Posts() {
  const navigate = useNavigate();
  const { details } = useParams();
  const { page, limit, setProduct } = useContext(MyContext);
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <MyContextProvider>
      <ErrorBoundary>
        <div className="main-posts-container">
          <div
            onClick={() =>
              details && closeDetails(page, limit, navigate, setProduct)
            }
          >
            <Header />
            <MainSection />
          </div>
          <Outlet />
        </div>
      </ErrorBoundary>
    </MyContextProvider>
  );
}

export default Posts;
