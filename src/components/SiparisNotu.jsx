import { FormGroup, Input, Label } from "reactstrap";

function SiparisNotu({ onChange, specialNote }) {
  return (
    <div className="order-not">
      <div>
        <FormGroup>
          <Label for="siparisNotu">Sipariş Notu:</Label>
          <Input
            id="siparisNotu"
            name="text"
            type="textarea"
            rows="2"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            value={specialNote}
            onChange={onChange}
            style={{
              height: "40px",
              backgroundColor: "#FAF7F2",
              border: "none",
              borderRadius: "5px",
              fontFamily: "Roboto Condensed",
              fontSize: "12px",
            }}
            data-cy="not-input"
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default SiparisNotu;
