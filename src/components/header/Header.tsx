import { useContext } from 'react';
import NavigationButtons from './NavigationButtons';
import handleSearch from '../../services/handleSearch';
import myContext from '../../services/myContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const {
    setProductsData,
    setIsLoading,
    setTotalProducts,
    setLimit,
    limit,
    inputValue,
    setInputValue,
    setPage,
  } = useContext(myContext);

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
            handleSearch({
              setIsLoading,
              setProductsData,
              inputValue,
              limit,
              setTotalProducts,
            });
            setPage('1');
            navigate(`?page=1`);
          }
        }}
      />
      <select
        className={'search-input number-input'}
        onChange={(event) => {
          setLimit(+event.target.value);
        }}
        defaultValue="default"
      >
        <option disabled={true} value="default">
          Cards per page
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <NavigationButtons inputValue={inputValue} limit={limit} />
    </header>
  );
}

export default Header;
