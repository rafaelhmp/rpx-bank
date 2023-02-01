import React from "react";
import Bank from "../../assets/rpx-bank.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          O seu banco <span>100%</span> digital
        </h1>
        <p>
          Cartão de crédito sem anuidade, investimentos e mais: <br></br>
          Soluções completas para você e sua empresa em um só banco.
        </p>
        <a className="btn-hover color-1" href="#">
          Quero ser RPx
        </a>
      </div>
      <div className="hero-img">
        <img src={Bank} alt="teste" />
      </div>
    </section>
  );
};

export default Hero;
