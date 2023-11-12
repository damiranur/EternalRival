import { useContext } from 'react';
import { SearchContext } from '../../contexts';
import { Outlet } from 'react-router-dom';
import { CardItem, Loader, Pagination } from '..';
import './ListView.css';

export const ListView = () => {
  const context = useContext(SearchContext);

  return (
    <>
      {context.loading && <Loader />}
      <main className='main'>
        <div className='list-item'>
          {context.items.map((i) => {
            return <CardItem key={i.name + i.url} item={i} />
          })}
          {
            context.items.length !== 0 && (
              <Pagination />
            )
          }
        </div>
        <Outlet />
      </main>
    </>
  );
}
