import React from 'react';
import CarouselHome from './CarouselHome';
import './Home.css'; 

const Home = ({ setStatus }) => {

  const handleRegistroDiario = () => {
    setStatus("Perguntas");

  };

  return (
    <div className="home-container"> 
      <div className="home-content">
        

        <div className="carousel-section">
          <CarouselHome />
        </div>
        

        <div className="home-text-section">
          <h2>Bem-vindo ao Climood</h2>
          <p>
            Acompanhe seu humor, sono e produtividade diariamente. 
            Registre como foi seu dia e descubra padrões para melhorar 
            seu bem-estar.
          </p>
          
          <div className="home-features">
            <div className="feature" onClick={handleRegistroDiario} >
              <h3>📊 Registro Diário</h3>
              <p>Clique aqui para fazer seu registro diario</p>
            </div>
            <div className="feature" onClick={handleRegistroEstatisticas}>
              <h3>📈 Estatísticas</h3>
              <p>Veja gráficos e insights sobre sua rotina</p>
            </div>
            <div className="feature" onClick={handleRegistroMetas}>
              <h3>🎯 Metas</h3>
              <p>Acompanhe seu progresso e melhore seus hábitos</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;