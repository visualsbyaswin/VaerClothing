import React from "react";
import "./feature.css";
import {allfeature} from "../../assets/featured"
import { Link } from "react-router-dom";
const Feature = () => {
  return (
      <div className="page2">
         <div className="page2head">
           <h1>YOU MAY ALSO LIKE THIS PIECES</h1>
         </div>
         <div className="page2section">
           {allfeature.map((item, index) => {
             return (
               <div className="page2collection" key={item.id || index}>
                 <div className="page2img">
        <Link to="/VaerClothingBrand/shop">     <img src={item.image} alt="" /></Link>
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

export default Feature;
