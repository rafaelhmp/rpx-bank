import React from "react";
import AccordionList from "./AccordionList";
import "./Duvidas.css";

const Duvidas = () => {
  return (
    <section className="duvidas">
      <div className="container">
        <div className="questions">
          <h2 className="faq">Ficou com alguma dúvida?</h2>
          <div>
            <h3>Sobre a conta</h3>
            <AccordionList type="conta"></AccordionList>
          </div>
          <div className="card-questions">
            <h3>Sobre o cartão</h3>
            <AccordionList type="cartao"></AccordionList>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Duvidas;
