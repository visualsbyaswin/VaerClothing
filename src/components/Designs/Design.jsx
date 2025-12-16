import React from 'react'
import "./design.css"
import { assets } from '../../assets/assets'
const Design = () => {
  return (
    <section className="page3">
      <div className="textservices">
        <div className="serviceheading">
          <p>DESIGN PHILOSOPHY</p>
        </div>
        <div className="servicedescription">
          <p>
      We strip everything down to its essence. No distractions, no excess. Every line, every stitch, a deliberate choice. Our designs are an exercise in precision—where function meets form, and motion meets meaning. This is not about decoration. It’s about structure. Architecture for the body. A new language of silhouettes, crafted for those who shape the future.
          </p>
        </div>
      </div>
      <div className="imageservises">
        <img src={assets.fifth1} alt="" />
      </div>
    </section>
  )
}

export default Design