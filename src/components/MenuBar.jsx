import { Link } from "react-router-dom";
import React from "react";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";

function MenuBar() {
  const menuItems = [
    { id: 2, src: "/Assets/mile2-aseets/icons/1.svg", label: "YENİ! Kore" },
    { id: 1, src: "/Assets/mile2-aseets/icons/2.svg", label: "Pizza" },
    { id: 3, src: "/Assets/mile2-aseets/icons/3.svg", label: "Burger" },
    { id: 4, src: "/Assets/mile2-aseets/icons/4.svg", label: "Kızartmalar" },
    { id: 3, src: "/Assets/mile2-aseets/icons/5.svg", label: "Fast food" },
    { id: 5, src: "/Assets/mile2-aseets/icons/6.svg", label: "Gazlı İçecek" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        fontFamily: "Roboto Condensed",
        top: "0",
        width: "100%",
        bottom: "0",
        left: "0",
        backgroundColor: "white",
        zIndex: "1000",
        height: "80px",
        color: "#292929",
      }}
    >
      {menuItems.map((item) => (
        <Link
          key={item.id}
          to={`/order/${item.id}`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            paddingLeft: "15px",
            margin: "20px",
            alignItems: "center",
            color: "#292929",
            textDecoration: "none",
          }}
          onClick={scrollToTop}
        >
          <img
            src={item.src}
            alt={item.label}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              width: "25px",
              height: "25px",
            }}
          />
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              fontFamily: "Roboto Condensed",
              margin: "10px",
              fontSize: "15px",
            }}
          >
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default MenuBar;
