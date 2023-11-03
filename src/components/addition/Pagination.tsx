import React, { useContext, useEffect, useState } from 'react';
import handleSearch from '../../services/handleSearch';
import { getPagesArray } from '../../services/getPagesCount';
import MyContext from '../../services/myContext';
import { useNavigate } from 'react-router-dom';

function Pagination() {
  const navigate = useNavigate();

  const {
    setIsLoading,
    setProductsData,
    inputValue,
    limit,
    setTotalProducts,
    totalPages,
    page,
    setPage,
    product,
  } = useContext(MyContext);

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!isInitialLoad) {
      handleSearch({
        setIsLoading,
        setProductsData,
        inputValue,
        limit,
        setTotalProducts,
        page,
      });
      product
        ? navigate(`?page=${page}&product=${product}`)
        : navigate(`?page=${page}`);
    }
  }, [page, isInitialLoad]);

  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  const pagesArray: string[] = getPagesArray(totalPages);
  return (
    <div className="pagination-pages">
      {pagesArray.map((p: string) => {
        return (
          <div
            onClick={() => {
              setPage(p);
            }}
            className={
              page === p
                ? 'pagination-page pagination-page-current'
                : 'pagination-page'
            }
            key={p}
          >
            {p}
          </div>
        );
      })}
    </div>
  );
}

export default Pagination;
