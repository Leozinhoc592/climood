import React, { useState } from "react";
import Roleta from "./Roleta";
import Perguntas from "./Perguntas";
import ListaRegistros from "./ListaRegistros";

const MainContainer = ({ onRegistroSelecionado, status, onStatusChange }) => {
 

  return (
    <div className="main-container">
      {status === "Perguntas" && (
        <>
          <Roleta />
          <Perguntas onEnviar={() => onStatusChange("Registros")} />
        </>
      )}

      {status === "Registros" && (
        <ListaRegistros onSelecionar={onRegistroSelecionado} />
      )}
    </div>
  );
};

export default MainContainer;
