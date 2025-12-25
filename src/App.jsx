import React, { useEffect, useRef } from "react";
import { assets } from "./assets/assets";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import useLenis from "./components/leniscroll/lenis";
import Checkout from "./pages/Cartsection/Checkout";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer/Footer";

// GSAP import
import { gsap } from "gsap";
import About from "./pages/Abour/About";
import ScrollToTop from "./components/Scrolltop/ScrollTop";

function App() {
  useLenis();
  const cursorref = useRef(null);

  useEffect(() => {
    const movecursor = (e) => {
      gsap.to(cursorref.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.9,
      });
    };
    window.addEventListener("mousemove", movecursor);

    return () => window.removeEventListener("mousemove", movecursor);
  });

  return (
    <>
      <BrowserRouter>
        {/* GSAP Cursor */}
        <div ref={cursorref} className="custom-cursor"></div>
<ScrollToTop/>
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/VaerClothingBrand" element={<Home />}></Route>
            <Route path="/VaerClothingBrand/shop" element={<Shop />}></Route>
            <Route path="/VaerClothingBrand/checkout/:id" element={<Checkout />} />
        <Route path="/VaerClothingBrand/checkout" element={<Checkout />} />
            <Route path="/VaerClothingBrand/about" element={<About />}></Route>
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
