import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function FoodCards({ imageSrc, imageName }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/order/${imageName}`);
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
          margin: "19px",
          border: "1px white",
        }}
        onClick={handleClick}
      >
        <img alt="Sample" src={imageSrc} />
        <CardBody>
          <CardTitle tag="h6">{imageName}</CardTitle>
          <CardText className="d-flex justify-content-between">
            <span>4.9</span>
            <span>(200)</span>
            <span>
              <strong>60₺</strong>
            </span>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default FoodCards;
