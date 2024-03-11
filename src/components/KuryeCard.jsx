import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function KuryeCard() {
  return (
    <div>
      <Card
        style={{
          width: "460px",
          height: "195px",
          position: "relative",
          borderRadius: "10px",
          boxShadow: "0 0 0 3px white",
        }}
        className="home-kurye-card"
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
            src="Assets/mile2-aseets/cta/kart-3.png"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              fontFamily: "Roboto Condensed",
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
              color: "#ce2829",
              borderRadius: "20px",
              fontFamily: "Barlow, sans-serif",
              fontSize: "10px",
              padding: "10px 20px",
              border: "1px solid white",
              marginTop: "10px",
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
