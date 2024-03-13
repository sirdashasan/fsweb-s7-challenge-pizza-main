import { Col, Row } from "reactstrap";

function Malzemeler({
  selectedIngredients,
  setSelectedIngredients,
  malzemelerError,
}) {
  const malzemeler = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

  const handleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedIngredients([...selectedIngredients, value]);
    } else {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== value)
      );
    }
  };

  return (
    <div>
      <div
        style={{
          fontFamily: "Roboto Condensed",
          fontWeight: "bold",
          marginTop: "15px",
        }}
      >
        <div className="malzemeler-error">
          <p>
            Ek Malzemeler{" "}
            {malzemelerError && <span className="text-danger">*</span>}
          </p>
        </div>
      </div>
      <div style={{ fontFamily: "Roboto Condensed", color: "#5f5f5f" }}>
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      </div>
      <Row
        style={{
          fontFamily: "Roboto Condensed",
          fontWeight: "bold",
          color: "#5f5f5f",
          fontSize: "13px",
          marginBottom: "20px",
        }}
      >
        {malzemeler.map((item, i) => (
          <Col md={4} key={i} className="mb-2">
            <label style={{ marginBottom: "8px" }} className="d-block">
              <input
                id="malzemeler-checkbox"
                type="checkbox"
                value={item}
                name="malzemeler"
                onChange={handleChange}
                checked={selectedIngredients.includes(item)}
                data-cy="malzemeler-checkbox"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "5px",
                  marginRight: "10px",
                  verticalAlign: "middle",
                }}
              />
              <span>{item}</span>
            </label>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Malzemeler;
