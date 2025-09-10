import React from 'react';
import Titulo from './Titulo';
import Termometro from './Termometro';
import Calendario from '../assets/calendario.png';
import Enviar from '../assets/enviar.png';
import Relatorio from '../assets/relatorio.png';
import CalendarioHover from '../assets/calendario_hover.png';
import EnviarHover from '../assets/enviar_hover.png';
import RelatorioHover from '../assets/relatorio_hover.png';

const Header = ({ onMudarStatus }) => {
  return (
    <header className="custom-header">
      <Titulo onClick={() => onMudarStatus("Home")} />

      <nav>
        <ul className="MenuCentral">
          <li onClick={() => onMudarStatus("Registros")}>
            <a href="#">
              <img
                src={Calendario}
                alt="Calendario"
                onMouseOver={e => (e.currentTarget.src = CalendarioHover)}
                onMouseOut={e => (e.currentTarget.src = Calendario)}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={Relatorio}
                alt="Relatorio"
                onMouseOver={e => (e.currentTarget.src = RelatorioHover)}
                onMouseOut={e => (e.currentTarget.src = Relatorio)}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={Enviar}
                alt="Enviar"
                onMouseOver={e => (e.currentTarget.src = EnviarHover)}
                onMouseOut={e => (e.currentTarget.src = Enviar)}
              />
            </a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="nav">
          <li><a href="#"><Termometro /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;