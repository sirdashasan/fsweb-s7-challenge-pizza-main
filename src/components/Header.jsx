import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="header-title">
          <p style={{ marginTop: "10px" }}>Teknolojik Yemekler</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
