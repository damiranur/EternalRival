import { useRef } from 'react';
import './header.css';

interface PropsType {
  defaultValue: string;
  searchItem: (value: string) => void;
}

export default function Header(props: PropsType) {
  const inputRef = useRef<HTMLInputElement>(null);

  const searchItemHandler = () => {
    props.searchItem(inputRef.current!.value);
  }

  return (
    <header className="header">
      <h2>Pokemon</h2>
      <div className="text-field-container">
        <span className="text-field">
          <input
            ref={inputRef}
            defaultValue={props.defaultValue}
            id="search-input"
            type="text"
            required
          />
          <label htmlFor="search-input">Search</label>
        </span>
        <button
          className="button-icon-search"
          onClick={searchItemHandler}
        >
          <img src="./search-icon.svg" alt="search icon" />
        </button>
      </div>
    </header>
  );
}
