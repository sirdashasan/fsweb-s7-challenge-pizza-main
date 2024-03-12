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
      <div className="malzemeler-title">
        <div className="malzemeler-error">
          <p>
            Ek Malzemeler{" "}
            {malzemelerError && <span className="text-danger">*</span>}
          </p>
        </div>
      </div>
      <div className="malzemeler-yazi">
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      </div>
      <Row className="malzemeler-row">
        {malzemeler.map((item, i) => (
          <Col md={4} key={i} className="mb-2">
            <label className="d-block">
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
