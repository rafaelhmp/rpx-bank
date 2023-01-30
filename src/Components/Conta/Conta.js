import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RpxConta from "../../assets/rpx-app.png";
import "./Conta.css";
import { responsive, benefits } from "./data";
import Vantagens from "./Vantagens";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

const Conta = () => {
  const vantagem = benefits.map((item, index) => (
    <Vantagens
      title={item.title}
      iconType={item.iconType}
      iconName={item.iconName}
      key={index}
    ></Vantagens>
  ));

  return (
    <section className="conta-section">
      <div className="container">
        <div className="conta-app">
          <img src={RpxConta} alt="teste" />
        </div>
        <div className="conta-text">
          <h2>
            Abra a sua conta digital <span>gratuitamente</span>
          </h2>
          <p>
            Aqui, além de seu dinheiro render mais, você ainda possui uma série
            de vantagens.
          </p>
          <div className="vantagens">
            <Carousel
              responsive={responsive}
              showDots={true}
              arrows={true}
              infinite={true}
              itemClass="item"
            >
              {vantagem}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conta;
