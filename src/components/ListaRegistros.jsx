
import React, { useEffect, useState } from "react";
import BlocoDia from "./BlocoDia";

function pad(n){ return String(n).padStart(2, '0'); }

const ListaRegistros = ({ onSelecionar = () => {} }) => {
  const dataAtual = new Date();
  const mesAtual = dataAtual.getMonth(); 
  const anoAtual = dataAtual.getFullYear();
  const ultimoDiaMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('registros') || '[]');
    setRegistros(arr);
  }, []);

  const formatDateKey = (year, month0based, day) => {
    return `${year}-${pad(month0based + 1)}-${pad(day)}`; 
  };

  const encontrarRegistroDoDia = (dia) => {
    const chave = formatDateKey(anoAtual, mesAtual, dia);

    return registros.find(r => {
      if (!r || !r.data) return false;
      if (r.data === chave) return true;
      if (typeof r.data === 'string' && r.data.startsWith(chave)) return true;
      
      const d = new Date(r.data);
      if (isNaN(d)) return false;
      return d.getFullYear() === anoAtual && d.getMonth() === mesAtual && d.getDate() === dia;
    }) || null;
  };

  const abrirRegistro = (dia) => {
    const r = encontrarRegistroDoDia(dia);
    if (!r) return;
    onSelecionar(r);
    alert(`Registro de ${r.data}\n\nHumor: ${r.humor}\nDormiu: ${r.dormiu}\nTrabalhou: ${r.trabalhou ? 'Sim' : 'Não'}`);
   
  };

  return (
    <div className="BlocoMes">
      <h1>Registros - {dataAtual.toLocaleString('default', { month: 'long' })} {anoAtual}</h1>
      <div className="dias-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
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
