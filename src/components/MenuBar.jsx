import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MenuBar() {
  const menuItems = [
    { id: 2, src: "/Assets/mile2-aseets/icons/1.svg", label: "YENİ! Kore" },
    { id: 1, src: "/Assets/mile2-aseets/icons/2.svg", label: "Pizza" },
    { id: 3, src: "/Assets/mile2-aseets/icons/3.svg", label: "Burger" },
    { id: 4, src: "/Assets/mile2-aseets/icons/4.svg", label: "Kızartmalar" },
    { id: 5, src: "/Assets/mile2-aseets/icons/5.svg", label: "Fast food" },
    { id: 3, src: "/Assets/mile2-aseets/icons/6.svg", label: "Gazlı İçecek" },
  ];

  return (
    <div className="menu-bar">
      {menuItems.map((item) => (
        <Link key={item.id} to={`/order/${item.id}`} className="menu-item">
          <img src={item.src} alt={item.label} />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default MenuBar;
