import React, { useEffect, useRef } from "react";
import "./hero.css";
import { assets } from "../../assets/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.4 } });

     
      
      tl.from(".homecontents", { y: 80, opacity: 0,stagger:{amount:4,},delay:0.8 })

        // .from(".homeimg", { x: 100, opacity: 0 }, "-=0.5");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const el = heroRef.current;

    // Scale section on scroll
    gsap.fromTo(
      el,
      { scale: 1 },
      {
        scale: 0.8,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 10%",   // when hero hits top
          end: "bottom top",  // until it leaves viewport
          scrub: true,        // smooth sync with scroll
        },
      }
    );
  }, []);

  return (
    <section className="page1" ref={heroRef}>
      <div className="homeimg">
        <img src={assets.crop} alt="Hero" />

        <div className="homecontents">
          <h1>
            Reshaping the Future. <br /> Innovating, Disrupting, Redefining.
          </h1>
          <div className="page1ptests">
            <p>
              Challenging conventions, breaking limits, and setting new
              <br /> standards through bold ideas and visionary design.
            </p>
          </div>
      
     
        </div>
      </div>
    </section>
  );
};

export default Hero;
