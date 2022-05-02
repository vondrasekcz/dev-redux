import { useParams, } from "react-router-dom";


type Params = {
  productId: string,
}


const ProductDetail = () => {
  const { productId, } = useParams<Params>();

  return (
    <div>
      <h2>{`Product ID - ${productId}`}</h2>
    </div>
  );
};


export default ProductDetail;
