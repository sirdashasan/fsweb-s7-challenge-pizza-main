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
  const location = useLocation();
  const formData = location.state ? location.state.formData : null;

  const [orderSummary, setOrderSummary] = useState(null);

  useEffect(() => {
    if (formData) {
      axios
        .post("https://reqres.in/api/pizza", formData)
        .then((response) => {
          setOrderSummary(response.data);
        })
        .catch((error) => {
          console.warn("Sipariş gönderilirken hata oluştu:", error);
        });
    }
  }, [formData]);

  return (
    <div
      style={{
        backgroundColor: "#ce2829",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Header />

      <Row>
        <Col md={4} />
        <Col md={4}>
          <SuccessYazisi />
        </Col>
        <Col md={4} />
      </Row>

      <div>
        {orderSummary && (
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              fontFamily: "Barlow-Regular",
              fontSize: "24px",
            }}
          >
            <strong> {orderSummary.isim}!</strong>
          </p>
        )}
      </div>

      <Row className="mt-3">
        <Col md={4} />
        <Col md={4}>
          <LineComp />
        </Col>
        <Col md={4} />
      </Row>

      <Row
        style={{
          marginTop: "20px",
        }}
      >
        <Col md={4} />
        <Col md={4}>
          <h5
            style={{
              fontFamily: "Roboto Condensed",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Position Absolute Acılı Pizza
          </h5>
          <Col md={4} />
        </Col>
      </Row>

      <Row
        style={{
          fontFamily: "Barlow-Regular",
          fontSize: "12px",
          paddingLeft: "30px",
          marginBottom: "40px",
          marginTop: "30px",
        }}
      >
        <Col md={5} />
        <Col md={2}>
          {orderSummary && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <p>
                Boyut: <strong>{orderSummary.boyut}</strong>
              </p>
              <p>
                Hamur: <strong>{orderSummary.hamur}</strong>
              </p>
              <p>
                Malzemeler:{" "}
                <strong>{orderSummary.malzemeler.join(", ")}</strong>
              </p>
              <p>
                Özel: <strong>{orderSummary.ozel}</strong>
              </p>
            </div>
          )}
        </Col>
        <Col md={5} />
      </Row>

      <Row
        style={{
          fontFamily: "Roboto Condensed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col md={4} />
        <Col md={6}>
          {orderSummary && (
            <SuccessCardComp
              selectedPrice={orderSummary.fiyat}
              totalPrice={orderSummary.toplamFiyat}
            />
          )}
          <Col md={4} />
        </Col>
      </Row>

      <div>
        <Link
          to="/"
          style={{
            display: "flex",
            justifyContent: "center",
            color: "inherit",
          }}
        >
          <div>
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
          </div>
        </Link>
      </div>
    </div>
  );
}
