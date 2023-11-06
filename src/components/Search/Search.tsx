import { useRef } from 'react';
import './styled.css';

type Props = {
  request: string;
  click: (value: string) => void;
};

function Search({ request, click }: Props) {
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
