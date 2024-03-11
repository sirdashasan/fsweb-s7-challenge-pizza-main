function PizzaBoyutu({ onChange, boyutError }) {
  return (
    <div>
      <div className="boyut-title">
        <div className="boyut-error">
          <p>
            Boyut Seç {boyutError && <span className="text-danger">*</span>}
          </p>
        </div>
      </div>
      <form>
        <div className="boyut-options">
          <label>
            <input
              type="radio"
              name="boyut"
              value="S"
              onChange={onChange}
              data-cy="boyut-radio"
            />
            S
          </label>
        </div>
        <div className="boyut-options">
          <label>
            <input
              type="radio"
              name="boyut"
              value="M"
              onChange={onChange}
              data-cy="boyut-radio"
            />
            M
          </label>
        </div>
        <div className="boyut-options">
          <label>
            <input
              type="radio"
              name="boyut"
              value="L"
              onChange={onChange}
              data-cy="boyut-radio"
            />
            L
          </label>
        </div>
      </form>
    </div>
  );
}

export default PizzaBoyutu;
