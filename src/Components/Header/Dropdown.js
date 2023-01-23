import NavItens from "./NavItens";
import "./Dropdown.css";
import React from "react";

const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <NavItens itens={submenu} key={index} />
      ))}
    </ul>
  );
};

export default Dropdown;
