import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import Products from "./Products";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";

function FoodCards({ imageSrc, name, price, id }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/order/${id}`);
  };

  return (
    <div
      style={{
        marginBottom: "70px",
      }}
    >
      <Card
        style={{
          width: "250px",
          fontFamily: "Roboto Condensed",
          margin: "30px",
          border: "1px white",
          cursor: "pointer",
        }}
        onClick={() => {
          handleClick();
          scrollToTop();
        }}
      >
        <img
          alt="Sample"
          src={imageSrc}
          style={{
            maxWidth: "250px",
            height: "250px",
            margin: "10px",
            padding: "10px",
          }}
        />
        <CardBody>
          <CardTitle
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            tag="h6"
          >
            {name}
          </CardTitle>
          <CardText className="d-flex justify-content-between">
            <span style={{ marginLeft: "180px" }}>
              <strong>{price}₺</strong>
            </span>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default FoodCards;
