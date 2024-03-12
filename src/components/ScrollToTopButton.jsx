import React from "react";

// Sayfaları en yukardan yüklemesi için bileşen

function scrollToTop() {
  window.scrollTo(0, 0);
}

function ScrollToTopButton() {
  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#292929",
        color: "white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        border: "none",
        cursor: "pointer",
      }}
    >
      ↑
    </button>
  );
}

export { scrollToTop, ScrollToTopButton };
