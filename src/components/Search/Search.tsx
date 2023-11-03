import { useState } from 'react';
import './styled.css';
import { getData } from '../../api/data';
import { Link } from 'react-router-dom';

/* type Props = {
  setData: ([]: IPerson[]) => void;
  setLoader: (value: boolean) => void;
}; */

function Search() {
  const [inputValue, setInputValue] = useState<string>('');
  const getNewData = (value: string) => {
    setLoader(true);
    getData(value)
      .then((res) => {
        localStorage.setItem('results', JSON.stringify(res.results));
        setData(res.results);
        setLoader(false);
      })
      .catch((e: Error) => console.error('Error fetching data:', e.message));
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
        <Link to={`/people/?search=${inputValue.toLowerCase()}`}>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => getNewData(inputValue)}
          >
            Search
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Search;
