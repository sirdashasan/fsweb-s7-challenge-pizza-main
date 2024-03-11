import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "reactstrap";

function HomeButton() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order");
  };

  return (
    <div className="home-button">
      <Button
        color="warning"
        style={{
          borderRadius: "20px",
          paddingTop: "3px",
          width: "150px",
          fontSize: "12px",
        }}
        onClick={handleClick}
      >
        ACIKTIM
      </Button>
    </div>
  );
}

export default HomeButton;
