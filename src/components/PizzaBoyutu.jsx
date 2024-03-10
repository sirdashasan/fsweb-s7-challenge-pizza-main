function PizzaBoyutu({ onChange, boyutError }) {
  return (
    <div>
      <div className="boyut-title">
        <p>Boyut Seç {boyutError && <span className="text-danger">*</span>}</p>
      </div>
      <form>
        <div className="boyut-options">
          <label>
            <input
              type="radio"
              name="boyut"
              value="küçük"
              onChange={onChange}
            />
            Küçük
          </label>
        </div>
        <div className="boyut-options">
          <label>
            <input type="radio" name="boyut" value="orta" onChange={onChange} />
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
            />
            Büyük
          </label>
        </div>
      </form>
    </div>
  );
}

export default PizzaBoyutu;
