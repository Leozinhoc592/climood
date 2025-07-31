import HorasDormidas from './HorasDormidas';

const Perguntas = ({ onEnviar }) => {
  return (
    <div className="perguntas-container">
      <div className="pergunta">
        <p>Você trabalhou hoje?</p>
        <label>Sim<input type="radio" name="trabalho" value="Sim" /></label>
        <label>Não<input type="radio" name="trabalho" value="Não" /></label>
      </div>

      <div className="pergunta">
        <p>Quantas horas em média você dormiu?</p>
        <HorasDormidas />
      </div>

      <div>
        <button type="button" onClick={onEnviar}>Enviar</button>
      </div>
    </div>
  );
};

export default Perguntas;

