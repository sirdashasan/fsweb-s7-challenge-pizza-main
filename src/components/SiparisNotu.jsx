import { FormGroup, Input, Label } from "reactstrap";

function SiparisNotu() {
  return (
    <div>
      <div>
        <FormGroup>
          <Label for="siparisNotu">Sipariş Notu:</Label>
          <Input
            id="siparisNotu"
            name="text"
            type="textarea"
            rows="2"
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
        </FormGroup>
      </div>
    </div>
  );
}

export default SiparisNotu;
