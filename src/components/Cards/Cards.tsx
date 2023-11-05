import './styled.css';
import Person from './Person/Person';
import { DataContext } from '../Context/Context';
import { useContext } from 'react';
// import { getData } from '../../api/data';
import { useLoaderData } from 'react-router-dom';
import { IData } from '../../models/interface';

function Cards() {
  const apiData = useLoaderData() as IData;
  const { loader } = useContext(DataContext);

  /*   useEffect(() => {
    setLoader(true);
    const localStorageData = localStorage.getItem('data');
    if (localStorageData) {
      const apiData = JSON.parse(localStorageData);
      setTimeout(() => {
        setData(apiData);
        setLoader(false);
      }, 1000);
      return;
    }
    setLoader(false);
  }, [setLoader]); */

  return (
    <div className="show_container alert alert-dismissible alert-warning">
      {loader ? (
        <p key="loading">Loading...</p>
      ) : apiData.results.length ? (
        apiData.results.map((person) => (
          <Person data={person} key={person.name} />
        ))
      ) : (
        <p key="not_found">Not found</p>
      )}
    </div>
  );
}

export default Cards;
