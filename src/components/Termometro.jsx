import React from "react";
import logo from "../assets/Termometro.png";

const Termometro = () => {
  return (
    <div className="termometro-container">
      <img src={logo} alt="Termômetro" className="termometro-imagem" /><h1>-</h1>
    </div>
  );
};

export default Termometro;