function HamurSecimi({ onChange, hamurError, selectedDough }) {
  return (
    <div>
      <p>Hamur Seç {hamurError && <span className="text-danger">*</span>}</p>
      <select onChange={onChange} value={selectedDough}>
        <option value="">Hamur Kalınlığı Seç</option>
        <option value="Kalın Kenar">Kalın Kenar</option>
        <option value="İnce Kenar">İnce Kenar</option>
      </select>
    </div>
  );
}

export default HamurSecimi;
