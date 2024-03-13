import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";

function PizzaCard() {
  return (
    <div>
      <Card
        style={{
          width: "430px",
          height: "400px",
          position: "relative",
          borderRadius: "10px",
          border: "1px #CE2829",
          fontFamily: "Quattrocento",
          marginLeft: "310px",
          marginTop: "100px",
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
            src="Assets/mile2-aseets/cta/kart-1.png"
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
        <CardBody style={{ position: "relative", zIndex: 1, color: "white" }}>
          <CardTitle
            tag="h2"
            style={{
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            Özel<br></br>Lezzetus
          </CardTitle>
          <CardText
            style={{
              fontFamily: "Barlow-Regular",
              fontSize: "11px",
              fontWeight: "bold",
            }}
          >
            Position: Absolute Pizza
          </CardText>
          <Link
            to="/order/1"
            style={{ textDecoration: "none", color: "inherit" }}
          >
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
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#292929";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.border = "#292929";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#292929";
              }}
              onClick={scrollToTop}
            >
              SİPARİŞ VER
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

export default PizzaCard;
