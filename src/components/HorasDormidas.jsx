import { useState } from 'react';

function HorasDormidas({ value, onChange }) {
  return (
    <div className="slider-container">
      <input
        type="range"
        min={0}
        max={12}
        step={1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="custom-range-slider"
      />
      <p className="valor-slider">{value} horas</p>
    </div>
  );
}

export default HorasDormidas;

