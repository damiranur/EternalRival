import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import MyContext from '../services/myContext';
import { getProductsList } from '../services/getProductList';
import { ProductData } from '../interfaces';

function DetailedProductPage() {
  const { page, setProduct, productsData } = useContext(MyContext);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const productName = searchParams.get('product');
  const targetProductObj = productsData?.find(
    (product) => productName === product.name.en
  );

  const [currentObj, setCurrentObj] = useState<ProductData>();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!targetProductObj) {
        return;
      }
      const fetchedObj = await getProductsList(targetProductObj.name.en);
      setCurrentObj(fetchedObj.results[0]);
    };
    fetchProduct();
  }, [targetProductObj]);

  const closeDetails = () => {
    navigate(`/?page=${page}`);
    setProduct(null);
  };

  return (
    <div onClick={closeDetails} className="detailed-product-container">
      <div className="product-page">
        <button className="detailed-product-close" onClick={closeDetails}>
          Close
        </button>
        {currentObj ? (
          <>
            <h1 className="detailed-product-title">{currentObj.name.en}</h1>
            <div className="detailed-images-block">
              <img
                className="detailed-product-image"
                src={currentObj.masterVariant.images[0].url}
                alt="product image"
              />
              {currentObj.masterVariant.images[1] && (
                <img
                  className="detailed-product-image"
                  src={currentObj.masterVariant.images[1].url}
                  alt="product image"
                />
              )}
            </div>
            <p className="detailed-product-info">{currentObj.description.en}</p>
          </>
        ) : (
          <img className="loader" src="/src/assets/loading.gif" alt="loading" />
        )}
      </div>
    </div>
  );
}

export default DetailedProductPage;
