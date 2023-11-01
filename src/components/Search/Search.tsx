import { useState } from 'react';
import './styled.css';
import { getData } from '../../api/data';
import { IPerson } from '../../models/interface';

type Props = {
  setData: ([]: IPerson[]) => void;
  setLoader: (value: boolean) => void;
};

function Search({ setData, setLoader }: Props) {
  const [inputValue, setInputValue] = useState<string>('');
  const getNewData = (value: string) => {
    setLoader(true);
    getData(value)
      .then((res) => {
        localStorage.setItem('data', JSON.stringify(res.result));
        setData(res.result);
        setLoader(false);
      })
      .catch((e: Error) => {
        console.error('Error fetching data:', e.message);
      });
  };

  return (
    <div className="search_container">
      <form>
        <input
          className="input form-control me-sm-2"
          placeholder="Search"
          type="text"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={() => getNewData(inputValue)}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
