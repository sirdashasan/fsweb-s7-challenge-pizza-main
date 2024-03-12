import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  return (
    <div style={{ backgroundColor: "#292929" }}>
      <div
        className="d-flex justify-content-center"
        style={{
          backgroundColor: "#292929",
          color: "white",
          fontFamily: "Roboto Condensed",
          marginLeft: "0px",
          height: "400px",
        }}
      >
        <div
          style={{
            marginRight: "30px",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              marginTop: "30px",
              fontFamily: "Barlow",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <h2>
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
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 341 Londonderry Road,
              <br />
              Istanbul Türkiye
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              aciktim@teknolojikyemekler.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +90 216 123 45 67
            </p>
          </div>
        </div>
        <div>
          <h6
            style={{
              marginTop: "60px",
              marginBottom: "55px",
            }}
          >
            Sıcacık Menuler
          </h6>
          <div
            style={{
              fontSize: "10px",
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
          <h6 style={{ marginTop: "55px" }}>Instagram</h6>
          <div className="d-flex flex-column">
            <div
              className="d-flex"
              style={{ marginBottom: "10px", marginRight: "10px" }}
            >
              <img
                style={{ marginRight: "10px" }}
                src="/Assets/mile2-aseets/footer/insta/li-0.png"
                alt=""
              />
              <img
                style={{ marginRight: "10px" }}
                src="/Assets/mile2-aseets/footer/insta/li-1.png"
                alt=""
              />
              <img src="/Assets/mile2-aseets/footer/insta/li-2.png" alt="" />
            </div>
            <div className="d-flex">
              <img
                style={{ marginRight: "10px" }}
                src="/Assets/mile2-aseets/footer/insta/li-3.png"
                alt=""
              />
              <img
                style={{ marginRight: "10px" }}
                src="/Assets/mile2-aseets/footer/insta/li-4.png"
                alt=""
              />
              <img src="/Assets/mile2-aseets/footer/insta/li-5.png" alt="" />
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
              marginTop: "-70px",
              marginBottom: "-70px",
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
