import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Products from "./Products";

function BurgerCard() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order/3", {
      order: Products[2],
    });
  };

  return (
    <div>
      <Card
        className="burger-card-container"
        style={{
          borderRadius: "10px",
          border: "1px #292929",
        }}
      >
        <div className="burger-card-overlay">
          <img
            alt="Card"
            src="Assets/mile2-aseets/cta/kart-2.png"
            className="burger-card-image"
          />
        </div>
        <CardBody className="burger-card-body">
          <CardTitle tag="h5" className="burger-card-text">
            <p>
              Hackathlon<br></br>Burger Menü
            </p>
          </CardTitle>

          <Button
            style={{
              backgroundColor: "white",
              color: "#CE2829",
              borderRadius: "20px",
              fontFamily: "Barlow, sans-serif",
              fontSize: "10px",
              padding: "10px 20px",
              border: "1px solid white",
              marginTop: "10px",
            }}
            className="burger-order-button"
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

export default BurgerCard;
