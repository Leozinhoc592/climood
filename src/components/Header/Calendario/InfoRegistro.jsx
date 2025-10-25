import React from "react";

const InfoRegistro = ({ registro }) => {
  if (!registro) return <div className="info-registro">Nenhum registro selecionado</div>;

  return (
    <div className="info-registro" style={{ marginLeft: "1rem" }}>
      <h2>Informações do Registro</h2>
      <p>Data: {registro.data}</p>
      <p>Humor: {registro.humor}</p>
      <p>Dormiu: {registro.dormiu}</p>
      <p>Trabalhou: {registro.trabalhou ? "Sim" : "Não"}</p>
    </div>
  );
};

export default InfoRegistro;
