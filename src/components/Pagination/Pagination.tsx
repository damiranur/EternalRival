import { IData } from '../../models/interface';
import Number from './Number/Number';
import './styled.css';

type Props = {
  data: IData | null;
};

function Pagination({ data }: Props) {
  const pagination = () => {
    if (data === null) return [];
    const { count, results } = data;
    const length = Math.ceil(count / results.length);
    const arrayPage = new Array(length);
    for (let i = 0; i < length; i++) {
      arrayPage[i] = i + 1;
    }
    return arrayPage;
  };

  return (
    <div className="pagination_container">
      {pagination().map((item: number, i) => (
        <Number value={item} key={i} />
      ))}
    </div>
  );
}

export default Pagination;
