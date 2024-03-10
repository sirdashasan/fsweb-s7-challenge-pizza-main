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
      <div className="hamur-options">
        <select
          onChange={onChange}
          value={selectedDough}
          data-cy="hamur-select"
        >
          <option value="">Hamur Kalınlığı Seç</option>
          <option value="Kalın Kenar">Kalın Kenar</option>
          <option value="İnce Kenar">İnce Kenar</option>
        </select>
      </div>
    </div>
  );
}

export default HamurSecimi;
