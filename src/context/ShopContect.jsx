import React, { createContext, useState } from "react";

import all_product from "../components/Assets/all_product";

// export const ShopContext = createContext(null);
// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index < all_product.length + 1; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };
// const ShopContextProvider = (props) => {
//   const [cartItem, setcartitem] = useState(getDefaultCart());

//   const addTocart = (itemId) => {
//     setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };
//   const removeCart = (itemId) => {
//     setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };
//   const gettotalamount = () => {
//     let totalamount = 0;

//     for (const item in cartItem) {
//       if (cartItem[item] > 0) {
//         let iteminfo = all_product.find(
//           (prorduct) => prorduct.id === Number(item)
//         );
//         totalamount += iteminfo.new_price * cartItem[item];
//       }

//     }
//           return totalamount;
//   };

//   const gettotalcartitems=()=>{
//     let totalitem=0;
//     for(const item in cartItem){
//       if(cartItem[item]>0){
//         totalitem+=cartItem[item];
//       }
//     }
//     return totalitem
//   }
//   const contextValue = {
//     all_product,
//     cartItem,
//     addTocart,
//     removeCart,
//     gettotalamount,
//     gettotalcartitems
//   };
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };
// export default ShopContextProvider;
