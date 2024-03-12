import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <div className="d-flex flex-row">
      <div className="header-nav">
        <Link to={"/"} className="header-nav-link">
          Anasayfa -
        </Link>
        <Link to={"/"} className="header-nav-link">
          Seçenekler -
        </Link>

        <Link to={"/"} className="header-nav-link header-nav-red-text">
          Sipariş Oluştur
        </Link>
      </div>
    </div>
  );
}

export default HeaderNav;
