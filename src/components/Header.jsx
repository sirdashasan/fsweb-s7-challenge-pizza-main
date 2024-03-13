import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "120px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            fontFamily: "Roboto Condensed",
          }}
        >
          <p
            style={{
              marginBottom: "40px",
            }}
          >
            Teknolojik Yemekler
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
