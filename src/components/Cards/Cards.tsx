import './styled.css';
import Person from './Person/Person';
import { IPerson } from '../../models/interface';
import { Link, Outlet } from 'react-router-dom';

type Props = {
  loader: boolean;
  limit: number;
  data: IPerson[];
};

function Cards({ loader, limit, data }: Props) {
  data.length = limit;

  return (
    <>
      <div className="show_container alert alert-dismissible alert-warning">
        {loader ? (
          <p key="loading">Loading...</p>
        ) : data.length ? (
          data.map((person) => {
            const arrayFromUrl = person.url.split('/').filter((el) => el != '');
            const id = arrayFromUrl[arrayFromUrl.length - 1];
            return (
              <Link to={id + location.search} key={id}>
                <Person data={person} key={person.name} />
              </Link>
            );
          })
        ) : (
          <p key="not_found">Not found</p>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Cards;
