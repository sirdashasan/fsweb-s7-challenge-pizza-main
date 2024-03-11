import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MenuBar() {
  const menuItems = [
    { src: "/Assets/mile2-aseets/icons/1.svg", label: "YENİ! Kore" },
    { src: "/Assets/mile2-aseets/icons/2.svg", label: "Pizza" },
    { src: "/Assets/mile2-aseets/icons/3.svg", label: "Burger" },
    { src: "/Assets/mile2-aseets/icons/4.svg", label: "Kızartmalar" },
    { src: "/Assets/mile2-aseets/icons/5.svg", label: "Fast food" },
    { src: "/Assets/mile2-aseets/icons/6.svg", label: "Gazlı İçecek" },
  ];

  return (
    <div className="menu-bar">
      {menuItems.map((item) => (
        <Link key={item.id} to={`/product/${item.id}`} className="menu-item">
          <img src={item.src} alt={item.label} />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default MenuBar;
