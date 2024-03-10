import Header from "../components/Header";
import HomeButton from "../components/HomeButton";
import HomeYazisi from "../components/HomeYazisi";

export default function Anasayfa() {
  return (
    <div className="home-container">
      <Header />
      <HomeYazisi />
      <HomeButton />
    </div>
  );
}
