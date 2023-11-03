import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import MyContext from '../../services/myContext';
import { ProductData } from '../../interfaces';
import Pagination from '../addition/Pagination';
import { Link } from 'react-router-dom';

function MainSection() {
  const { productsData, isLoading, page } = useContext(MyContext);
  const isCardsExist = productsData!.length !== 0;

  let content;
  if (isLoading) {
    content = <img src="/src/assets/loading.gif" alt="loader"></img>;
  } else if (isCardsExist) {
    content = productsData!.map((product: ProductData, index: number) => (
      <Link
        key={product.name.en}
        to={`details/?page=${page}&product=${product.name.en}`}
      >
        <ProductCard key={index} data={product} />
      </Link>
    ));
  } else {
    content = <h1>Oops! Character does not found</h1>;
  }

  return (
    <main>
      <div className="main">{content}</div>
      <Pagination />
    </main>
  );
}

export default MainSection;
