import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function CardComp({ isDisabled, handleSubmit }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle className="order-card-title">Sipariş Toplamı</CardTitle>
          <div className="d-flex justify-content-between align-items-center">
            <CardText className="order-card-secimler mb-0">Seçimler </CardText>
            <CardText className="order-card-secimler mb-0">25₺</CardText>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <CardText className="order-card-toplam mb-0">Toplam </CardText>
            <CardText className="order-card-toplam mb-0">110.50₺</CardText>
          </div>
        </CardBody>
      </Card>
      <Button
        style={{ borderRadius: "4px", paddingTop: "1px" }}
        type="button"
        color="warning"
        className="order-card-button"
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        SİPARİŞ VER
      </Button>
    </div>
  );
}

export default CardComp;
