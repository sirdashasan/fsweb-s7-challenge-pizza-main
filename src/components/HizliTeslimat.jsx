import { Col, FormGroup, Input, Label, Row } from "reactstrap";

function HizliTeslimat({ handleRapidDeliveryChange }) {
  return (
    <Row className="malzemeler-row">
      <Col md={4} className="mb-2 malzemeler-col">
        <label>
          <input
            id="malzemeler-checkbox"
            type="checkbox"
            value="rapidly"
            name="rapidly"
            onChange={handleRapidDeliveryChange}
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "5px",
              marginRight: "10px",
              verticalAlign: "middle",
            }}
          />
          <span className="hizli-teslimat">Hızlı Kurye (+50₺)</span>
        </label>
      </Col>
    </Row>
  );
}

export default HizliTeslimat;
