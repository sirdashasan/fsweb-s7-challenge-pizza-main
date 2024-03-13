import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function SuccessCardComp({ selectedPrice, totalPrice }) {
  return (
    <div>
      <Card
        style={{
          fontFamily: "Roboto Condensed",
          fontSize: "14px",
          width: "240px",
          backgroundColor: "#ce2829",
          borderColor: "white",
          borderRadius: "2px",
          marginBottom: "50px",
          padding: "20px",
        }}
      >
        <CardBody
          style={{
            backgroundColor: "#ce2829",
            fontFamily: "Roboto Condensed",
            fontWeight: "bold",
          }}
        >
          <CardTitle style={{ color: "white", fontWeight: "400" }}>
            Sipariş Toplamı
          </CardTitle>
          <div className="d-flex justify-content-between align-items-center">
            <CardText style={{ color: "white", fontWeight: "400" }}>
              Seçimler{" "}
            </CardText>
            <CardText
              className="mb-0"
              style={{ color: "white", fontWeight: "400" }}
            >
              {selectedPrice}₺
            </CardText>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <CardText
              className="order-card-toplam mb-0"
              style={{ color: "white", fontWeight: "400" }}
            >
              Toplam{" "}
            </CardText>
            <CardText
              className="mb-0"
              style={{ color: "white", fontWeight: "400" }}
            >
              {totalPrice}₺
            </CardText>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default SuccessCardComp;
