import Search from './Search/Search';
import ErrorButton from './ErrorButton/ErrorButton';
import Pagination from './Pagination/Pagination';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import usePeople from '../peopleHook/usePeople';
import Cards from './Cards/Cards';

const REQ_PARAM = 'page';
const PAGE = 1;
const LIMIT = 10;

function MainLayout() {
  const [request, setRequest] = useState(localStorage.getItem('request') || '');
  const [limit, setLimit] = useState(LIMIT);
  const [currentPage, setCurrentPage] = useState(PAGE);
  const [params, setParams] = useSearchParams();
  const data = {
    request,
    currentPage,
    limit,
  };
  const [loader, apiData, maxResult] = usePeople({ data });
  const firstPage = () => {
    setCurrentPage(PAGE);
    params.delete(REQ_PARAM);
    setParams(params);
  };

  const changePage = (value: number) => {
    setCurrentPage(value);
    setParams({ [REQ_PARAM]: String(value) });
  };

  const changeLimit = (value: number) => {
    setLimit(value);
    firstPage();
  };

  const clickSearch = (value: string) => {
    setRequest(value);
    firstPage();
  };

  return (
    <div className="container">
      <Search request={request} click={clickSearch} />
      <ErrorButton />
      <Cards limit={limit} data={apiData} loader={loader} />
      <Pagination
        totalPage={maxResult}
        limit={limit}
        switchLimit={changeLimit}
        switchPage={changePage}
      />
    </div>
  );
}

export default MainLayout;
