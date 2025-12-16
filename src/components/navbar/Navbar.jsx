import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import CartDrawer from "../CartDrawer/CartDrawer";
import { CartContext } from "../../context/CartContext";
const Navbar = () => {
  const [open, setopen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [time, setTime] = useState(new Date());
  const { cart } = useContext(CartContext);
  const cartcount = cart.reduce((sum, item) => sum + item.qty, 0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // ensures 24-hour format
    });
  };

  return (
    <>
      <header className="navbar">
        <div className="navheading">
          <Link to="/VaerClothingBrand">
            <p>VAER</p>
          </Link>
        </div>
        <div className="endnavheading">
          <div className="time">
            <p>{formatTime(time)}</p>
          </div>
          <div className="hamburger">
            <img
              className={`hamburger ${open ? "active" : ""}`}
              onClick={() => setopen(!open)}
              src={assets.ftt}
              alt=""
              width="38"
              height="38"
            />
          </div>
          <div className="bag" onClick={() => setCartOpen(true)}>
            <img
              src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="black"><path d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm36.84-.8-5.6,56A8,8,0,0,0,174.4,184a7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.16-8.76ZM239.93,89.06,224.86,202.12A16.06,16.06,0,0,1,209,216H47a16.06,16.06,0,0,1-15.86-13.88L16.07,89.06A8,8,0,0,1,24,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H232a8,8,0,0,1,7.93,9.06ZM89.63,80h76.74L128,36.15ZM222.86,96H33.14L47,200H209Z"></path></svg>'
              alt="icon"
              width="25"
              height="25"
            />
            <div className="count">{cartcount}</div>
          </div>
        </div>
      </header>

      <div className={`menu-overlay ${open ? "show" : ""}`}>
        <ul>
          <Link to="/VaerClothingBrand">
            <li onClick={() => setopen(false)}>Home</li>
          </Link>
          <Link to="/VaerClothingBrand/shop">
            <li onClick={() => setopen(false)}>Shop</li>
          </Link>
          <Link to="/VaerClothingBrand/about">
            <li onClick={() => setopen(false)}>About VÆR</li>
          </Link>
        </ul>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
