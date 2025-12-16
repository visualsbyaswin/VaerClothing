import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cartpage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cartsection">
      {cart.length === 0 ? (
        <div className="pttt">
        <p>no products in cart</p>
        </div>

      ) : (
        <div className="maincart">
          {cart.map((item) => (
            <div className="cardscart" key={item.id}>
              <div className="imagecart">
                <img src={item.image} alt="" />
              </div>
              <div className="contentscart">
                <div className="fcartp">
                  <p>{item.name}</p>
                  <p>${item.price}USD</p>
                </div>
                <div className="scartp">
                  <div className="control">
                    {/* Minus button */}
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-dash-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </button>

                    {/* Quantity input */}
                    <input
                      onChange={(e) =>
                        updateQty(item.id, parseInt(e.target.value))
                      }
                      type="number"
                      value={item.qty}
                      readOnly
                    />

                    {/* Plus button */}
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 
        0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="rdo">
                    <button onClick={() => removeFromCart(item.id)}> ✕</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cartpay">
        <div className="carttotal">
          <p>Subtotal</p>
          <p> ${total.toFixed(2)}USD</p>
        </div>
        <div className="cartbuttons">
          <button className="check">Checkout</button>
          {/* <button className="clear">Clearcart</button> */}
        </div>
      </div>
    </div>
  );
};
export default CartPage;

// import React, { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

// const CartPage = () => {
//   const { cart, removeFromCart, updateQty } = useContext(CartContext);

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   return (
//      <div className="cart-page">
//       <h2>Your Cart</h2>
//        {cart.length === 0 ? (
//          <p>No items in cart.</p>
//      ) : (
//          <div>
//            {cart.map((item) => (
//            <div key={item.id} className="cart-item">
//           <img src={item.image} alt={item.name} width="60" />
//              <div>
//                <h3>{item.name}</h3>
//                 <p>${item.price}</p>
//                 <input
//                   type="number"
//                   value={item.qty}
//                    min="1"
//                  onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
//               />
//                <button onClick={() => removeFromCart(item.id)}>Remove</button>
//              </div>
//            </div>
//           ))}
//           <h3>Total: ${total.toFixed(2)}</h3>
//         </div>
//       )}
//      </div>
//   );
// };

// export default CartPage;
