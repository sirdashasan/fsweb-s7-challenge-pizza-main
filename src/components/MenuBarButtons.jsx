import { Link } from "react-router-dom";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";

function MenuBarButtons() {
  const menuItems = [
    { id: 2, src: "/Assets/mile2-aseets/icons/1.svg", label: "Ramen" },
    { id: 1, src: "/Assets/mile2-aseets/icons/2.svg", label: "Pizza" },
    { id: 3, src: "/Assets/mile2-aseets/icons/3.svg", label: "Burger" },
    { id: 4, src: "/Assets/mile2-aseets/icons/4.svg", label: "French fries" },
    { id: 8, src: "/Assets/mile2-aseets/icons/5.svg", label: "Fast food" },
    { id: 5, src: "/Assets/mile2-aseets/icons/6.svg", label: "Soft drinks" },
  ];

  return (
    <div
      style={{
        fontFamily: "Roboto Condensed",
        fontSize: "12px",
        top: "0",
        bottom: "0",
        left: "0",
        zIndex: "1000",
        color: "#292929",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {menuItems.map((item) => (
        <Link key={item.id} to={`/order/${item.id}`} className="menu-item">
          <button
            style={{
              fontFamily: "Roboto Condensed",
              fontWeight: "500",
              borderRadius: "50px",
              backgroundColor: "white",
              color: "#292929",
              border: "2px solid white",
              padding: "0px 0px",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              marginLeft: "26px",
              width: "114px",
              height: "50px",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#292929";
              e.currentTarget.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#292929";
            }}
            onClick={scrollToTop}
          >
            <img
              src={item.src}
              alt={item.label}
              style={{ width: "25px", margin: "5px" }}
            />
            <span>{item.label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default MenuBarButtons;
