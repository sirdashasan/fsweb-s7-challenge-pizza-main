import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <Link to="/" className="header-container-link">
        <div className="header-title">
          <p>Teknolojik Yemekler</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
