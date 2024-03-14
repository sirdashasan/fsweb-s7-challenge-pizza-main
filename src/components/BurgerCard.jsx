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
        style={{
          width: "460px",
          height: "195px",
          position: "relative",
          borderRadius: "10px",
          border: "1px #292929",
          fontFamily: "Quattrocento",
          marginLeft: "760px",
          marginTop: "-500px",
          marginRight: "20px",
          marginBottom: "100px",
          paddingLeft: "20px",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <img
            alt="Card"
            src="Assets/mile2-aseets/cta/kart-2.png"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <CardBody
          style={{
            position: "relative",
            zIndex: 1,
            color: "white",
            fontFamily: "Roboto Condensed",
          }}
        >
          <CardTitle
            tag="h5"
            style={{
              marginTop: "-15px",
              marginBottom: "10px",
              paddingTop: "18px",
            }}
          >
            Hackathlon<br></br>Burger Menü
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
