import { FormGroup, Input, Label } from "reactstrap";

function NameInput({ onChange, nameError }) {
  return (
    <div className="order-name">
      <FormGroup>
        <Label for="name">
          İsim: {nameError && <span className="text-danger">*</span>}
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Siparişini tamamlamak için adını girmelisin"
          type="text"
          onChange={onChange}
        />
      </FormGroup>
    </div>
  );
}

export default NameInput;
