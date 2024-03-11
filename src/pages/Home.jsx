import BurgerCard from "../components/BurgerCard";
import FoodCards from "../components/FoodCards";
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
        <div style={{}} className="d-flex justify-content-center gx-3">
          <FoodCards
            imageSrc="/Assets/mile2-aseets/pictures/food-1.png"
            imageName="Terminal Pizza"
          />
          <FoodCards
            imageSrc="/Assets/mile2-aseets/pictures/food-2.png"
            imageName="Position Absolute Acı Pizza"
          />
          <FoodCards
            imageSrc="/Assets/mile2-aseets/pictures/food-3.png"
            imageName="useEffect Tavuklu Burger"
          />
        </div>
      </div>
    </div>
  );
}
