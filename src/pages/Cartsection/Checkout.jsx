import "./checkout.css";
import { allitems } from "../../assets/allitems";
import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CartDrawer from "../../components/CartDrawer/CartDrawer";
import { gsap } from "gsap/gsap-core";
import Feature from "../../components/FeaturedProducts/Feature";
import FaqItem from "../../components/FaqItem/FaqItem";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const [menu, setMenu] = useState("S");
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const contentRef = useRef(null);
  const { addToCart } = useContext(CartContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = () => {
    if (open) {
      // Hide
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      // Show
      gsap.to(contentRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
    setOpen(!open);
  };

  // ✅ Make sure both sides are compared as strings
  const product = allitems.find((p) => Number(p.id) === Number(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <>
      <div className="productsection">
        <div className="imageection">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="allpoliciestext">
          <div className="contents">
            <div className="fcontents">
              <div className="drop">
                <p>DROP 002</p>
              </div>
              <div>
                <h1>{product.name}</h1>
              </div>
              <div>
                <p>{product.description}</p>
              </div>
            </div>

            <div className="price">{product.price} USD</div>

            {/* Size selection */}
            <div className="sizesmxl">
              <p>Size</p>
              <div className="collectionofsizes">
                {["S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    onClick={() => setMenu(size)}
                    className={menu === size ? "active" : ""}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="collectbutton">
              <button
                onClick={() => {
                  addToCart(product);
                  setCartOpen(true); // for example
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="questanswer">
            <FaqItem
              question="What's your return policy?"
              answer="You can return your item within 14 days of delivery. Items must be unworn, in original condition and packaging."
              isOpen={activeIndex === 0}
              onToggle={() => setActiveIndex(activeIndex === 0 ? null : 0)}
            />
            <FaqItem
              question="How long does shipping take?"
              answer="Orders are processed within 1–2 business days. Delivery times vary by region—most orders arrive within 3–7 days."
              isOpen={activeIndex === 1}
              onToggle={() => setActiveIndex(activeIndex === 1 ? null : 1)}
            />
            <FaqItem
              question="Do you ship internationally?"
              answer="Yes. We ship worldwide. International shipping times and rates are calculated at checkout."
              isOpen={activeIndex === 2}
              onToggle={() => setActiveIndex(activeIndex === 2 ? null : 2)}
            />
          </div>
        </div>
      </div>

      <Feature />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Checkout;
