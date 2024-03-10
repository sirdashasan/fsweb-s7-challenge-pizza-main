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
              value="küçük"
              onChange={onChange}
              data-cy="boyut-radio"
            />
            Küçük
          </label>
        </div>
        <div className="boyut-options">
          <label>
            <input
              type="radio"
              name="boyut"
              value="orta"
              onChange={onChange}
              data-cy="boyut-radio"
            />
            Orta
          </label>
        </div>
        <div className="boyut-options">
          <label>
            <input
              type="radio"
              name="boyut"
              value="büyük"
              onChange={onChange}
              data-cy="boyut-radio"
            />
            Büyük
          </label>
        </div>
      </form>
    </div>
  );
}

export default PizzaBoyutu;
