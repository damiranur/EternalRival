import Search from './Search/Search';
import ErrorButton from './ErrorButton/ErrorButton';
import CardsLayout from './CardsLayout';
import { useLoaderData } from 'react-router-dom';
import { IData } from '../models/interface';
import Pagination from './Pagination/Pagination';

function MainLayout() {
  const data = useLoaderData() as IData;
  return (
    <div className="container">
      <Search />
      <ErrorButton />
      <CardsLayout />
      <Pagination data={data} />
    </div>
  );
}

export default MainLayout;
