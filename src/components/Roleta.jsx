import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

const Roleta = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    padding: '2rem',
    width: '100%',
    maxWidth: '300px',
  }}>
    <CircularSlider
      width={280}
      label="Humor"
      data={['😐', '🙂', '😄', '😁', '🤪']}
      knobColor="#4e4e4e"
      progressColorFrom="#dad3b5"
      progressColorTo="#8a7e5d"
      trackColor="#ccc"
      onChange={(value) => console.log('Humor selecionado:', value)}
    />
  </div>
);

export default Roleta;
