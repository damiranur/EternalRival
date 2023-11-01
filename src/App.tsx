import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Show from './components/Show/Show';
import { IData, IPerson } from './models/interface';
import ErrorButton from './components/ErrorButton/ErrorButton';
import { getData } from './api/data';
import { Route, Routes } from 'react-router-dom';
import Pagination from './components/Pagination/Pagination';

/* const mocIData: IData = {
  count: 82,
  next: '',
  previous: '',
  results: [
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
    {
      name: '',
      height: '',
      skin_color: '',
      hair_color: '',
      mass: '',
    },
  ],
}; */

function App() {
  const [apiData, setApiData] = useState<IData | null>(null);
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
        setApiData(res);
        setData(res.results);
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
  console.log(data);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="container">
            <Search setData={updateData} setLoader={updateLoader} />
            <ErrorButton />
            <Show data={data} loader={loader} />
            <Pagination data={apiData} />
          </div>
        }
      />
      {/* <Search setData={updateData} setLoader={updateLoader} /> */}
      {/* <ErrorButton /> */}
      {/* <Show data={data} loader={loader} /> */}
    </Routes>
  );
}

export default App;
