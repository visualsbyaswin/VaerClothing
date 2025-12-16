import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./FaqItem.css";

const FaqItem = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: contentRef.current.scrollHeight, // expand only to needed height
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="mtrance">
      <div className="pulsing">
        <p>{question}</p>
        <div className="blackplus" onClick={onToggle}>
          {isOpen ? "×" : "+"}
        </div>
      </div>
      <div
        className="new"
        ref={contentRef}
        style={{
          height: 0,
          overflow: "hidden",
          opacity: 0,
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
