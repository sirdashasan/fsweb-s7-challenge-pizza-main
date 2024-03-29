import "./App.css";
import Order from "./pages/Order";
import Success from "./pages/Success";
import Home from "./pages/Home";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order/:id">
        <Order />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
      <Route path="/product">
        <Success />
      </Route>
    </div>
  );
}

export default App;
