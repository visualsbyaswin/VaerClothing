import React from "react";
import "./layout.css";
import { aboutlist } from "../../assets/about";
const Layout = () => {
  return (
    <div className="mainlayout">
      <div className="text-layout">
        <h1>Built for Expression.</h1>
        <p>
          At VAER, we merge form and function to craft timeless pieces that go
          beyond trends — born from purpose, driven by detail.
        </p>
      </div>
      <div className="contentslayout">
        {aboutlist.map((item, i) => {
          return (
            <div className="items" key={item.id || i}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Layout;
