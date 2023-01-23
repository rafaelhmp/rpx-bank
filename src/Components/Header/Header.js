import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="menu">
        <a href="/" className="logo">
          RPx
        </a>
        <Navbar />
      </div>
      <div className="conta">
        <a href="#" className="open">
          Abra sua conta
        </a>
        <a href="#" className="login">
          Login <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
        </a>
      </div>
    </header>
  );
};

export default Header;
