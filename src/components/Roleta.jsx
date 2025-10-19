import React, { useState, useEffect } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import './Roleta.css';

import emote1 from '../assets/emote1.png';
import emote2 from '../assets/emote2.png';
import emote3 from '../assets/emote3.png';
import emote4 from '../assets/emote4.png';
import emote5 from '../assets/emote5.png';
import emote6 from '../assets/emote6.png';
import emote7 from '../assets/emote7.png';
import emote8 from '../assets/emote8.png';
import emote9 from '../assets/emote9.png';
import emote10 from '../assets/emote10.png';

const Roleta = ({ selected: externalValue, onChange }) => {
  const emotes = [
    emote1, emote2, emote3, emote4, emote5,
    emote6, emote7, emote8, emote9, emote10,
  ];

  const [localValue, setLocalValue] = useState(externalValue || 1);

  useEffect(() => {
    if (externalValue && externalValue !== localValue) {
      setLocalValue(externalValue);
    }
  }, [externalValue]);

  const handleChange = (value) => {
    setLocalValue(value);
  };

  const handleRelease = () => {
    onChange(localValue);
    localStorage.setItem('humor', localValue);
  };

  return (
    <div className="roleta-container">
      <CircularSlider
        width={280}
        min={1}
        max={10}
        knobColor="#4e4e4e"
        progressColorFrom="#dad3b5"
        progressColorTo="#8a7e5d"
        trackColor="#ccc"
        hideLabelValue
        onChange={handleChange}
        onMouseUp={handleRelease}
        onTouchEnd={handleRelease}
      />

      <div className="roleta-center">
        <div className="roleta-indicador">{localValue}/10</div>
        <img
          src={emotes[localValue - 1]}
          alt={`Emote ${localValue}`}
          className="roleta-emote"
        />
      </div>
    </div>
  );
};

export default Roleta;
