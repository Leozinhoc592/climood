import React from "react";
import logo from "../assets/Termometro.png";
import Temperatura from "./Temperatura";


const Termometro = () => {
  return (
    <div className="termometro-container">
      <img src={logo} alt="Termômetro" className="termometro-imagem" /><h1><Temperatura/></h1>

    </div>
  );
};

export default Termometro;