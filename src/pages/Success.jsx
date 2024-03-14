import { Col, Row } from "reactstrap";
import Header from "../components/Header";
import LineComp from "../components/LineComp";
import SuccessYazisi from "../components/SuccessYazisi";
import SuccessCardComp from "../components/SuccessCardComp";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/Footer";

export default function Success() {
  const [orderSummary, setOrderSummary] = useState();
  useEffect(() => {
    setOrderSummary(location.state);
  }, []);
  const location = useLocation();

  console.log(orderSummary);

  return (
    <main className="success-container">
      <Header />

      <section>
        <Row>
          <Col md={4} />
          <Col md={4}>
            <SuccessYazisi />
          </Col>
          <Col md={4} />
        </Row>

        <section className="text-center">
          <p className="success-name">
            <strong>{orderSummary?.name}!</strong>
          </p>
        </section>

        <section>
          <Row className="mt-3">
            <Col md={4} />
            <Col md={4}>
              <LineComp />
            </Col>
            <Col md={4} />
          </Row>
        </section>

        <section>
          <Row>
            <Col md={4} />
            <Col md={4}>
              <h5 className="success-selected-product">
                <strong>{orderSummary?.selectedProduct}</strong>
              </h5>
            </Col>
            <Col md={4} />
          </Row>
        </section>

        <section className="success-order-summary">
          <div className="success-size-dough-ingredient">
            <p>
              Boyut: <strong>{orderSummary?.size}</strong>
            </p>
            <p>
              Hamur: <strong>{orderSummary?.dough}</strong>
            </p>
            <p>
              Malzemeler:
              {orderSummary?.ingredients?.map((ingredient, index) => (
                <span key={index}>
                  <strong>{ingredient}</strong>
                  {index < orderSummary.ingredients.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
            <p>
              Özel: <strong>{orderSummary?.note}</strong>
            </p>
          </div>
        </section>

        <section className="success-selected-total-prices">
          <SuccessCardComp
            selectedPrice={orderSummary?.selectedPrice}
            totalPrice={orderSummary?.totalPrice}
          />
        </section>
      </section>

      <footer className="success-home">
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "inherit",
          }}
        >
          <p
            style={{
              margin: "30px",
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "Roboto Condensed",
            }}
          >
            Ana Sayfaya Dön
          </p>
        </Link>
      </footer>

      <Footer />
    </main>
  );
}
