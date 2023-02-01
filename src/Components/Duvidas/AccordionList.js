import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardQuestions, accountQuestions } from "./questions";

import "./AccordionList.css";

const AccordionList = (props) => {
  const [accordion, setAccordion] = React.useState(-1);

  function toggle(index) {
    if (index === accordion) {
      setAccordion(-1);
      return -1;
    }

    setAccordion(index);
  }

  return (
    <>
      {props.type === "conta" ? (
        <div className="accordion-list">
          {cardQuestions.map((item, index) => (
            <div
              className="accordion"
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="question-title">
                <h2 className={accordion === index ? "active" : ""}>
                  {item.title}
                </h2>
                <span>
                  {accordion === index ? (
                    <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
                  ) : (
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                  )}
                </span>
              </div>
              <div
                className={`question-content ${
                  accordion === index ? "active" : "inactive"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="accordion-list">
          {accountQuestions.map((item, index) => (
            <div
              className="accordion"
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="question-title">
                <h2 className={accordion === index ? "active" : ""}>
                  {item.title}
                </h2>
                <span>
                  {accordion === index ? (
                    <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
                  ) : (
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                  )}
                </span>
              </div>
              <div
                className={`question-content ${
                  accordion === index ? "active" : "inactive"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AccordionList;
