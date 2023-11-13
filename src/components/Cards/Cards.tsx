import './styled.css';
import Person from './Person/Person';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { PeopleContext } from '../../Context/peopleContext';

type Props = {
  loader: boolean;
  limit: number;
};

function Cards({ loader, limit }: Props) {
  const peopleData = useContext(PeopleContext);
  if (peopleData.length) peopleData.length = limit;
  console.log(peopleData);

  return (
    <>
      <div className="show_container alert alert-dismissible alert-warning">
        {loader ? (
          <p key="loading">Loading...</p>
        ) : peopleData.length ? (
          peopleData.map((person) => {
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
