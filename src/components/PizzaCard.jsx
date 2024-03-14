import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";
import Products from "./Products";

function PizzaCard() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order/1", {
      order: Products[0],
    });
  };

  return (
    <div>
      <Card
        className="pizza-card-container"
        style={{
          borderRadius: "10px",
          border: "1px #CE2829",
        }}
      >
        <div className="pizza-card-overlay">
          <img
            alt="Card"
            src="Assets/mile2-aseets/cta/kart-1.png"
            className="pizza-card-image"
          />
        </div>
        <CardBody className="pizza-card-body">
          <CardTitle tag="h2" className="pizza-card-title">
            <p>
              Özel<br></br>Lezzetus
            </p>
          </CardTitle>
          <CardText
            className="pizza-card-text"
            style={{
              fontFamily: "Barlow-Regular",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            <p>Position: Absolute Pizza</p>
          </CardText>

          <Button
            style={{
              backgroundColor: "white",
              color: "#CE2829",
              borderRadius: "20px",
              fontFamily: "Barlow, sans-serif",
              fontSize: "10px",
              padding: "10px 20px",
              border: "1px solid white",
            }}
            className="pizza-card-order-button"
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#292929";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.border = "#292929";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#292929";
            }}
            onClick={() => {
              handleClick();
              scrollToTop();
            }}
          >
            SİPARİŞ VER
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default PizzaCard;
