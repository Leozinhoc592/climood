import React, { useState } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

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

const Roleta = () => {
  const [selected, setSelected] = useState(1);

  const emotes = [
    emote1, emote2, emote3, emote4, emote5,
    emote6, emote7, emote8, emote9, emote10,
  ];

  const handleChange = (value) => {
    setSelected(value);
    localStorage.setItem('humor', value);
    console.log('Humor selecionado:', value);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      width: '100%',
      maxWidth: '300px',
      position: 'relative',
    }}>
      <CircularSlider
        width={280}
        min={1}
        max={10}
        knobColor="#4e4e4e"
        progressColorFrom="#dad3b5"
        progressColorTo="#8a7e5d"
        trackColor="#ccc"
        value={selected}
        onChange={handleChange}
        hideLabelValue   
      />

  
      <div style={{
        position: 'absolute',
        width: '80px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={emotes[selected - 1]}
          alt={`Emote ${selected}`}
          style={{ width: '80px', height: '80px' }}
        />
      </div>
    </div>
  );
};

export default Roleta;
