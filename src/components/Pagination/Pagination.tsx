import { useContext, useEffect, useState } from 'react';
import { getData } from '../../api/data';
import Number from './Number/Number';
import './styled.css';
import { DataContext } from '../Context/Context';

function Pagination() {
  const { setData, setLoader } = useContext(DataContext);
  const [pagination, setPagination] = useState<number[]>([]);

  useEffect(() => {
    getData(1)
      .then((res) => {
        const data = res;
        if (data === null) return setPagination([]);
        const { count, results } = data;
        const length = Math.ceil(count / results.length);
        const arrayPage: number[] = new Array(length);
        for (let i = 0; i < length; i++) {
          arrayPage[i] = i + 1;
        }
        setPagination([...arrayPage]);
      })
      .catch((e: Error) => console.error('Error fetching data:', e.message));
  }, []);

  const switcherPage = (value: number) => {
    setLoader(true);
    getData(value)
      .then((res) => {
        localStorage.setItem('data', JSON.stringify(res));
        setData(res);
        setLoader(false);
      })
      .catch((e: Error) => console.error('Error fetching data:', e.message));
  };

  const clickMe = (value: number) => {
    switcherPage(value);
  };

  return (
    <div className="pagination_container">
      {pagination.map((item: number, i) => (
        <Number value={item} key={i} click={clickMe} />
      ))}
    </div>
  );
}

export default Pagination;
