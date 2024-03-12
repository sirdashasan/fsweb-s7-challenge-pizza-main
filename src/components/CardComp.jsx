import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

import { useHistory } from "react-router-dom";

import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";

function CardComp({ isDisabled, handleSubmit, selectedPrice, totalPrice }) {
  const history = useHistory();
  const handleButtonClick = () => {
    history.push("/success");
  };

  return (
    <div>
      <Card
        style={{
          backgroundColor: "#FAF7F2",
          border: "#FAF7F2",
          fontSize: "12px ",
          margin: "5px",
          padding: "10px",
          width: "250px",
        }}
      >
        <CardBody>
          <CardTitle className="order-card-title">Sipariş Toplamı</CardTitle>
          <div className="d-flex justify-content-between align-items-center">
            <CardText className="order-card-secimler mb-0">
              Seçimler (Birim Fiyat){" "}
            </CardText>
            <CardText className="order-card-secimler mb-0">
              {selectedPrice}₺
            </CardText>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <CardText className="order-card-toplam mb-0">Toplam </CardText>
            <CardText className="order-card-toplam mb-0">
              {totalPrice}₺
            </CardText>
          </div>
        </CardBody>
      </Card>
      <Button
        style={{
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          paddingTop: "4px",
          textAlign: "center",
        }}
        type="button"
        color="warning"
        className="order-card-button"
        disabled={isDisabled}
        onClick={() => {
          handleSubmit();
          scrollToTop();
        }}
        data-cy="submit-button"
      >
        SİPARİŞ VER
      </Button>
    </div>
  );
}

export default CardComp;
