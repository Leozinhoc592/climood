import React, { useState } from "react";
import Roleta from "./Roleta";
import Perguntas from "./Perguntas";
import ListaRegistros from "./ListaRegistros";
import InfoRegistro from "./InfoRegistro";
const MainContainer = () => {
  const [Status, setStatus] = useState("Perguntas");
  const [RegsS, setRegS] = useState(false);

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
          <ListaRegistros />
        </>
      )}
      {Status == "RegistroSelecionado" &&(
        <>
          <ListaRegistros />
          <InfoRegistro />
        </>
      )}
    </div>
  );
};

export default MainContainer;
