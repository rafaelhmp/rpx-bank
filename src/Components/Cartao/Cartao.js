import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "../../assets/rpx-card.png";
import "./Cartao.css";

const Cartao = () => {
  const cardBenefits = [
    {
      title: "Cashback",
      iconType: "fa",
      iconName: "money-bill-transfer",
      className: "cardBenefit-item",
    },
    {
      title: "Internacional",
      iconType: "fa",
      iconName: "globe",
      className: "cardBenefit-item",
    },
    {
      title: "Aproximação",
      iconType: "fa",
      iconName: "rss",
      className: "cardBenefit-item",
    },
    {
      title: "Milhas",
      iconType: "fa",
      iconName: "plane-departure",
      className: "cardBenefit-item",
    },
    {
      title: "Salas VIP",
      iconType: "fa",
      iconName: "mug-saucer",
      className: "cardBenefit-item",
    },
    {
      title: "Descontos",
      iconType: "fa",
      iconName: "percent",
      className: "cardBenefit-item",
    },
  ];

  return (
    <section className="cartao">
      <div className="container">
        <div className="cartao-text">
          <h2>Conheça o nosso cartão de crédito</h2>
          <p>É sem anuidade, prático e muito mais.</p>
          <ul className="benefits">
            {cardBenefits.map((item, index) => (
              <div className={`${item.className}`} key={index}>
                <>
                  <FontAwesomeIcon
                    icon={[`${item.iconType}`, `${item.iconName}`]}
                  ></FontAwesomeIcon>
                  <p>{item.title}</p>
                </>
              </div>
            ))}
          </ul>
        </div>
        <div className="cartao-img">
          <img src={Card} alt="rpx-card" />
        </div>
      </div>
    </section>
  );
};

export default Cartao;
