// import React, { useRef, useState } from "react";
// import gsap from "gsap";
// // import "./faq.css";

// const FaqItem = ({ question, answer }) => {
//   const [open, setOpen] = useState(false);
//   const contentRef = useRef(null);

//   const toggleContent = () => {
//     if (open) {
//       // Collapse
//       gsap.to(contentRef.current, {
//         height: 0,
//         opacity: 0,
//         duration: 0.5,
//         ease: "power2.inOut",
//       });
//     } else {
//       // Expand
//       gsap.to(contentRef.current, {
//         height: "auto",
//         opacity: 1,
//         duration: 0.5,
//         ease: "power2.inOut",
//       });
//     }
//     setOpen(!open);
//   };

//   return (
//     <div className="mtrance">
//       <div className="pulsing">
//         <p>{question}</p>
//         <div className="blackplus" onClick={toggleContent}>
//           {open ? "–" : "+"}
//         </div>
//       </div>
//       <div
//         ref={contentRef}
//         style={{
//           height: 0,
//           overflow: "hidden",
//           opacity: 0,
//         }}
//       >
//         <p>{answer}</p>
//       </div>
//     </div>
//   );
// };

// const Faq = () => {
//   return (
//     <div className="questanswer">
//       <FaqItem
//         question="What's your return policy?"
//         answer="You can return your item within 14 days of delivery. Items must be unworn, in original condition and packaging."
//       />
//       <FaqItem
//         question="How long does shipping take?"
//         answer="Orders are processed within 1–2 business days. Delivery times vary by region—most orders arrive within 3–7 days."
//       />
//       <FaqItem
//         question="Do you ship internationally?"
//         answer="Yes. We ship worldwide. International shipping times and rates are calculated at checkout."
//       />
//     </div>
//   );
// };

// export default Faq;


import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./CartDrawer.css";
import CartPage from "../cartpage/Cartpage";

const CartDrawer = ({ isOpen, onClose }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(drawerRef.current, {
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    } else {
      gsap.to(drawerRef.current, {
        x: "100%",
        duration: 0.6,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  return (
    <div className="cart-drawer" ref={drawerRef}>
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="cart-body">
         <CartPage/>
      </div>
   
    </div>
  );
};

export default CartDrawer;

