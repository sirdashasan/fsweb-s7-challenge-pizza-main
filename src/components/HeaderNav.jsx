import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <div className="header-nav-container">
      <div className="header-title">
        <p>Teknolojik Yemekler</p>
      </div>
      <div className="header-nav">
        <Link to={"/"}>Anasayfa</Link>
      </div>
    </div>
  );
}

export default HeaderNav;
