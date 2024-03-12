import { useParams } from "react-router-dom";
import products from "./Products";
import HeaderNav from "./HeaderNav";
import { Col, Row } from "reactstrap";

function OrderYazilar() {
  let { id } = useParams();

  // URL'den gelen id değerini tamsayıya çevir
  id = parseInt(id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <>
      <div className="order-image">
        <img
          style={{
            width: "300px",
            marginTop: "-150px",
            marginBottom: "10px",
            marginLeft: "100px",
          }}
          src={product.image}
          alt={product.name}
        />
      </div>

      <div style={{ marginTop: "30px", marginBottom: "50px" }}>
        <HeaderNav />
      </div>

      <div className="order-title">
        <h5>{product.name}</h5>
      </div>
      <div className="order-fiyat">
        <h4>{product.price}₺</h4>
      </div>
      <div className="order-yazilar">
        <p>{product.description}</p>
      </div>
    </>
  );
}

export default OrderYazilar;
