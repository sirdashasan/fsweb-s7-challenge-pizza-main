import PizzaBoyutu from "../components/PizzaBoyutu";
import HamurSecimi from "../components/HamurSecimi";
import Malzemeler from "../components/Malzemeler";
import SiparisNotu from "../components/SiparisNotu";
import Header from "../components/Header";
import SiparisAdet from "../components/SiparisAdet";
import CardComp from "../components/CardComp";
import { Col, Row } from "reactstrap";
import OrderYazilar from "../components/OrderYazilar";
import NameInput from "../components/NameInput";
import { useState } from "react";
import HeaderNav from "../components/HeaderNav";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Order() {
  const history = useHistory();
  const [selectedSize, setSelectedSize] = useState("");
  const [isSizeError, setIsSizeError] = useState(true); // Başta * görünmesi için true yaptım

  const [selectedDough, setSelectedDough] = useState("");
  const [isDoughError, setIsDoughError] = useState(true);

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const isIngredientsError =
    selectedIngredients.length < 4 || selectedIngredients.length > 10;

  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(true);

  const [specialNote, setSpecialNote] = useState("");

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleSizeChange = (selectedValue) => {
    setSelectedSize(selectedValue);
    setIsSizeError(!selectedValue);
  };

  const handleDoughChange = (e) => {
    setSelectedDough(e.target.value);
    setIsDoughError(e.target.value === ""); // Eğer seçilen değer boşsa hata true olsun
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameError(e.target.value.length < 3);
  };

  const handleSpecialNoteChange = (e) => {
    setSpecialNote(e.target.value);
  };

  const isOrderButtonDisabled =
    !selectedSize || !selectedDough || isIngredientsError || isNameError;

  const handleSubmit = () => {
    const formData = {
      isim: name,
      boyut: selectedSize,
      hamur: selectedDough,
      malzemeler: selectedIngredients,
      ozel: specialNote,
    };

    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        setIsOrderPlaced(true);
        history.push("/success", { formData });
        console.log("Sipariş özeti:", response.data);
      })
      .catch((error) => {
        console.warn("Sipariş gönderilirken hata oluştu:", error);
      });
  };

  return (
    <div className="d-flex  flex-column">
      <div style={{ backgroundColor: " #CE2829", height: "80px" }}>
        <Header />
      </div>

      <div style={{ backgroundColor: "#FAF7F2" }}>
        <div
          style={{
            marginTop: "-50px",
            zIndex: 1,
            position: "relative",
          }}
          className="d-flex justify-content-center"
        >
          <div
            style={{
              clipPath: "inset(80px 0 0 0)",
              overflow: "hidden",
              marginTop: "-30px",
            }}
          >
            <img src="/Assets/mile2-aseets/pictures/form-banner.png" alt="" />
          </div>
        </div>

        <Row style={{ color: "black", marginTop: "30px" }}>
          <Col md={4} />
          <Col md={4}>
            <HeaderNav />
          </Col>
          <Col md={4} />
        </Row>

        <Row className="mt-3">
          <Col md={4} />
          <Col md={4}>
            <OrderYazilar />
          </Col>
          <Col md={4} />
        </Row>
      </div>

      <Row
        style={{
          marginTop: "20px",
        }}
        className=" mb-3"
      >
        <Col md={4} />
        <Col md={2}>
          <PizzaBoyutu onChange={handleSizeChange} boyutError={isSizeError} />
        </Col>

        <Col md={2}>
          <HamurSecimi onChange={handleDoughChange} hamurError={isDoughError} />
        </Col>
        <Col md={4} />
      </Row>

      <Row className="justify-content-center">
        <Col md={4} />
        <Col md={4}>
          <Malzemeler
            selectedIngredients={selectedIngredients}
            setSelectedIngredients={setSelectedIngredients}
            malzemelerError={isIngredientsError}
          />
        </Col>
        <Col md={4} />
      </Row>

      <Row>
        <Col md={4} />
        <Col md={4}>
          <NameInput onChange={handleNameChange} nameError={isNameError} />
        </Col>
        <Col md={4} />
      </Row>

      <Row>
        <Col md={4} />
        <Col md={4}>
          <SiparisNotu
            onChange={handleSpecialNoteChange}
            specialNote={specialNote}
          />
        </Col>
        <Col md={4} />
      </Row>

      <Row>
        <Col md={4} />
        <Col md={4}>
          <hr style={{ marginTop: "5px", marginBottom: "20px" }} />
        </Col>
        <Col md={4} />
      </Row>

      <Row>
        <Col md={4} />
        <Col md={2}>
          <SiparisAdet />
        </Col>
        <Col md={2}>
          <CardComp
            isDisabled={isOrderButtonDisabled}
            handleSubmit={handleSubmit}
          />
        </Col>
        <Col md={4} />
      </Row>
    </div>
  );
}
