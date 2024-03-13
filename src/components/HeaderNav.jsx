import { Link } from "react-router-dom";

function HeaderNav() {
  return (
    <div className="d-flex flex-row">
      <div
        style={{
          top: "80px",
          left: "515px",
          fontWeight: "300",
        }}
      >
        <Link
          to={"/"}
          style={{
            fontWeight: "bold",
            fontSize: "12px",
            color: "#5f5f5f",
            textDecoration: "none",
            fontFamily: "Roboto Condensed",
          }}
        >
          Anasayfa -
        </Link>
        <Link
          to={"/"}
          style={{
            fontWeight: "bold",
            fontSize: "12px",
            color: "#5f5f5f",
            textDecoration: "none",
            fontFamily: "Roboto Condensed",
          }}
        >
          Seçenekler -
        </Link>

        <Link
          to={"/"}
          style={{
            color: "#ce2829",
            fontWeight: "bold",
            fontSize: "12px",
            textDecoration: "none",
            fontFamily: "Roboto Condensed",
          }}
        >
          Sipariş Oluştur
        </Link>
      </div>
    </div>
  );
}

export default HeaderNav;
