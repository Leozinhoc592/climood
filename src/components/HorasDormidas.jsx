import { useState } from 'react';

function HorasDormidas() {
  const [horas, setHoras] = useState(8);

  return (
    <div className="slider-container">
      <input
        type="range"
        min={0}
        max={12}
        step={1}
        value={horas}
        onChange={e => setHoras(Number(e.target.value))}
        className="custom-range-slider"
      />
      <p className="valor-slider">{horas} horas</p>
    </div>
  );
}

export default HorasDormidas;
