import { FormGroup, Input, Label } from "reactstrap";

function SiparisNotu({ handleNoteChange, note }) {
  return (
    <div style={{ fontFamily: "Roboto Condensed", fontWeight: "bold" }}>
      <div>
        <FormGroup>
          <Label for="siparisNotu">Sipariş Notu:</Label>
          <Input
            id="siparisNotu"
            name="note"
            type="textarea"
            rows="2"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            onChange={handleNoteChange}
            style={{
              height: "40px",
              backgroundColor: "#FAF7F2",
              border: "none",
              borderRadius: "5px",
              fontFamily: "Roboto Condensed",
              fontSize: "12px",
            }}
            data-cy="not-input"
          >
            {note}
          </Input>
        </FormGroup>
      </div>
    </div>
  );
}

export default SiparisNotu;
