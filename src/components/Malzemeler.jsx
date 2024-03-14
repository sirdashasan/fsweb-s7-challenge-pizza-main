import { Col, Row } from "reactstrap";

function Malzemeler({ handleIngredientsChange, ingredients }) {
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

  return (
    <div>
      <div className="malzemeler-title">
        <div>
          <p>
            Ek Malzemeler{" "}
            {!(ingredients.length >= 4 && ingredients.length <= 10) && (
              <span className="text-danger">*</span>
            )}
          </p>
        </div>
      </div>
      <div className="malzemeler-yazi">
        <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
      </div>
      <Row className="malzemeler-row">
        {malzemeler.map((item, i) => (
          <Col md={4} key={i} className="mb-2 malzemeler-col">
            <label>
              <input
                id="malzemeler-checkbox"
                type="checkbox"
                value={item}
                name="ingredients"
                onChange={handleIngredientsChange}
                checked={ingredients.includes(item)}
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
