import React, { useEffect, useState } from "react";
import BlocoDia from "./BlocoDia";

function pad(n) {
  return String(n).padStart(2, "0");
}

const ListaRegistros = ({ onSelecionar = () => {}, mes }) => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  
  
  const mesSelecionado = mes - 1;
  const ultimoDiaMes = new Date(anoAtual, mesSelecionado + 1, 0).getDate();

  const [registros, setRegistros] = useState([]);
  
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("registros") || "[]");
    setRegistros(arr);
  }, []);

  const formatDateKey = (year, month0based, day) => {
    return `${year}-${pad(month0based + 1)}-${pad(day)}`;
  };

  const encontrarRegistroDoDia = (dia) => {
    return registros.find((r) => {
      if (!r || !r.data) return false;
      
  
      const dataParaComparar = new Date(Date.UTC(anoAtual, mesSelecionado, dia, 12, 0, 0));
      const dataRegistro = new Date(r.data);
      
      if (isNaN(dataRegistro)) return false;
      

      return (
        dataRegistro.getUTCFullYear() === dataParaComparar.getUTCFullYear() &&
        dataRegistro.getUTCMonth() === dataParaComparar.getUTCMonth() &&
        dataRegistro.getUTCDate() === dataParaComparar.getUTCDate()
      );
    }) || null;
  };

  const abrirRegistro = (dia) => {
    const r = encontrarRegistroDoDia(dia);
    if (!r) return;
    onSelecionar(r); 
  };

  return (
    <div className="BlocoMes">
      <h1>
        Registros -{" "}
        {new Date(anoAtual, mesSelecionado).toLocaleString("default", { month: "long" })}{" "}
        {anoAtual}
      </h1>
      <div className="dias-container" style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from({ length: ultimoDiaMes }).map((_, i) => {
          const dia = i + 1;
          const registroDoDia = encontrarRegistroDoDia(dia);
          const temRegistro = !!registroDoDia;

          return (
            <BlocoDia
              key={dia}
              dia={dia}
              preenchido={temRegistro}
              onClick={() => temRegistro && abrirRegistro(dia)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListaRegistros;
