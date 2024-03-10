import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function CardComp({ isDisabled }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Sipariş Toplamı</CardTitle>
          <CardText>Seçimler: 25₺</CardText>
          <CardText>Toplam: 110.50₺</CardText>
          <Button disabled={isDisabled}>SİPARİŞ VER</Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default CardComp;
