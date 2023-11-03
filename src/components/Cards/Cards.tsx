import './styled.css';
import Person from './Person/Person';
import { DataContext } from '../Context/Context';
import { useContext, useEffect } from 'react';
import { getData } from '../../api/data';

function Cards() {
  const { loader, data, setLoader, setData } = useContext(DataContext);

  useEffect(() => {
    setLoader(true);
    const localStorageData = localStorage.getItem('data');
    if (localStorageData) {
      const data = JSON.parse(localStorageData);
      setTimeout(() => {
        setData(data);
        setLoader(false);
      }, 1000);
      return;
    }
    getData(1)
      .then((res) => {
        setData(res);
        localStorage.setItem('data', JSON.stringify(res));
        setLoader(false);
      })
      .catch((e: Error) => console.error('Error fetching data:', e.message));
  }, [setData, setLoader]);

  console.log('Card: ', data);
  return (
    <div className="show_container alert alert-dismissible alert-warning">
      {loader ? (
        <p>Loading...</p>
      ) : data?.results.length ? (
        data?.results.map((person, i) => <Person data={person} key={i} />)
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default Cards;
