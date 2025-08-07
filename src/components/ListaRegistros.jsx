import React from "react";
import BlocoDia from "./BlocoDia";

const ListaRegistros = () => {

  const dataAtual = new Date();
  const mesAtual = dataAtual.getMonth();
  const anoAtual = dataAtual.getFullYear();
  const ultimoDiaMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

  return (
    <>
    <div className="BlocoMes">   
  <h1>listaderegistrosteste</h1>
  <div className="dias-container">
    {Array.from({ length: ultimoDiaMes }).map((_, i) => (
      <BlocoDia key={i}>{i + 1}</BlocoDia>
    ))}
  </div>
</div>


    </>
  );
}

export default ListaRegistros;
