import './styled.css';
import Person from './Person/Person';
import { IPerson } from '../../models/interface';

type Props = {
  loader: boolean;
  limit: number;
  data: IPerson[];
};

function Cards({ loader, limit, data }: Props) {
  data.length = limit;

  return (
    <div className="show_container alert alert-dismissible alert-warning">
      {loader ? (
        <p key="loading">Loading...</p>
      ) : data.length ? (
        data.map((person) => <Person data={person} key={person.name} />)
      ) : (
        <p key="not_found">Not found</p>
      )}
    </div>
  );
}

export default Cards;
