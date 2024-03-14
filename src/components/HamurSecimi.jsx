function HamurSecimi({ dough, handleDoughChange }) {
  return (
    <div>
      <div style={{ fontFamily: "Roboto Condensed", fontWeight: "bold" }}>
        <div>
          <p>Hamur Seç {!dough && <span className="text-danger">*</span>}</p>
        </div>
      </div>
      <div className="hamur-title">
        <select
          className="hamur-select"
          name="dough"
          onChange={handleDoughChange}
          value={dough}
          data-cy="hamur-select"
        >
          <option value="">-- Hamur Kalınlığı Seç --</option>
          <option value="Kalın Kenar">Kalın Kenar</option>
          <option value="İnce Kenar">İnce Kenar</option>
        </select>
      </div>
    </div>
  );
}

export default HamurSecimi;
