import React from "react";
import "./shop.css";
import { allitems } from "../../assets/allitems";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="sectionshop">
      <div className="headings">
        <h1>Designed for the Future</h1>
        <p>
          A selection of statement pieces that redefine style, precision, and
          innovation.
        </p>
      </div>

      <div className="allsection">
        {allitems.map((p, i) => (
          <div className="page2collection" key={p.id || i}>
            <div className="page2img">
              <Link to={`/VaerClothingBrand/checkout/${p.id}`}>
                <img src={p.image} alt={p.name} />
              </Link>
            </div>
            <div className="captions">
              <div className="page2name">
                <p>{p.name}</p>
              </div>
              <div className="page2price">
                <p>${p.price}</p>
              </div>
              <div className="page2description">
                <p>{p.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
