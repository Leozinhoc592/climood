import React from "react";
import logo from "../assets/Termometro.png";
import Temperatura from "./Temperatura";


const Termometro = () => {
  return (
    <div className="termometro-container">
      <img src={logo} alt="Termômetro" className="termometro-imagem" /><span className="temperatura-texto"><Temperatura/></span>

    </div>
  );
};

export default Termometro;