import { useState } from "react";
import { Button } from "reactstrap";

function SiparisAdet() {
  const [adet, setAdet] = useState(0);

  const arttir = () => {
    setAdet((adet) => adet + 1);
  };

  const azalt = () => {
    setAdet((adet) => (adet > 0 ? adet - 1 : 0));
  };

  return (
    <div className="d-flex align-items-center">
      <Button
        color="warning"
        onClick={azalt}
        className="order-adet-button"
        style={{
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          paddingTop: "1px",
        }}
      >
        -
      </Button>
      <div className="order-adet-yazi">{adet}</div>
      <Button
        color="warning"
        onClick={arttir}
        className="order-adet-button"
        style={{
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
          paddingTop: "1px",
        }}
      >
        +
      </Button>
    </div>
  );
}

export default SiparisAdet;
