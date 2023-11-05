import { useEffect, useState } from 'react';
import Number from './Number/Number';
import './styled.css';
import { IData } from '../../models/interface';

function Pagination({ data }: { data: IData }) {
  const [pagination, setPagination] = useState<number[]>([]);

  useEffect(() => {
    if (data === null) return setPagination([]);
    const { count, results } = data;
    const length = Math.ceil(count / results.length);
    const arrayPage: number[] = new Array(length);
    for (let i = 0; i < length; i++) {
      arrayPage[i] = i + 1;
    }
    setPagination([...arrayPage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pagination_container">
      {pagination.map((item: number, i) => (
        <Number value={item} key={i} />
      ))}
    </div>
  );
}

export default Pagination;
