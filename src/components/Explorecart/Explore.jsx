import React from "react";
import "./explore.css";
import { product_list } from "../../assets/assets";
import { Link } from "react-router-dom";
const Explore = ({ handleClick }) => {
  return (
    <div className="page2">
      <div className="page2head">
        <h1>GENESIS // DROP 001</h1>
      </div>
      <div className="page2section">
        {product_list.map((product, index) => {
          return (
            <div className="page2collection" key={product.id || index}>
              <div className="page2img">
                <img
                  src={product.image}
                  alt=""
                  onClick={() => handleClick(product)}
                />
              </div>
              <div className="captions">
                <div className="page2name">
                  <p>{product.name}</p>
                </div>
                <div className="page2price">
                  <p>${product.price}</p>
                </div>
                <div className="page2description">
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
