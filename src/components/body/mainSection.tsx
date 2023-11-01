import React, { useContext } from 'react';
import ProductCard from './productCard';
import MyContext from '../../services/myContext';
import { ProductData } from '../../interfaces';

function MainSection() {
  const { productsData, isLoading } = useContext(MyContext);
  const isCardsExist = productsData!.length !== 0;

  let content;
  if (isLoading) {
    content = <img src="/src/assets/loading.gif" alt="loader"></img>;
  } else if (isCardsExist) {
    content = productsData!.map((character: ProductData, index: number) => (
      <ProductCard key={index} data={character} />
    ));
  } else {
    content = <h1>Oops! Character does not found</h1>;
  }

  return <main>{content}</main>;
}

export default MainSection;
