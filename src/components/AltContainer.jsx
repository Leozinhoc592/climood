import React, { useState } from "react";
import ListaRegistros from "./ListaRegistros";
import InfoRegistro from "./InfoRegistro";

const AltContainer = () => {
  const [Status, setStatus] = useState("Perguntas");

  return (
    <>
      {Status === "RegistroSelecionado" && (
        <>
          <ListaRegistros />
          <InfoRegistro />
        </>
      )}
    </>
  );
};

export default AltContainer;
