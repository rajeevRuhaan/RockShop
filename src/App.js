import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
// import { useRouteMatch } from "react-router-dom";

import "./App.scss";

function App() {
  // let match = useRouteMatch();
  // console.log(match);

  return (
    <div className="App">
      <Router>
        <div className="links">
          <header>
            <h1 className="logo">Rocks-&-Shop</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Switch>
              <Route path={`/products`} exact>
                <Products />
              </Route>

              <Route path={`/products/:id`} exact>
                <SingleProduct />
              </Route>

              <Route path="/cart">
                <Cart />
              </Route>

              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
