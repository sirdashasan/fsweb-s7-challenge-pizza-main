import { Col, Row } from "reactstrap";
import BurgerCard from "../components/BurgerCard";
import FoodCards from "../components/FoodCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import HomeYazisi from "../components/HomeYazisi";
import KuryeCard from "../components/KuryeCard";
import MenuBar from "../components/MenuBar";
import MenuBarButtons from "../components/MenuBarButtons";
import PizzaCard from "../components/PizzaCard";
import Products from "../components/Products.jsx";
import { useState } from "react";

export default function Anasayfa() {
  const [active, setActive] = useState("Pizza");

  return (
    <main>
      <header className="home-container">
        <Header />
        <HomeYazisi />
        <HomeButton />
      </header>

      <section style={{ backgroundColor: "#FAF7F2" }}>
        <nav>
          <Row>
            <Col md={3} />
            <MenuBar />
            <Col md={9} />
          </Row>
        </nav>

        <section>
          <PizzaCard />
          <BurgerCard />
          <KuryeCard />
        </section>

        <section
          style={{
            textAlign: "center",
            marginTop: "0px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontFamily: "Satisfy, sans-serif",
              color: "#CE2829",
              fontSize: "24px",
            }}
          >
            <p>en çok paketlenen menüler</p>
          </span>
          <span
            style={{
              fontFamily: "Roboto Condensed, sans-serif",
              color: "#292929",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Acıktıran Kodlara Doyuran Lezzetler
          </span>
        </section>

        <MenuBarButtons active={active} setActive={setActive} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginRight: "300px",
            marginLeft: "300px",
            justifyContent: "center",
          }}
          className="d-flex justify-content-center gx-3"
        >
          {Products.map(
            (product, index) =>
              active === product.type && (
                <section
                  key={product.id}
                  style={{
                    width: "30%",
                    padding: "1px",
                    textAlign: "center",
                  }}
                >
                  <FoodCards
                    imageSrc={product.image}
                    name={product.name}
                    price={product.price}
                    score={product.score}
                    comment={product.comment}
                    id={product.id}
                  />
                </section>
              )
          )}
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}
