import { Card, CardBody, CardText, CardTitle } from "reactstrap";

function SuccessCardComp() {
  return (
    <div>
      <Card
        style={{
          width: "240px",
          backgroundColor: "#ce2829",
          borderColor: "white",
          borderRadius: "2px",
        }}
      >
        <CardBody style={{ backgroundColor: "#ce2829" }}>
          <CardTitle className="order-card-title" style={{ color: "white" }}>
            Sipariş Toplamı
          </CardTitle>
          <div className="d-flex justify-content-between align-items-center">
            <CardText
              className="order-card-secimler mb-0"
              style={{ color: "white" }}
            >
              Seçimler{" "}
            </CardText>
            <CardText
              className="order-card-secimler mb-0"
              style={{ color: "white" }}
            >
              25₺
            </CardText>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <CardText
              className="order-card-toplam mb-0"
              style={{ color: "white" }}
            >
              Toplam{" "}
            </CardText>
            <CardText
              className="order-card-toplam mb-0"
              style={{ color: "white" }}
            >
              110.50₺
            </CardText>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default SuccessCardComp;
