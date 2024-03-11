import BurgerCard from "../components/BurgerCard";
import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import HomeYazisi from "../components/HomeYazisi";
import KuryeCard from "../components/KuryeCard";
import MenuBar from "../components/MenuBar";
import PizzaCard from "../components/PizzaCard";

export default function Anasayfa() {
  return (
    <>
      <div className="home-container">
        <Header />
        <HomeYazisi />
        <HomeButton />
      </div>
      <div>
        <MenuBar />
      </div>
      <div>
        <PizzaCard />
        <div style={{ display: "flex" }}>
          <BurgerCard />
          <KuryeCard />
        </div>
      </div>
    </>
  );
}
