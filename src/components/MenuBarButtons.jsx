import { Link } from "react-router-dom";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";

function MenuBarButtons({ active, setActive }) {
  const menuItems = [
    { id: 2, src: "/Assets/mile2-aseets/icons/1.svg", label: "Ramen" },
    { id: 1, src: "/Assets/mile2-aseets/icons/2.svg", label: "Pizza" },
    { id: 3, src: "/Assets/mile2-aseets/icons/3.svg", label: "Burger" },
    { id: 4, src: "/Assets/mile2-aseets/icons/4.svg", label: "French fries" },
    { id: 8, src: "/Assets/mile2-aseets/icons/5.svg", label: "Fast food" },
    { id: 5, src: "/Assets/mile2-aseets/icons/6.svg", label: "Soft drinks" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    setActive(e.target.name);
  };

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
        <Link key={item.id} className="menu-item-buttons">
          <button
            style={{
              fontFamily: "Roboto Condensed",
              fontWeight: "500",
              borderRadius: "50px",
              backgroundColor: active === item.label ? "#292929" : "white",
              color: active !== item.label ? "#292929" : "white",
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
            name={item.label}
            onClick={handleClick}
            //onClick={scrollToTop}
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
