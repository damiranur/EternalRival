import { Route, Routes } from 'react-router-dom';
import Search from './components/Search/Search';
import ErrorButton from './components/ErrorButton/ErrorButton';
import Pagination from './components/Pagination/Pagination';
import Cards from './components/Cards/Cards';
import { Context } from './components/Context/Context';

function App() {
  return (
    <Context>
      <Search />
      <ErrorButton />
      <Routes>
        <Route path="/people" element={<Cards />} />
      </Routes>
      <Pagination />
    </Context>
  );
}

export default App;
