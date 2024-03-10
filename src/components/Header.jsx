import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <p>Teknolojik Yemekler</p>
      <nav>
        <Link to={"/Home"}>Anasayfa -</Link>
        <Link>Seçenekler -</Link>
        <Link>Sipariş Oluştur</Link>
      </nav>
    </div>
  );
}

export default Header;
