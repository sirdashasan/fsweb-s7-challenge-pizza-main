import { Col, Row } from "reactstrap";
import Header from "../components/Header";
import LineComp from "../components/LineComp";
import SuccessYazisi from "../components/SuccessYazisi";
import SuccessCardComp from "../components/SuccessCardComp";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
    <div className="success-container">
      <Header />
      <SuccessYazisi />

      <Row
        style={{ fontSize: "32px", marginLeft: "62px" }}
        className="success-order-summary d-flex justify-content-center align-items-center"
      >
        <Col md={5} />
        <Col md={2}>
          {orderSummary && (
            <p>
              <strong> {orderSummary.isim}!</strong>
            </p>
          )}
        </Col>
        <Col md={5} />
      </Row>

      <Row className="mt-3">
        <Col md={4} />
        <Col md={4}>
          <LineComp />
        </Col>
        <Col md={4} />
      </Row>

      <Row className="mt-3 success-order-title">
        <Col md={4} />
        <Col md={4}>
          <h5>Position Absolute Acı Pizza</h5>
          <Col md={4} />
        </Col>
      </Row>

      <Row className="mt-5 success-order-summary align-content-center justify-content-center">
        <Col md={5} />
        <Col md={2}>
          {orderSummary && (
            <div>
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

      <Row className="justify-content-center align-items-center">
        <Col md={4} />
        <Col md={6}>
          <SuccessCardComp />

          <Col md={4} />
        </Col>
      </Row>
    </div>
  );
}
