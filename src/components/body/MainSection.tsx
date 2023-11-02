import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import MyContext from '../../services/myContext';
import { ProductData } from '../../interfaces';
import Pagination from '../addition/Pagination';
import DetailedProductPage from '../../pages/DetailedProductPage';
import { Link, useNavigate, useParams } from 'react-router-dom';

function MainSection() {
  const { name } = useParams();
  const { productsData, isLoading } = useContext(MyContext);
  const navigate = useNavigate();
  const isCardsExist = productsData!.length !== 0;

  const [selectedItemName, setSelectedItemName] = useState('');

  const closeDetails = () => {
    setSelectedItemName('');
    navigate(-1);
  };

  useEffect(() => {
    if (name) {
      setSelectedItemName(name);
    }
  }, []);

  let content;
  if (isLoading) {
    content = <img src="/src/assets/loading.gif" alt="loader"></img>;
  } else if (isCardsExist) {
    content = productsData!.map((product: ProductData, index: number) => (
      <Link key={product.name.en} to={`/${product.name.en}`}>
        <ProductCard
          key={index}
          data={product}
          setSelectedItemName={setSelectedItemName}
        />
      </Link>
    ));
  } else {
    content = <h1>Oops! Character does not found</h1>;
  }

  return (
    <main>
      <div className="main">{content}</div>
      {selectedItemName && <DetailedProductPage closeDetails={closeDetails} />}
      <Pagination />
    </main>
  );
}

export default MainSection;
