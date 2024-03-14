import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <div className="d-flex flex-row">
      <div className="header-nav ">
        <Link to={"/"} className="header-nav-link">
          Anasayfa -
        </Link>
        <Link to={"/"} className="header-nav-link">
          Seçenekler -
        </Link>

        <Link to={"/"} className="header-nav-link" style={{ color: "#CE2829" }}>
          Sipariş Oluştur
        </Link>
      </div>
    </div>
  );
}

export default HeaderNav;
