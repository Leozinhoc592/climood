import React from "react";
import BlocoDia from "./BlocoDia";

const ListaRegistros = () => {
  return (
    <>
    <div className="BlocoMes">   
  <h1>listaderegistrosteste</h1>
  <div className="dias-container">
    {Array.from({ length: 28 }).map((_, i) => (
      <BlocoDia key={i} />
    ))}
  </div>
</div>


    </>
  );
}

export default ListaRegistros;
