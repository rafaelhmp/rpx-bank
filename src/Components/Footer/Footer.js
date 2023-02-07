import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="app">
          <span>Baixe nosso app</span>
          <div>
            <a href="#" className="link-app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 143 42"
                className="link-store"
              >
                <g>
                  <path d="M.5 9A8.5 8.5 0 019 .5h125a8.5 8.5 0 018.5 8.5v24a8.5 8.5 0 01-8.5 8.5H9A8.5 8.5 0 01.5 33V9zM9 1.5A7.5 7.5 0 001.5 9v24A7.5 7.5 0 009 40.5h125a7.5 7.5 0 007.5-7.5V9a7.5 7.5 0 00-7.5-7.5H9z"></path>
                  <path d="M37.974 19.869c-.025-2.581 2.126-3.837 2.225-3.896-1.218-1.767-3.104-2.008-3.769-2.027-1.584-.164-3.123.945-3.933.945-.823 0-2.065-.927-3.404-.898-1.728.024-3.342 1.018-4.227 2.558-1.824 3.143-.463 7.76 1.285 10.3.878 1.245 1.9 2.635 3.24 2.586 1.308-.054 1.797-.83 3.378-.83 1.567 0 2.025.83 3.391.8 1.408-.024 2.292-1.252 3.137-2.507 1.01-1.425 1.42-2.83 1.433-2.903-.032-.009-2.727-1.031-2.756-4.128zM36.447 9c-1.02.045-2.296.7-3.03 1.557-.648.757-1.23 1.993-1.08 3.156 1.146.084 2.323-.575 3.056-1.436.706-.876 1.187-2.067 1.054-3.277zM52.427 22.246l1.748-5.112h.049l1.747 5.112h-3.544zm.807-7.05L49 26.848h1.891l1.076-3.15h4.47l1.07 3.15h1.926L55.2 15.195h-1.965zM64.514 25.459c-1.342 0-2.243-1.145-2.243-2.859 0-1.694.901-2.85 2.243-2.85 1.365 0 2.261 1.13 2.261 2.85 0 1.738-.896 2.859-2.261 2.859zm.462-7.195c-1.193 0-2.234.59-2.722 1.502h-.032v-1.414h-1.698V29.66h1.754v-4.207h.041c.504.943 1.472 1.485 2.69 1.485 2.146 0 3.569-1.695 3.569-4.337 0-2.633-1.43-4.336-3.602-4.336zM73.925 25.459c-1.342 0-2.243-1.145-2.243-2.859 0-1.694.901-2.85 2.243-2.85 1.365 0 2.261 1.13 2.261 2.85 0 1.738-.897 2.859-2.261 2.859zm.462-7.195c-1.193 0-2.234.59-2.722 1.502h-.033v-1.414h-1.699V29.66h1.756v-4.207h.04c.505.943 1.473 1.485 2.691 1.485 2.146 0 3.569-1.695 3.569-4.337 0-2.633-1.43-4.336-3.602-4.336zM88.003 20.266l-1.292-.314c-1.512-.373-2.13-.857-2.13-1.68 0-1.035.97-1.745 2.381-1.745 1.414 0 2.382.702 2.489 1.865h1.771C91.167 16.382 89.466 15 86.988 15c-2.504 0-4.269 1.382-4.269 3.392 0 1.625 1.003 2.627 3.154 3.143l1.52.364c1.52.37 2.162.913 2.162 1.817 0 1.041-1.064 1.801-2.544 1.801-1.543 0-2.672-.76-2.8-1.914h-1.8c.114 2.108 1.87 3.44 4.471 3.44 2.78 0 4.53-1.366 4.53-3.547 0-1.703-1.004-2.663-3.41-3.23zM95.197 16.34h-1.764v2.013h-1.24v1.38h1.24v4.872c0 1.646.675 2.293 2.406 2.293.39 0 .78-.033.975-.082v-1.37a6.37 6.37 0 01-.577.038c-.712 0-1.04-.338-1.04-1.066v-4.684h1.626v-1.381h-1.626v-2.012zM101.819 25.517c-1.423 0-2.267-1.075-2.267-2.918 0-1.823.844-2.915 2.267-2.915s2.271 1.083 2.271 2.915c0 1.843-.848 2.918-2.271 2.918zm0-7.269c-2.47 0-4.055 1.68-4.055 4.351 0 2.682 1.569 4.356 4.055 4.356 2.487 0 4.057-1.674 4.057-4.356 0-2.67-1.578-4.35-4.057-4.35zM109.037 19.798h-.039v-1.446h-1.676v8.497h1.755V21.81c0-1.196.7-1.955 1.83-1.955.341 0 .649.049.787.105v-1.632a2.746 2.746 0 00-.6-.064c-1.006 0-1.786.572-2.057 1.534zM113.854 21.817c.09-1.284.966-2.155 2.177-2.155 1.219 0 2.057.856 2.097 2.155h-4.274zm2.177-3.57c-2.403 0-3.958 1.731-3.958 4.393 0 2.658 1.545 4.316 4.032 4.316 1.935 0 3.446-1.06 3.682-2.601h-1.665c-.238.735-1.001 1.193-1.976 1.193-1.381 0-2.3-.952-2.3-2.407v-.104h6.038v-.598c0-2.578-1.487-4.191-3.853-4.191z"></path>
                </g>
              </svg>
            </a>
          </div>
          <div>
            <a href="#" className="link-app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="link-store"
                viewBox="0 0 143 42"
              >
                <g>
                  <path d="M.5 9A8.5 8.5 0 019 .5h125a8.5 8.5 0 018.5 8.5v24a8.5 8.5 0 01-8.5 8.5H9A8.5 8.5 0 01.5 33V9zM9 1.5A7.5 7.5 0 001.5 9v24A7.5 7.5 0 009 40.5h125a7.5 7.5 0 007.5-7.5V9a7.5 7.5 0 00-7.5-7.5H9z"></path>
                  <path d="M52.281 19.617v1.688h4.047c-.122.949-.438 1.64-.921 2.123-.59.586-1.511 1.235-3.126 1.235-2.492 0-4.439-2.004-4.439-4.488 0-2.484 1.947-4.488 4.44-4.488 1.343 0 2.322.527 3.048 1.205l1.195-1.19C55.51 14.738 54.168 14 52.28 14 48.87 14 46 16.772 46 20.175s2.869 6.175 6.281 6.175c1.84 0 3.23-.602 4.318-1.733 1.118-1.114 1.465-2.68 1.465-3.947 0-.39-.03-.752-.09-1.053h-5.693zM71.393 24.783c-1.208 0-2.25-.994-2.25-2.41 0-1.43 1.042-2.409 2.25-2.409s2.252.978 2.252 2.41c0 1.415-1.044 2.41-2.252 2.41zm0-6.384c-2.203 0-4.002 1.67-4.002 3.975 0 2.29 1.8 3.975 4.002 3.975 2.204 0 4.003-1.686 4.003-3.975 0-2.304-1.799-3.975-4.003-3.975zM62.664 24.783c-1.208 0-2.25-.994-2.25-2.41 0-1.43 1.042-2.409 2.25-2.409s2.252.978 2.252 2.41c0 1.415-1.044 2.41-2.252 2.41zm0-6.384c-2.203 0-4.002 1.67-4.002 3.975 0 2.29 1.799 3.975 4.002 3.975 2.204 0 4.003-1.686 4.003-3.975 0-2.304-1.799-3.975-4.003-3.975zM80.1 24.783c-1.208 0-2.22-1.008-2.22-2.395 0-1.4 1.012-2.424 2.22-2.424 1.193 0 2.13 1.024 2.13 2.424 0 1.387-.937 2.395-2.13 2.395zm2.01-5.498h-.061c-.394-.465-1.147-.886-2.1-.886-1.991 0-3.82 1.746-3.82 3.99 0 2.228 1.829 3.96 3.82 3.96.953 0 1.706-.422 2.1-.903h.06v.57c0 1.523-.816 2.336-2.13 2.336-1.071 0-1.735-.77-2.008-1.415l-1.524.632c.436 1.055 1.599 2.35 3.532 2.35 2.053 0 3.79-1.206 3.79-4.144v-7.137h-1.66v.647zM84.977 26.11h1.75V14.423h-1.75V26.11zM89.311 22.252c-.045-1.534 1.193-2.316 2.083-2.316.695 0 1.284.345 1.481.842l-3.564 1.474zm5.435-1.324c-.333-.889-1.342-2.53-3.413-2.53-2.052 0-3.758 1.61-3.758 3.974 0 2.229 1.691 3.978 3.956 3.978 1.827 0 2.882-1.116 3.323-1.763l-1.36-.903c-.454.661-1.073 1.098-1.963 1.098-.892 0-1.526-.405-1.933-1.205l5.331-2.197-.183-.452zM102.998 20.055h-2.489v-4.006h2.489c1.306 0 2.05 1.08 2.05 2.002 0 .906-.744 2.004-2.05 2.004zm-.045-5.632h-4.192v11.685h1.748v-4.427h2.444c1.938 0 3.843-1.4 3.843-3.63s-1.905-3.628-3.843-3.628zM107.761 26.11h1.748V14.423h-1.748V26.11zM113.594 24.78c-.574 0-1.37-.284-1.37-.992 0-.903.993-1.248 1.852-1.248.769 0 1.131.165 1.599.393a2.117 2.117 0 01-2.081 1.847zm.211-6.405c-1.267 0-2.578.557-3.121 1.792l1.553.645c.331-.645.951-.858 1.599-.858.903 0 1.823.542 1.839 1.504v.12c-.316-.18-.995-.45-1.823-.45-1.675 0-3.376.915-3.376 2.63 0 1.564 1.368 2.57 2.906 2.57 1.176 0 1.825-.525 2.234-1.142h.059v.903h1.689v-4.48c0-2.075-1.554-3.234-3.559-3.234zM121.508 23.698h-.06l-2.082-5.065h-1.881l3.118 7.08-1.778 3.94h1.823l4.811-11.02h-1.945l-2.006 5.065zM17.495 9.137a1 1 0 01.994-.01l18.946 10.629c1.362.764 1.362 2.724 0 3.488L18.489 33.872A1 1 0 0117 33V10a1 1 0 01.495-.863zm6.06 5.126l5.662 5.805 1.657-1.7-7.32-4.105zm9.125 5.119L30.614 21.5l2.066 2.118 3.776-2.118-3.776-2.118zm-1.806 5.25l-1.657-1.7-5.662 5.805 7.32-4.106zM19 30.541V12.458l8.82 9.043L19 30.543z"></path>
                </g>
              </svg>
            </a>
          </div>
          <span>Nos siga nas redes sociais</span>
          <div className="socials">
            <a href="#" className="network">
              <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
            <a href="#" className="network">
              <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </a>
            <a href="#" className="network">
              <FontAwesomeIcon icon="fa-brands fa-tiktok" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafaelhmp/"
              target="_blank"
              rel="noreferrer"
              className="network"
            >
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://github.com/rafaelhmp"
              target="_blank"
              rel="noreferrer"
              className="network"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
          </div>
        </div>
        <div className="cliente">
          <span>Para você</span>
          <ul className="footer-list">
            <li>
              <a href="#">Conta digital</a>
            </li>
            <li>
              <a href="#">Cartão de Crédito</a>
            </li>
            <li>
              <a href="#">Empréstimos</a>
            </li>
            <li>
              <a href="#">Seguros</a>
            </li>
            <li>
              <a href="#">Investimentos</a>
            </li>
            <li>
              <a href="#">Cashback</a>
            </li>
            <li>
              <a href="#">Conta PJ</a>
            </li>
          </ul>
        </div>
        <div className="suporte">
          <span>Suporte</span>
          <ul className="footer-list">
            <li>
              <a href="#">Central de ajuda</a>
            </li>
            <li>
              <a href="#">Central de atendimento</a>
            </li>
            <li>
              <a href="#">Ouvidoria</a>
            </li>
            <li>
              <a href="#">2ª via do boleto</a>
            </li>
            <li>
              <a href="#">Por que não cobramos tarifas?</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="contato">
          <span>Fale conosco</span>
          <ul className="footer-list">
            <li>
              <p>Capitais e regiões metropolitanas</p>
              <a href="#">3333 4444</a>
            </li>
            <li>
              <p>Demais localidades</p>
              <a href="#">0800 999 9999</a>
            </li>
            <li>
              <p>SAC 24h</p>
              <a href="#">0800 888 8888</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="credits">
        <p>
          Desenvolvido com 💚 por{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rafaelhmp/"
            rel="noreferrer"
          >
            Rafael Pacheco
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
