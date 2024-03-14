import { FormGroup, Input, Label } from "reactstrap";

function NameInput({ handleNameChange, name }) {
  return (
    <div
      style={{ fontFamily: "Roboto Condensed", fontWeight: "bold" }}
      className="order-name"
    >
      <FormGroup>
        <Label for="name">
          <div className="ad-error">
            İsim: {name.length < 4 && <span className="text-danger">*</span>}
          </div>
        </Label>
        <Input
          id="name"
          name="name"
          value={name}
          placeholder="Siparişini tamamlamak için adını girmelisin"
          type="text"
          onChange={handleNameChange}
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
