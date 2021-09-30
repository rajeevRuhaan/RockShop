import React from "react";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";

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
            <h2>Rocks Categories</h2>

            <ul>
              <Link to={"/products"}>
                <li>
                  Igneous Rocks
                  <img
                    src="http://lh3.googleusercontent.com/-eqzNlFail9c/URN81RdqSII/AAAAAAAAIlg/C0bdrsCUm_U/s720/Igneous%252520rocks%252520gabbro%252520andesite%252520pegmatite%252520basalt%252520pumice%252520porphyry%252520obsidian%252520granite%252520tuff.jpg"
                    atl="igneous rock"
                  />
                </li>
              </Link>
              <Link to="/products">
                <li>
                  Sedimentary Rocks
                  <img
                    src="http://lh3.googleusercontent.com/-LuCj_kT7svA/UYN61NaWF0I/AAAAAAAAHHg/pQjiKmsIlE8/s720/00753%252520Sedimentary%252520Rocks%252520Collage%252520clay%252520limestone%252520sandstone%252520sylvine%252520chalcedony%252520coal%252520phosphorite%252520conglomerate%252520bauxite.jpg"
                    atl="sedimentatry rock"
                  />
                </li>
              </Link>
              <Link to="/products">
                <li>
                  Metamorphic Rocks
                  <img
                    src="https://www.worldatlas.com/r/w1200/upload/2d/be/03/shutterstock-483429490.jpg"
                    atl="metamorphic rock"
                  />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default Home;
