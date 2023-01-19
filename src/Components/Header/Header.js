import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <a href="/" className="logo">
        RPx
      </a>
      <ul>
        <li>
          Sobre nós
          <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        </li>
        <ul>
          <li>Carreiras</li>
          <li>Investidores</li>
        </ul>
        <li>
          Para você <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        </li>
        <ul>
          <li>Conta digital</li>
          <li>Cartão de crédito</li>
        </ul>
        <li>
          Empresas <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
        </li>
        <ul>
          <li>Conta PJ</li>
          <li>Seguros</li>
        </ul>
      </ul>
      <div className="conta">
        <button>Abra sua conta</button>
        <button>
          Login <FontAwesomeIcon icon={faArrowRightToBracket}></FontAwesomeIcon>
        </button>
      </div>
    </nav>
  );
};

export default Header;
