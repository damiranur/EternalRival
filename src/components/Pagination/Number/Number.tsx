import { Link } from 'react-router-dom';
import './styled.css';

type Props = {
  value: number;
};

function Number({ value }: Props) {
  return (
    <Link to={`page=${value}`}>
      <div className="number_container">
        <p>{value}</p>
      </div>
    </Link>
  );
}

export default Number;
