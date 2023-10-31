import React, { useContext, useEffect } from 'react';
import { SearchButtonProps } from '../../interfaces';
import myContext from '../../services/myContext';
import handleSearch from '../../services/handleSearch';

function NavigationButtons({ text }: SearchButtonProps) {
  const { setCharactersData, setIsLoading } = useContext(myContext);

  const hasMounted = React.useRef(false);
  useEffect(() => {
    if (!hasMounted.current) {
      handleSearch(setIsLoading, setCharactersData, text);
      hasMounted.current = true;
    }
  }, [setCharactersData, setIsLoading, text]);

  const getError = () => {
    setCharactersData(null);
  };

  return (
    <>
      <button
        className={'header-button'}
        onClick={() => handleSearch(setIsLoading, setCharactersData, text)}
      >
        Search
      </button>
      <button className={'header-button'} onClick={getError}>
        Get an error
      </button>
    </>
  );
}

export default NavigationButtons;
