import React, { useState } from "react";
import Roleta from "./Roleta";
import Perguntas from "./Perguntas";
import ListaRegistros from "./ListaRegistros";

const MainContainer = () => {
  const [enviado, setEnviado] = useState(false);

  return (
    <div className="main-container">
      {enviado ? (
        <ListaRegistros />
      ) : (
        <>
          <Roleta />
          <Perguntas onEnviar={() => setEnviado(true)} />
        </>
      )}
    </div>
  );
};

export default MainContainer;
