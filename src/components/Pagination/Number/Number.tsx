import { Link } from 'react-router-dom';
import './styled.css';

type Props = {
  value: number;
  click: (vlaue: number) => void;
};
function Number({ value, click }: Props) {
  return (
    <Link to={`/people/?page=${value}`}>
      <div onClick={() => click(value)} className="number_container">
        <p>{value}</p>
      </div>
    </Link>
  );
}

export default Number;
