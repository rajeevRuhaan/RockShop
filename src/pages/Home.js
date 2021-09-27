import React from "react";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div className="home">
      <body>
        <div className="home hero-banner">
          <img
            src="https://images.ctfassets.net/5g7b6ypj247n/7zR2feW9NmpihuvVFs7ZSR/96ea3bd07511a668b0e4ea3e41323c9c/pintoja-uusiksi-etusivu-krauta-hero.jpg?fl=progressive&fm=jpg&h=440&q=80&w=1760"
            alt="K-Rauta-hero-banner"
          />
          <div className="home product-categories">
            <h2>Product Categories</h2>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default Home;
