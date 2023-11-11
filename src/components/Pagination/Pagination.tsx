import { ChangeEvent, useEffect, useState } from 'react';
import './styled.css';
import LimitSwitcher from '../LimitSwitcher/LimitSwitcher';
import PageNumber from './Number/Number';

type Props = {
  totalPage: number;
  limit: number;
  switchPage: (value: number) => void;
  switchLimit: (value: number) => void;
};

function Pagination({ totalPage, limit, switchLimit, switchPage }: Props) {
  const [pages, setPages] = useState<number[]>([]);
  const countPage = Math.ceil(totalPage / limit);

  useEffect(() => {
    const page = new Array(countPage);
    for (let i = 1; i <= countPage; i++) {
      page.push(i);
    }
    setPages(page);
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

  const switchedPage = (value: number) => {
    switchPage(value);
  };

  return (
    <div className="pagination_container">
      <LimitSwitcher limit={limit} switcher={changeLimit} />
      {pages.map((item: number, i) => (
        <PageNumber value={item} key={i} click={switchedPage} />
      ))}
    </div>
  );
}

export default Pagination;
