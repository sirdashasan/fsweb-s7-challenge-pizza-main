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
import { useEffect, useState } from "react";
import HeaderNav from "../components/HeaderNav";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export default function Order() {
  const location = useLocation();
  const { order } = location.state;

  const [orderDetails, setOrderDetails] = useState({
    size: null,
    dough: "",
    ingredients: [],
    name: "",
    note: "",
    selectedProduct: order?.name,
    selectedPrice: 0,
    totalPrice: order?.price,
    quantity: 1,
  });

  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientsChange = (e) => {
    if (orderDetails.ingredients.includes(e.target.value)) {
      setOrderDetails({
        ...orderDetails,
        ingredients: orderDetails.ingredients.filter(
          (item) => item !== e.target.value
        ),
      });
    } else {
      setOrderDetails({
        ...orderDetails,
        ingredients: [...orderDetails.ingredients, e.target.value],
      });
    }
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    setOrderDetails({
      ...orderDetails,
      quantity: orderDetails.quantity + 1,
    });
  };

  const handleDecrease = (e) => {
    e.preventDefault();
    setOrderDetails({
      ...orderDetails,
      quantity: orderDetails.quantity > 1 ? orderDetails.quantity - 1 : 1,
    });
  };

  const calculatePrice = () => {
    let newPrice = orderDetails.selectedPrice;
    if (orderDetails.size === "S") {
      newPrice = order.price;
    } else if (orderDetails.size === "M") {
      newPrice = order.price * 1.25;
    } else if (orderDetails.size === "L") {
      newPrice = order.price * 2;
    }

    const ingredientsPrice =
      orderDetails.ingredients.length * 5 * orderDetails.quantity;
    setOrderDetails({
      ...orderDetails,
      selectedPrice: ingredientsPrice,
      totalPrice: newPrice * orderDetails.quantity + ingredientsPrice,
    });
  };

  useEffect(() => {
    calculatePrice();
  }, [orderDetails.size, orderDetails.ingredients, orderDetails.quantity]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderDetails
      );
      if (response.status === 201) {
        history.push("/success", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isOrderButtonDisabled =
    !orderDetails.size ||
    !orderDetails.dough ||
    orderDetails.ingredients.length === 0 ||
    orderDetails.name.length < 3;

  console.log(orderDetails);

  return (
    <div className="d-flex  flex-column">
      <div className="order-header-container">
        <Header />
      </div>

      <Row className="mt-3 order-yazilar-container">
        <Col md={4} />
        <Col md={4}>
          <OrderYazilar
            selectedPrice={orderDetails.totalPrice} // selectedprice değiştim
            selectedProduct={orderDetails?.selectedProduct}
          />
        </Col>
        <Col md={4} />
      </Row>

      <Row className="mt-3">
        <Col md={4} />
        <Col md={2}>
          <PizzaBoyutu
            size={orderDetails.size}
            handleSizeChange={handleChange}
          />
        </Col>

        <Col md={2}>
          <HamurSecimi
            dough={orderDetails.dough}
            handleDoughChange={handleChange}
          />
        </Col>
        <Col md={4} />
      </Row>

      <Row className="order-malzemeler">
        <Col md={4} />
        <Col md={4}>
          <Malzemeler
            ingredients={orderDetails.ingredients}
            handleIngredientsChange={handleIngredientsChange}
          />
        </Col>
        <Col md={4} />
      </Row>

      <Row className="order-name">
        <Col md={4} />
        <Col md={4}>
          <NameInput name={orderDetails.name} handleNameChange={handleChange} />
        </Col>
        <Col md={4} />
      </Row>

      <Row class="order-not">
        <Col md={4} />
        <Col md={4}>
          <SiparisNotu
            note={orderDetails.note}
            handleNoteChange={handleChange}
          />
        </Col>
        <Col md={4} />
      </Row>

      <Row>
        <Col md={4} />
        <Col md={4}>
          <hr />
        </Col>
        <Col md={4} />
      </Row>

      <Row>
        <Col md={4} />
        <Col md={2}>
          <SiparisAdet
            quantity={orderDetails.quantity}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        </Col>
        <Col md={2} style={{ position: "relative", left: "-20px" }}>
          <CardComp
            selectedPrice={orderDetails.selectedPrice}
            totalPrice={orderDetails.totalPrice}
            handleSubmit={handleSubmit}
            isDisabled={isOrderButtonDisabled}
          />
        </Col>
        <Col md={2} />
      </Row>

      <Footer />
    </div>
  );
}
