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
    history.push(`/order/${id}`, {
      order: {
        name,
        price,
      },
    });
  };

  return (
    <div className="food-card-container">
      <Card
        style={{
          width: "250px",
          fontFamily: "Roboto Condensed",
          marginTop: "30px",
          marginLeft: "28px",
          border: "1px white",
          cursor: "pointer",
        }}
        className="food-card"
        onClick={() => {
          handleClick();
          scrollToTop();
        }}
      >
        <img alt="Sample" src={imageSrc} className="food-card-img" />
        <CardBody>
          <CardTitle className="food-card-title" tag="h6">
            {name}
          </CardTitle>
          <CardText className="food-card-price">
            <span style={{ fontSize: "14px" }}>
              <strong>{price}₺</strong>
            </span>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default FoodCards;
