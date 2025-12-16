import React from "react";
import "./service.css";
import { assets } from "../../assets/assets";




const Servise = () => {
  return (
    <section className="page3">
      <div className="textservices">
        <div className="serviceheading">
          <p>DEYOND FASHION</p>
        </div>
        <div className="servicedescription">
          <p>
            Materials engineered for longevity. Silhouettes crafted for motion.
            Every stitch, every detail, stripped of excess, built with intent.
            This is not about seasons—it’s about permanence. Designed to
            outlast, created to redefine. We don’t follow trends. We dismantle
            them. Each piece is designed with precision, built for movement, and
            crafted for those who shape the future. This is not fashion. This is
            evolution.
          </p>
        </div>
      </div>
      <div className="imageservises">
        <img src={assets.third1} alt="" />
      </div>
    </section>
  );
};

export default Servise;
