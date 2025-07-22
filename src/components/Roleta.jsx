import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

const Roleta = () => (
  <div style={{
    width: '300px',
    height: '400px',
    borderRadius: '20px',
    margin: 'auto',
    marginTop: '50px',
    background: '#ffd4ec',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // 🔥 centraliza verticalmente a roleta
    alignItems: 'center'      // 🔥 centraliza horizontalmente a roleta
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