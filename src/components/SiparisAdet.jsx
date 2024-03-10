import { useState } from "react";

function SiparisAdet() {
  const [adet, setAdet] = useState(0);

  const arttir = () => {
    setAdet((adet) => adet + 1);
  };

  const azalt = () => {
    setAdet((adet) => (adet > 0 ? adet - 1 : 0));
  };

  return (
    <div>
      <button onClick={azalt}>-</button>
      <span>{adet}</span>
      <button onClick={arttir}>+</button>
    </div>
  );
}

export default SiparisAdet;
