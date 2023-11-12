import { useContext, useRef } from 'react';
import './styled.css';
import { SearchContext } from '../../Context/searchContext';

type Props = {
  click: (value: string) => void;
};

function Search({ click }: Props) {
  const request = useContext(SearchContext);
  const text = useRef<HTMLInputElement>(null);

  const clickButtonSearch = () => {
    const value = text.current?.value || '';
    click(value.trim());
  };

  return (
    <div className="search_container">
      <form>
        <input
          ref={text}
          className="input form-control me-sm-2"
          placeholder="Search"
          type="text"
          defaultValue={request}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={clickButtonSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
