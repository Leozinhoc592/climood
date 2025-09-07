import React from 'react';
import logo from '../assets/logo.png';

const Titulo = ({ onClick }) => {
  return (
      <img src={logo} alt="Climood" className="logo" onClick={onClick}/>
  );
};

export default Titulo;