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

function KuryeCard() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order/4", {
      order: Products[3],
    });
  };
  return (
    <div>
      <Card
        className="kurye-card-container"
        style={{
          borderRadius: "10px",
          border: "1px #FAF7F2",
        }}
      >
        <div className="kurye-card-overlay">
          <img
            alt="Card"
            src="Assets/mile2-aseets/cta/kart-3.png"
            className="kurye-card-image"
          />
        </div>
        <CardBody className="kurye-card-body">
          <CardTitle tag="h5" className="kurye-card-title">
            <div>
              <span
                style={{
                  color: "#CE2829",
                }}
              >
                Çoooook
              </span>{" "}
              <span
                style={{
                  color: "#292929",
                }}
              >
                hızlı
              </span>
              <br></br>
            </div>
            <div
              style={{
                color: "#292929",
              }}
            >
              npm gibi kurye
            </div>
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
            className="kurye-card-button"
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

export default KuryeCard;
