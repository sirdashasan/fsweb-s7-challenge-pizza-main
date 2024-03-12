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
import Footer from "../components/Footer";
import Products from "../components/Products";

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

  const [selectedProduct, setSelectedProduct] = useState(null);

  const [selectedPrice, setSelectedPrice] = useState();

  const [totalPrice, setTotalPrice] = useState();

  const handleQuantityChange = (quantity) => {
    setTotalPrice(
      quantity === "null" ? selectedPrice.price : selectedPrice.price * quantity
    );
  };

  const handleSelectPrice = (productId) => {
    const selected = Products.find((product) => product.id === productId);
    setSelectedPrice(selected);
  };

  const handleSelectProduct = (productId) => {
    const selected = Products.find((product) => product.id === productId);
    setSelectedProduct(selected);
  };

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
      <div
        style={{
          backgroundColor: " #CE2829",
          height: "80px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <Header />
      </div>

      <div style={{ backgroundColor: "#FAF7F2" }}>
        <div className="d-flex justify-content-center">
          <div
            style={{
              marginTop: "40px",
              marginBottom: "20px",
              marginLeft: "120px",
              position: "relative",
              zIndex: 0,
            }}
          >
            {selectedProduct && ( // Eğer bir ürün seçildiyse
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            )}
          </div>
        </div>

        <Row className="mt-3">
          <Col md={4} />
          <Col md={4}>
            <OrderYazilar
              onSelectProduct={handleSelectProduct}
              onSelectPrice={handleSelectPrice}
            />
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
          <SiparisAdet onQuantityChange={handleQuantityChange} />
        </Col>
        <Col md={2}>
          <CardComp
            isDisabled={isOrderButtonDisabled}
            handleSubmit={handleSubmit}
            selectedPrice={selectedPrice ? selectedPrice.price : 0}
            totalPrice={totalPrice} //
          />
        </Col>
        <Col md={4} />
      </Row>

      <Footer />
    </div>
  );
}
