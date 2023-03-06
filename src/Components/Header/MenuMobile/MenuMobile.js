import React from "react";
import { menuItens } from "../menuItens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuMobile.css";

const MenuMobile = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflowY = menuActive ? "hidden" : "auto";
  }, [menuActive]);
  return (
    <div>
      <FontAwesomeIcon
        icon="fa-solid fa-bars"
        onClick={() => setMenuActive(true)}
      />
      <div className={`hamburguer ${menuActive ? "show" : ""}`}>
        <nav>
          <FontAwesomeIcon
            icon="fa-solid fa-x"
            onClick={() => setMenuActive(false)}
          />
          {menuItens.map((item, index) => (
            <a href="#" key={index}>
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MenuMobile;
