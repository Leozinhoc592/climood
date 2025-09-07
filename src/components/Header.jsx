import React from 'react';
import Titulo from './Titulo';
import Termometro from './Termometro';
import Calendario from '../assets/calendario.png';
import Enviar from '../assets/enviar.png';
import Relatorio from '../assets/relatorio.png';

const Header = ({ onMudarStatus, statusAtual }) => {
  return (
    <header className="header">
      <Titulo onClick={() => onMudarStatus("Perguntas")} />

      <nav>
        <ul className='MenuCentral'>
          <li><a href="#"><img src={Calendario} alt="Calendario" /></a></li>
          <li><a href="#"><img src={Relatorio} alt="Relatorio" /></a></li>
          <li><a href="#"><img src={Enviar} alt="Enviar" /></a></li>
        </ul>
      </nav>

      <nav>
        <ul className="nav">
          <li><a href="#"><Termometro/></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
