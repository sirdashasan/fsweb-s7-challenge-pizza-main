import { useRef, useState } from "react";

function PizzaBoyutu({ handleSizeChange, size }) {
  // Önceki seçeneği seçebilmek için

  // const handleButtonClick = (e) => {
  //   // Tıklanan butonun arka plan rengi değişsin
  //   e.currentTarget.style.backgroundColor = "#292929";
  //   e.currentTarget.style.color = "white";

  //   // Önceki seçeneğin arka plan rengini ilk rengine döndür
  //   if (
  //     prevSelectedButtonRef.current &&
  //     prevSelectedButtonRef.current !== e.currentTarget
  //   ) {
  //     prevSelectedButtonRef.current.style.backgroundColor = "#FAF7F2";
  //     prevSelectedButtonRef.current.style.color = "#292929";
  //   }

  //   // Önceki seçeneği güncelle
  //   prevSelectedButtonRef.current = e.currentTarget;

  //   setError(false);
  //   onChange(e.currentTarget.value);
  // };

  return (
    <div>
      <div className="boyut-title">
        <div>
          <p>
            Boyut Seç{" "}
            {!(size === "S" || size === "M" || size === "L") && (
              <span className="text-danger">*</span>
            )}
          </p>
        </div>
      </div>
      <form className="d-flex justify-content-start">
        <div className="boyut-options">
          <button
            name="size"
            value="S"
            onClick={handleSizeChange}
            data-cy="boyut-radio"
            style={{
              backgroundColor: size === "S" ? "#FDC913" : "#FAF7F2",
              color: "#292929",
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              border: "1px solid #FAF7F2",
              fontFamily: "Roboto Condensed",
              fontWeight: "400",
            }}
          >
            S
          </button>
        </div>
        <div className="boyut-options">
          <label>
            <button
              name="size"
              value="M"
              onClick={handleSizeChange}
              data-cy="boyut-radio"
              style={{
                backgroundColor: size === "M" ? "#FDC913" : "#FAF7F2",
                color: "#292929",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                border: "1px solid #FAF7F2",
                fontFamily: "Roboto Condensed",
                fontWeight: "400",
              }}
            >
              M
            </button>
          </label>
        </div>
        <div className="boyut-options">
          <label>
            <button
              name="size"
              value="L"
              onClick={handleSizeChange}
              data-cy="boyut-radio"
              style={{
                backgroundColor: size === "L" ? "#FDC913" : "#FAF7F2",
                color: "#292929",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                border: "1px solid #FAF7F2",
                fontFamily: "Roboto Condensed",
                fontWeight: "400",
              }}
            >
              L
            </button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default PizzaBoyutu;
