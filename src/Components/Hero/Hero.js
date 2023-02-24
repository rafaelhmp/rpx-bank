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
        <button className="btn-hover color-1">Quero ser RPx</button>
      </div>
      <div className="hero-img">
        <img src={Bank} alt="RPx Bank, o seu banco 100% digital" />
      </div>
    </section>
  );
};

export default Hero;
