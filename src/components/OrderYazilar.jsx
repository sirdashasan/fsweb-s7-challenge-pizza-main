import { useParams } from "react-router-dom";
import products from "./Products";
import HeaderNav from "./HeaderNav";
import { Col, Row } from "reactstrap";
import CardComp from "./CardComp";

function OrderYazilar({ selectedProduct, selectedPrice }) {
  let { id } = useParams();

  // URL'den gelen id değerini tamsayıya çevir
  id = parseInt(id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <>
      <div>
        <img className="order-image" src={product.image} alt={product.name} />
      </div>

      <div className="order-header-nav">
        <HeaderNav />
      </div>

      <div className="order-title">
        <h5>{selectedProduct}</h5>
      </div>
      <div className="order-fiyat">
        <h4>{selectedPrice}₺</h4>
      </div>
      <div className="order-yazilar">
        <p>{product.description}</p>
      </div>
    </>
  );
}

export default OrderYazilar;
