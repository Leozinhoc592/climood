import React from 'react';
import Titulo from './Titulo';
import Termometro from './Termometro';


const Header = () => {
  return (
    <header className="header">
      <Titulo />
      {/* outros elementos */}
      <nav>
        <ul className="nav">
          <li><a href="#"><Termometro/></a></li>
        </ul>
      </nav>
      
    </header>
  );
};

export default Header;
