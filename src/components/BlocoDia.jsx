// BlocoDia.jsx
import React from "react";
import './BlocoDia.css'; // supondo que você tenha classes CSS

const BlocoDia = ({ dia, preenchido, onClick }) => {
  return (
    <div
      className={`BlocoDia ${preenchido ? 'ativo' : 'apagado'}`}
      onClick={onClick}
      style={{
        width: 48,
        height: 48,
        margin: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        cursor: preenchido ? 'pointer' : 'default',
        userSelect: 'none'
      }}
    >
      <span style={{ fontWeight: '600' }}>{dia}</span>
    </div>
  );
};

export default BlocoDia;
