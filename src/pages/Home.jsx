import BurgerCard from "../components/BurgerCard";
import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import HomeYazisi from "../components/HomeYazisi";
import KuryeCard from "../components/KuryeCard";
import MenuBar from "../components/MenuBar";
import MenuBarButtons from "../components/MenuBarButtons";
import PizzaCard from "../components/PizzaCard";

export default function Anasayfa() {
  return (
    <div>
      <div className="home-container">
        <Header />
        <HomeYazisi />
        <HomeButton />
      </div>
      <div style={{ backgroundColor: "#FAF7F2" }}>
        <div>
          <MenuBar />
        </div>

        <div>
          <div>
            <PizzaCard />
          </div>
          <div style={{ display: "flex" }}>
            <BurgerCard />
            <KuryeCard />
          </div>
        </div>

        <div
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
        </div>

        <MenuBarButtons />
        <p>55</p>
      </div>
    </div>
  );
}
