import Head from "./Components/Head";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Conta from "./Components/Conta/Conta";
import Cartao from "./Components/Cartao/Cartao";
import Duvidas from "./Components/Duvidas/Duvidas";
import Footer from "./Components/Footer/Footer";
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Head
        title="RPx Bank | O seu banco 100% digital desenvolvido com React"
        description="RPx Bank, O seu banco 100% digital desenvolvido com React"
      />
      <Header />
      <Hero />
      <Conta />
      <Cartao />
      <Duvidas />
      <Footer />
    </div>
  );
}

export default App;
