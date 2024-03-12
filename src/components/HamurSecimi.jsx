function HamurSecimi({ onChange, hamurError, selectedDough }) {
  return (
    <div>
      <div className="hamur-title">
        <div className="hamur-error">
          <p>
            Hamur Seç {hamurError && <span className="text-danger">*</span>}
          </p>
        </div>
      </div>
      <div
        style={{
          fontFamily: "Roboto Condensed",
          fontSize: "12px",
        }}
        className="hamur-options"
      >
        <select
          onChange={onChange}
          value={selectedDough}
          data-cy="hamur-select"
          style={{
            height: "40px",
            width: "200px",
            backgroundColor: "#FAF7F2",
            border: "none",
            borderRadius: "5px",
          }}
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
