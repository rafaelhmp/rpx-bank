/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { menuItens } from "../menuItens";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MobileDropdown from "./MobileDropdown";
import "./MenuMobile.css";

const MenuMobile = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const [dropdownMobile, setDropdownMobile] = React.useState(null);

  React.useEffect(() => {
    document.body.style.overflowY = menuActive ? "hidden" : "auto";
  }, [menuActive]);

  function toggleSubmenu(i) {
    if (dropdownMobile === i) {
      return setDropdownMobile(null);
    }

    setDropdownMobile(i);
  }

  return (
    <div>
      <FontAwesomeIcon
        icon="fa-solid fa-bars"
        className="open-close"
        onClick={() => setMenuActive(true)}
      />
      <div className={`hamburguer ${menuActive ? "show" : ""}`}>
        <nav>
          <FontAwesomeIcon
            icon="fa-solid fa-x"
            className="open-close"
            onClick={() => setMenuActive(false)}
          />
          {menuItens.map((item, index) => {
            return item.submenu ? (
              <div
                key={index}
                className="mobile-item"
                onClick={() => toggleSubmenu(index)}
              >
                <a href="#" className="mobile-link">
                  {item.title}{" "}
                </a>
                <span>
                  {dropdownMobile === index ? (
                    <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
                  ) : (
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                  )}
                </span>
                <MobileDropdown
                  submenu={item.submenu}
                  dropdown={dropdownMobile}
                  index={index}
                ></MobileDropdown>
              </div>
            ) : (
              <div key={index} className="mobile-login">
                <a href="#">{item.title}</a>
                <span>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket"></FontAwesomeIcon>
                </span>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MenuMobile;
