import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ScrollToTopButton, scrollToTop } from "./ScrollToTopButton";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div
          style={{
            marginRight: "30px",
          }}
        >
          <div className="footer-section footer-contact-info">
            <Link
              onClick={scrollToTop}
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              className="footer-title"
            >
              <h2 style={{ fontSize: "36px" }}>
                Teknolojik <br /> Yemekler
              </h2>
            </Link>
          </div>
          <div
            style={{
              fontSize: "10px",
              marginTop: "30px",
            }}
          >
            <p>
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faMapMarkerAlt}
              />{" "}
              341 Londonderry Road,
              <br />
              Istanbul Türkiye
            </p>
            <p>
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faEnvelope} />{" "}
              aciktim@teknolojikyemekler.com
            </p>
            <p>
              <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faPhone} />{" "}
              +90 216 123 45 67
            </p>
          </div>
        </div>
        <div>
          <h6
            style={{
              marginTop: "100px",
              marginBottom: "55px",
            }}
          >
            Sıcacık Menuler
          </h6>
          <div
            style={{
              fontSize: "10px",
              marginTop: "60px",
            }}
          >
            <p style={{ margin: "5px 0" }}>Terminal Pizza</p>
            <p style={{ margin: "5px 0" }}>5 Kişilik Hackathlon Pizza</p>
            <p style={{ margin: "5px 0" }}>useEffect Tavuklu Pizza</p>
            <p style={{ margin: "5px 0" }}>Beyaz Console Frosty</p>
            <p style={{ margin: "5px 0" }}>Testler Geçti Mutlu Burger</p>
            <p style={{ margin: "5px 0" }}>Position Absolute Acı Burger</p>
          </div>
        </div>
        <div style={{ marginLeft: "250px" }}>
          <h6 style={{ marginTop: "100px" }}>Instagram</h6>
          <div className="d-flex flex-column">
            <div
              className="d-flex"
              style={{ marginBottom: "10px", marginRight: "10px" }}
            >
              <img
                style={{ marginRight: "10px", width: "70px", height: "70px" }}
                src="/Assets/mile2-aseets/footer/insta/li-0.png"
                alt=""
              />
              <img
                style={{ marginRight: "10px", width: "70px", height: "70px" }}
                src="/Assets/mile2-aseets/footer/insta/li-1.png"
                alt=""
              />
              <img
                style={{ marginRight: "10px", width: "70px", height: "70px" }}
                src="/Assets/mile2-aseets/footer/insta/li-2.png"
                alt=""
              />
            </div>
            <div className="d-flex">
              <img
                style={{ marginRight: "10px", width: "70px", height: "70px" }}
                src="/Assets/mile2-aseets/footer/insta/li-3.png"
                alt=""
              />
              <img
                style={{ marginRight: "10px", width: "70px", height: "70px" }}
                src="/Assets/mile2-aseets/footer/insta/li-4.png"
                alt=""
              />
              <img
                style={{ marginRight: "10px", width: "70px", height: "70px" }}
                src="/Assets/mile2-aseets/footer/insta/li-5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          style={{
            color: "white",
            marginTop: "10px",
          }}
          className="d-flex justify-content-around"
        >
          <hr
            style={{
              position: "absolute",
              marginTop: "-10px",

              width: "%100",
            }}
          />

          <p>© 2023 Teknolojik Yemekler</p>
          <p>
            <FontAwesomeIcon icon={faX} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
