import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CartPage from "./components/CartPage/CartPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path={"/cart"} component={CartPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
