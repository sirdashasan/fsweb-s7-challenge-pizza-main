import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "reactstrap";
import Products from "./Products";

function HomeButton() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order/1", {
      order: Products[0],
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        fontFamily: "Barlow",
        fontWeight: "bold",
        height: "40px",
        marginTop: "20px",
      }}
    >
      <Button
        color="warning"
        style={{
          borderRadius: "20px",
          paddingTop: "3px",
          width: "150px",
          fontSize: "12px",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#292929";
          e.currentTarget.style.color = "white";
          e.currentTarget.style.border = "#292929";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#FDC913";
          e.currentTarget.style.color = "#292929";
        }}
        onClick={handleClick}
      >
        ACIKTIM
      </Button>
    </div>
  );
}

export default HomeButton;
