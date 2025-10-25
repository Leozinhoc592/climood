import React, { useState } from "react";
import Roleta from "./PerguntasDiarias/Roleta";
import Perguntas from "./PerguntasDiarias/Perguntas";
import ListaRegistros from "./Header/Calendario/ListaRegistros";
import Home from './Home/Home';
import Enviar from './Header/Enviar/Enviar';
import Relatorio from './Header/Relatorio/Relatorio';

const MainContainer = ({ onRegistroSelecionado, status, onStatusChange, mes }) => {
  const [humor, setHumor] = useState(Number(localStorage.getItem("humor")) || 1);

  return (
    <div className="main-container">
      {status === "Perguntas" && (
        <>
          <Roleta selected={humor} onChange={setHumor} />
          <Perguntas onEnviar={() => onStatusChange("Registros")} />
        </>
      )}

      {status === "Registros" && (
        <ListaRegistros onSelecionar={onRegistroSelecionado} mes={mes} />
      )}
      {status === "Home" && <Home setStatus={onStatusChange} />}
      {status === "Relatorio" && <Relatorio setStatus={onStatusChange} />}
      {status === "Enviar" && <Enviar setStatus={onStatusChange} />}
    </div>
  );
};

export default MainContainer;
