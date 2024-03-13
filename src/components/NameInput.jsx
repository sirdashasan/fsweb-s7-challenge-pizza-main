import { FormGroup, Input, Label } from "reactstrap";

function NameInput({ onChange, nameError }) {
  return (
    <div
      style={{ fontFamily: "Roboto Condensed", fontWeight: "bold" }}
      className="order-name"
    >
      <FormGroup>
        <Label for="name">
          <div className="ad-error">
            İsim: {nameError && <span className="text-danger">*</span>}
          </div>
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Siparişini tamamlamak için adını girmelisin"
          type="text"
          onChange={onChange}
          data-cy="ad-input"
          style={{
            height: "40px",
            backgroundColor: "#FAF7F2",
            border: "none",
            borderRadius: "5px",
            fontFamily: "Roboto Condensed",
            fontSize: "12px",
          }}
        />
      </FormGroup>
    </div>
  );
}

export default NameInput;
