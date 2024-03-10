import { Button } from "reactstrap";

function HomeButton() {
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
      >
        ACIKTIM
      </Button>
    </div>
  );
}

export default HomeButton;
