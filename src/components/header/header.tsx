import { useContext, useState } from 'react';
import NavigationButtons from './navigationButtons';
import handleSearch from '../../services/handleSearch';
import myContext from '../../services/myContext';

function Header() {
  const { setCharactersData, setIsLoading } = useContext(myContext);
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('term') || ''
  );

  return (
    <header>
      <input
        className={'search-input'}
        type="text"
        placeholder="Enter your search query"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch(setIsLoading, setCharactersData, inputValue);
          }
        }}
      />
      <NavigationButtons text={inputValue} />
    </header>
  );
}

export default Header;
