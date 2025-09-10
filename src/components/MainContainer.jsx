import React, { useState } from "react";
import Roleta from "./Roleta";
import Perguntas from "./Perguntas";
import ListaRegistros from "./ListaRegistros";
import Home from './Home';
import Enviar from './Enviar';
import Relatorio from './Relatorio';

const MainContainer = ({ onRegistroSelecionado, status, onStatusChange, mes }) => {
 

  return (
    <div className="main-container">
      {status === "Perguntas" && (
        <>
          <Roleta />
          <Perguntas onEnviar={() => onStatusChange("Registros")} />
        </>
      )}

      {status === "Registros" && (
        <ListaRegistros onSelecionar={onRegistroSelecionado} mes={mes} />
      )}
      {status === "Home" && (
        <Home setStatus={onStatusChange} />
      )}
      {status === "Relatorio" && (
        <Relatorio setStatus={onStatusChange} />
      )}
      {status === "Enviar" && (
        <Enviar setStatus={onStatusChange} />
      )}
    </div>
  );
};

export default MainContainer;
