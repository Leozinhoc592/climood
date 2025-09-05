import React from 'react';

const SeletorMes = ({ mesAtual, onSelecionarMes }) => {
  return (
    <div className="seletor-mes">
      {Array.from({ length: 12 }).map((_, i) => {
        const mes = i + 1;
        return (
          <div
          key={mes}
          onClick={() => onSelecionarMes(mes)}
          className={mes === mesAtual ? "selecionado" : ""}
          >
          {new Date(0, mes - 1).toLocaleString("default", { month: "long" })}
        </div>

        );
      })}
    </div>
  );
};

export default SeletorMes;
