import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Show from './components/Show/Show';
import { IPerson } from './models/interface';
import ErrorButton from './components/ErrorButton/ErrorButton';
import { getData } from './api/data';

function App() {
  const [data, setData] = useState<IPerson[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    const localStorageData = localStorage.getItem('data');
    if (localStorageData) {
      const data = JSON.parse(localStorageData);
      setTimeout(() => {
        setData(data);
        setLoader(false);
      }, 1000);
    }
    getData(1)
      .then((res) => {
        setData(res);
        setLoader(false);
      })
      .catch((e: Error) => console.error('Error fetching data:', e.message));
  }, []);

  const updateData = (newData: IPerson[]) => {
    setData(newData);
  };

  const updateLoader = (value: boolean) => {
    setLoader(value);
  };

  return (
    <div className="container">
      <Search setData={updateData} setLoader={updateLoader} />
      <ErrorButton />
      <Show data={data} loader={loader} />
    </div>
  );
}

export default App;
