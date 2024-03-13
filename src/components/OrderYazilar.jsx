import { useParams } from "react-router-dom";
import products from "./Products";
import HeaderNav from "./HeaderNav";
import { Col, Row } from "reactstrap";
import CardComp from "./CardComp";

function OrderYazilar({ onSelectPrice }) {
  let { id } = useParams();

  // URL'den gelen id değerini tamsayıya çevir
  id = parseInt(id);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div>Ürün bulunamadı!</div>;
  }

  onSelectPrice(product.id);

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

      <div
        style={{
          fontFamily: "Roboto Condensed",
          marginTop: "10px",
        }}
      >
        <h5>{product.name}</h5>
      </div>
      <div
        style={{
          fontFamily: "Roboto Condensed",
          marginTop: "30px",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
        className="order-fiyat"
      >
        <h4>{product.price}₺</h4>
      </div>
      <div
        style={{
          fontFamily: "Roboto Condensed",
          color: "#5f5f5f",
          marginBottom: "35px",
        }}
      >
        <p style={{ fontSize: "15px" }}>{product.description}</p>
      </div>
    </>
  );
}

export default OrderYazilar;
