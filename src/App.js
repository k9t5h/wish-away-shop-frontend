import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductCatalog from "./components/ProductService/ProductCatalog";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductCatalog} />
          <Route exact path="/products" component={ProductCatalog} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
