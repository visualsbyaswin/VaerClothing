import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";


function PageWrapper({ children }) {
  const container = useRef(null);

  useLayoutEffect(() => {
    // animate IN when component mounts
    gsap.fromTo(
      container.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );

    // animate OUT on unmount
    return () => {
      gsap.to(container.current, {
        opacity: 0,
        y: -50,
        duration: 0.4,
        ease: "power2.in"
      });
    };
  }, []);

  return (
    <div ref={container} style={{ position: "relative" }}>
      {children}
    </div>
  );
}

export default PageWrapper

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
    </Routes>
  );
}