import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function BurgerCard() {
  return (
    <div>
      <Card
        style={{
          width: "460px",
          height: "195px",
          position: "relative",
          borderRadius: "10px",
          border: "1px #292929",
        }}
        className="home-burger-card"
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
          <CardTitle tag="h5">
            Hackathlon<br></br>Burger Menü
          </CardTitle>

          <Link
            to="/order/3"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              style={{
                backgroundColor: "white",
                color: "#ce2829",
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

export default BurgerCard;
