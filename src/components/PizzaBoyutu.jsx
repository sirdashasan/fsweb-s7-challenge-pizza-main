import { useRef, useState } from "react";

function PizzaBoyutu({ onChange, boyutError }) {
  // Önceki seçeneği seçebilmek için
  const prevSelectedButtonRef = useRef(null);

  const [error, setError] = useState(boyutError);

  const handleButtonClick = (e) => {
    // Tıklanan butonun arka plan rengi değişsin
    e.currentTarget.style.backgroundColor = "#292929";
    e.currentTarget.style.color = "white";

    // Önceki seçeneğin arka plan rengini ilk rengine döndür
    if (
      prevSelectedButtonRef.current &&
      prevSelectedButtonRef.current !== e.currentTarget
    ) {
      prevSelectedButtonRef.current.style.backgroundColor = "#FAF7F2";
      prevSelectedButtonRef.current.style.color = "#292929";
    }

    // Önceki seçeneği güncelle
    prevSelectedButtonRef.current = e.currentTarget;

    setError(false);
    onChange(e.currentTarget.value);
  };

  return (
    <div>
      <div className="boyut-title">
        <div className="boyut-error">
          <p>Boyut Seç {error && <span className="text-danger">*</span>}</p>
        </div>
      </div>
      <form className="d-flex justify-content-start">
        <div style={{ marginRight: "10px" }} className="boyut-options">
          <label>
            <input
              type="button"
              name="boyut"
              value="S"
              onChange={onChange}
              data-cy="boyut-radio"
              style={{
                backgroundColor: "#FAF7F2",
                color: "#292929",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                border: "1px solid #FAF7F2",
              }}
              onClick={handleButtonClick}
            />
          </label>
        </div>
        <div style={{ marginRight: "10px" }} className="boyut-options">
          <label>
            <input
              type="button"
              name="boyut"
              value="M"
              onChange={onChange}
              data-cy="boyut-radio"
              style={{
                backgroundColor: "#FAF7F2",
                color: "#292929",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                border: "1px solid #FAF7F2",
              }}
              onClick={handleButtonClick}
            />
          </label>
        </div>
        <div className="boyut-options">
          <label>
            <input
              type="button"
              name="boyut"
              value="L"
              onChange={onChange}
              data-cy="boyut-radio"
              style={{
                backgroundColor: "#FAF7F2",
                color: "#292929",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                border: "1px solid #FAF7F2",
              }}
              onClick={handleButtonClick}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default PizzaBoyutu;
