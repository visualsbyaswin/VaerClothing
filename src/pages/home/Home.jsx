import React from "react";
import Hero from "../../components/herosection/Hero";

import Servise from "../../components/Services/Servise";
import Explore2 from "../../components/Explorecart2/Explore2";
import Design from "../../components/Designs/Design";
import Explore3 from "../../components/Explorecart3/Explore3";
import { useNavigate } from "react-router-dom";
import Explore from "../../components/Explorecart/Explore";
const Home = () => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/VaerClothingBrand/checkout/${product.id}`, { state: { product } });
  };
  return (
    <div>
      <Hero />
      <Explore handleClick={handleClick}/>
      <Servise/>
      <Explore2 handleClick={handleClick} />
      <Design />
      <Explore3  handleClick={handleClick}  />
    </div>
  );
};

export default Home;
