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

export default function Order() {
  const [selectedSize, setSelectedSize] = useState("");
  const [isSizeError, setIsSizeError] = useState(true); // Başta * görünmesi için true yaptım

  const [selectedDough, setSelectedDough] = useState("");
  const [isDoughError, setIsDoughError] = useState(true);

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const isIngredientsError =
    selectedIngredients.length < 4 || selectedIngredients.length > 10;

  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState(true);

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
    setIsSizeError(!e.target.value);
  };

  const handleDoughChange = (e) => {
    setSelectedDough(e.target.value);
    setIsDoughError(e.target.value === ""); // Eğer seçilen değer boşsa hata true olsun
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameError(e.target.value.length < 3);
  };

  const isOrderButtonDisabled =
    !selectedSize || !selectedDough || isIngredientsError || isNameError;

  return (
    <div className="d-flex  flex-column">
      <Row className="mb-3">
        <Col md={4} />
        <Col md={4}>
          <Header />
        </Col>
        <Col md={4} />
      </Row>

      <Row>
        <Col md={4} />
        <Col md={4}>
          <OrderYazilar />
        </Col>
        <Col md={4} />
      </Row>

      <Row className="mb-3">
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
          <SiparisNotu />
        </Col>
        <Col md={4} />
      </Row>

      <Row>
        <Col md={4} />
        <Col md={2}>
          <SiparisAdet />
        </Col>
        <Col md={2}>
          <CardComp isDisabled={isOrderButtonDisabled} />
        </Col>
        <Col md={4} />
      </Row>
    </div>
  );
}
