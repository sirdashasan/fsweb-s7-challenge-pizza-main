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
          <CardTitle
            style={{ fontFamily: "Roboto Condensed", fontWeight: "bold" }}
          >
            Sipariş Toplamı
          </CardTitle>
          <div className="d-flex justify-content-between align-items-center">
            <CardText
              style={{
                fontFamily: "Roboto Condensed",
                fontWeight: "bold",
                color: "#5f5f5f",
              }}
              className="mb-0"
            >
              Seçimler (Birim Fiyat){" "}
            </CardText>
            <CardText
              style={{
                fontFamily: "Roboto Condensed",
                fontWeight: "bold",
                color: "#5f5f5f",
              }}
              className="mb-0"
              data-cy="selected-price"
            >
              {selectedPrice}₺
            </CardText>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <CardText
              style={{
                fontFamily: "Roboto Condensed",
                fontWeight: "bold",
                color: " #ce2829",
              }}
              className="mb-0"
            >
              Toplam{" "}
            </CardText>
            <CardText
              style={{
                fontFamily: "Roboto Condensed",
                fontWeight: "bold",
                color: " #ce2829",
              }}
              className="mb-0"
              data-cy="total-price"
            >
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
          fontFamily: "Roboto Condensed",
          fontWeight: "bold !important",
          width: "250px",
          marginTop: "-5px",
          marginLeft: "5px",
          height: "30px",
          marginBottom: "40px",
          fontSize: "14px !important",
        }}
        type="button"
        color="warning"
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
