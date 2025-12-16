import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="mainfooter">
        <div className="newslettersection">
           <div>
            <p>Join Our Newsletter!</p>
           </div>
           <div>
            <input type="text" placeholder="newsletter@vaertemplate.com" />
           </div>
           <div>
            <button>Join</button>
           </div>
        </div>
        <div className="footernavsection">
          <Link to="/VaerClothingBrand"> <p>Home</p></Link> 
         <Link to="/VaerClothingBrand/shop"> <p>Shop</p></Link> 
         <Link to="/VaerClothingBrand/about"> <p>About</p></Link> 
        </div>
      </div>
<div className="copy">
          <h2>© 2025 Marto. All rights reserved.</h2>
</div>
    </footer>
  );
};

export default Footer;
