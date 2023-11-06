import { ChangeEvent, useEffect, useState } from 'react';
import './styled.css';
import LimitSwitcher from '../LimitSwitcher/LimitSwitcher';
import PageNumber from './Number/Number';

type Props = {
  totalPage: number;
  currentPage: number;
  limit: number;
  switchPage: (value: number) => void;
  switchLimit: (value: number) => void;
};

function Pagination({
  totalPage,
  currentPage,
  limit,
  switchLimit,
  switchPage,
}: Props) {
  const [pages, setPages] = useState<number[]>([]);
  const countPage = Math.ceil(totalPage / limit);

  useEffect(() => {
    const page = new Array(countPage);
    console.log(page);
    for (let i = 1; i <= countPage; i++) {
      page.push(i);
    }
  }, [countPage]);

  const changeLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    const limit = Number(event.target.value);
    switchLimit(limit);
    const page = new Array(countPage);
    for (const i in page) {
      page.push(i + 1);
    }
    setPages(page);
  };
  /*   useEffect(() => {
    if (data === null) return setPagination([]);
    const { count, results } = data;
    const arrayPage: number[] = new Array(length);
    for (let i = 0; i < length; i++) {
      arrayPage[i] = i + 1;
    }
    setPagination([...arrayPage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); */

  return (
    <div className="pagination_container">
      <LimitSwitcher limit={limit} switcher={changeLimit} />
      {pages.map((item: number, i) => (
        <PageNumber
          value={item}
          key={i}
          click={switchPage}
          countPages={currentPage}
        />
      ))}
    </div>
  );
}

export default Pagination;
