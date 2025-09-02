import React, { useState, useEffect } from "react";
import Roleta from "./Roleta";
import Perguntas from "./Perguntas";
import ListaRegistros from "./ListaRegistros";
import InfoRegistro from "./InfoRegistro";
const MainContainer = ({onMostrarInfo}) => {
  const [Status, setStatus] = useState("Perguntas");
  
  useEffect(() => {
    if (Status === "RegistroSelecionado") {
      onMostrarInfo?.();
    }
  }, [Status, onMostrarInfo]);



  return (
    <div className="main-container">
      {Status == "Perguntas" &&(
        <>
          <Roleta />
          <Perguntas onEnviar={() => setStatus("Registros")} />
        </>
      )}
      {Status == "Registros" &&(
        <>
          <ListaRegistros  onSelecionar={() => setStatus("RegistroSelecionado")} />
        </>
      )}
    </div>
  );
};

export default MainContainer;
