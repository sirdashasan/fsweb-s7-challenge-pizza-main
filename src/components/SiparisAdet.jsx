import { useState } from "react";
import { Button } from "reactstrap";

function SiparisAdet({ onQuantityChange }) {
  const [adet, setAdet] = useState(1);

  const arttir = () => {
    const yeniAdet = adet + 1;
    setAdet(yeniAdet);
    onQuantityChange(yeniAdet);
  };

  const azalt = () => {
    const yeniAdet = adet > 1 ? adet - 1 : 1;
    setAdet(yeniAdet);
    onQuantityChange(yeniAdet);
  };

  return (
    <div className="d-flex align-items-center">
      <Button
        onClick={azalt}
        className="order-adet-button"
        style={{
          borderTopLeftRadius: "4px",
          borderBottomLeftRadius: "4px",
          borderTopRightRadius: "0",
          borderBottomRightRadius: "0",
          paddingTop: "1px",
          backgroundColor: "#FAF7F2",
          border: " #FAF7F2",
          color: "#292929",
        }}
      >
        -
      </Button>
      <div className="order-adet-yazi ">{adet}</div>
      <Button
        onClick={arttir}
        className="order-adet-button"
        style={{
          borderTopLeftRadius: "0",
          borderBottomLeftRadius: "0",
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
          paddingTop: "1px",
          backgroundColor: "#FAF7F2",
          border: " #FAF7F2",
          color: "#292929",
        }}
      >
        +
      </Button>
    </div>
  );
}

export default SiparisAdet;
