import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import "./NavItens.css";

import React from "react";

const NavItens = ({ itens }) => {
  const [dropdown, setDropdown] = React.useState(false);
  let ref = React.useRef();

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="nav-item"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {itens.submenu ? (
        <>
          <a href="#">{itens.title}</a>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="icon"
          ></FontAwesomeIcon>
          <Dropdown submenus={itens.submenu} dropdown={dropdown}></Dropdown>
        </>
      ) : (
        <a href="#">{itens.title}</a>
      )}
    </li>
  );
};

export default NavItens;
