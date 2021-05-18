import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage/CartPage";
import NavBar from "./components/NavBar";
import ProductCatalog from "./components/ProductService/ProductCatalog";
import CartContextHandler, { CartContext } from "./context/CartContext";

function App() {
  const context = CartContextHandler();

  return (
    <div className="App">
      <CartContext.Provider value={context}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ProductCatalog} />
            <Route exact path="/products" component={ProductCatalog} />
            <Route path={"/cart"} component={CartPage} />
          </Switch>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
