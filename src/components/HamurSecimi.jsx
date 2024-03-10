function HamurSecimi({ onChange, hamurError, selectedDough }) {
  return (
    <div>
      <div className="hamur-title">
        <p>Hamur Seç {hamurError && <span className="text-danger">*</span>}</p>
      </div>
      <div className="hamur-options">
        <select onChange={onChange} value={selectedDough}>
          <option value="">Hamur Kalınlığı Seç</option>
          <option value="Kalın Kenar">Kalın Kenar</option>
          <option value="İnce Kenar">İnce Kenar</option>
        </select>
      </div>
    </div>
  );
}

export default HamurSecimi;
