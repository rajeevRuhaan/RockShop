import React from "react";
import Footer from "../component/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <div className="home hero-banner">
        <img
          src="https://images.ctfassets.net/5g7b6ypj247n/7zR2feW9NmpihuvVFs7ZSR/96ea3bd07511a668b0e4ea3e41323c9c/pintoja-uusiksi-etusivu-krauta-hero.jpg?fl=progressive&fm=jpg&h=440&q=80&w=1760"
          alt="K-Rauta-hero-banner"
        />
        <div className="home product-categories">
          <h2>Product Categories</h2>
          <Router>
            <ul>
              <Link to={"/products"}>
                <li>Category 1</li>
              </Link>
              <Link to="/products">
                <li>Category 2</li>
              </Link>
              <Link to="/products">
                <li>Category 3</li>
              </Link>
            </ul>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
