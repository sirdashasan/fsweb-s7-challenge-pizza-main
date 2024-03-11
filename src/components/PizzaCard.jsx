import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function PizzaCard() {
  return (
    <div>
      <Card
        style={{
          width: "430px",
          height: "400px",
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 0 3px white",
        }}
        className="home-pizza-card"
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
          <CardTitle tag="h2">
            Özel<br></br>Lezzetus
          </CardTitle>
          <CardText>Position: Absolute Pizza</CardText>
          <Button
            style={{
              backgroundColor: "white",
              color: "#ce2829",
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
          >
            SİPARİŞ VER
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default PizzaCard;
