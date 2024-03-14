import { useState } from "react";
import { Button } from "reactstrap";

function SiparisAdet({ handleIncrease, handleDecrease, quantity }) {
  return (
    <div className="d-flex align-items-center order-siparis-adet">
      <Button
        onClick={handleDecrease}
        className="order-adet-button-sol"
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
      <div className="order-adet-yazi">{quantity}</div>
      <Button
        onClick={handleIncrease}
        className="order-adet-button-sag"
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
        data-cy="adet-button-arttir-input"
      >
        +
      </Button>
    </div>
  );
}

export default SiparisAdet;
