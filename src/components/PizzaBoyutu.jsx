function PizzaBoyutu({ onChange, boyutError }) {
  return (
    <div>
      <p>Boyut Seç {boyutError && <span className="text-danger">*</span>}</p>
      <form>
        <div>
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
        <div>
          <label>
            <input type="radio" name="boyut" value="orta" onChange={onChange} />
            Orta
          </label>
        </div>
        <div>
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
