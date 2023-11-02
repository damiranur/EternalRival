import { useParams } from 'react-router-dom';

function DetailedProductPage({ closeDetails }: { closeDetails?: () => void }) {
  const params = useParams();
  console.log(params);
  return (
    <div className="detailed-product-container">
      <div className="product-page">
        <div>Имя продукта: {params.productName}</div>
        <button onClick={closeDetails}>Close</button>
      </div>
    </div>
  );
}

export default DetailedProductPage;
