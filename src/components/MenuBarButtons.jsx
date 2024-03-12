import { Link } from "react-router-dom";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";

function MenuBarButtons() {
  const menuItems = [
    { id: 2, src: "/Assets/mile2-aseets/icons/1.svg", label: "Ramen" },
    { id: 1, src: "/Assets/mile2-aseets/icons/2.svg", label: "Pizza" },
    { id: 3, src: "/Assets/mile2-aseets/icons/3.svg", label: "Burger" },
    { id: 4, src: "/Assets/mile2-aseets/icons/4.svg", label: "French fries" },
    { id: 3, src: "/Assets/mile2-aseets/icons/5.svg", label: "Fast food" },
    { id: 5, src: "/Assets/mile2-aseets/icons/6.svg", label: "Soft drinks" },
  ];

  return (
    <div className="menu-bar-buttons">
      {menuItems.map((item) => (
        <Link key={item.id} to={`/order/${item.id}`} className="menu-item">
          <button
            className="menu-button"
            style={{
              borderRadius: "50px",
              backgroundColor: "white",
              color: "#292929",
              border: "2px solid white",
              padding: "10px 15px",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              margin: "-20px",
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
            <img src={item.src} alt={item.label} />
            <span>{item.label}</span>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default MenuBarButtons;
