import React from "react";
import { menuItens } from "./menuItens";
import NavItens from "./NavItens";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItens.map((menu, index) => {
          return <NavItens itens={menu} key={index}></NavItens>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
