import React from "react";
import "./explore3.css";
import {  product_list3 } from "../../assets/assets";
import { Link } from "react-router-dom";

const Explore3 = ({handleClick}) => {
  return (
    <div className="page2">
      <div className="page2head">
        <h1>MOMENTUM // DROP 003</h1>
      </div>
      <div className="page2section">
        {product_list3.map((item, index) => {
          return (
            <div className="page2collection" key={item.id || index}>
              <div className="page2img">
       <img onClick={()=>handleClick(item)} src={item.image} alt="" />
              </div>
              <div className="captions">
                <div className="page2name">
                  <p>{item.name}</p>
                </div>
                <div className="page2price">
                  <p>${item.price}</p>
                </div>
                <div className="page2description">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore3;
