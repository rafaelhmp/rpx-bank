import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import MenuMobile from "./MenuMobile/MenuMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="menu">
        <a href="/" className="logo">
          RP<span>x</span>
        </a>
        <Navbar />
        <div className="conta">
          <a href="#" className="open">
            Abra sua conta
          </a>
          <a href="#" className="login">
            Login{" "}
            <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className="menu-mobile">
        <div>
          <a href="/" className="logo">
            RP<span>x</span>
          </a>
        </div>
        <MenuMobile />
      </div>
    </header>
  );
};

export default Header;
