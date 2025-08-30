import { useState } from 'react';
import HorasDormidas from './HorasDormidas';

function pad(n) {
  return String(n).padStart(2, '0');
}

const Perguntas = ({ onEnviar }) => {
  const [trabalhou, setTrabalhou] = useState(null);
  const [horasDormidas, setHorasDormidas] = useState(8);

  const handleEnviar = () => {
    if (trabalhou === null) {
      alert("Selecione se trabalhou hoje.");
      return;
    }

    const emojiSelecionado = "😐";  // trocar assim que possivel

    const agora = new Date();
    const dataFormatada = `${agora.getFullYear()}-${pad(agora.getMonth()+1)}-${pad(agora.getDate())}`;

    const registro = {
      humor: emojiSelecionado,
      dormiu: horasDormidas,
      trabalhou: trabalhou === "Sim",
      data: dataFormatada
    };

    // salvar
    const registrosExistentes = JSON.parse(localStorage.getItem('registros') || '[]');
    registrosExistentes.push(registro);
    localStorage.setItem('registros', JSON.stringify(registrosExistentes));

    onEnviar(registro);
  };

  return (
    <div className="perguntas-container">
      <div className="pergunta">
        <p>Você trabalhou hoje?</p>
        <label>
          Sim
          <input
            type="radio"
            name="trabalho"
            value="Sim"
            checked={trabalhou === "Sim"}
            onChange={(e) => setTrabalhou(e.target.value)}
          />
        </label>
        <label>
          Não
          <input
            type="radio"
            name="trabalho"
            value="Não"
            checked={trabalhou === "Não"}
            onChange={(e) => setTrabalhou(e.target.value)}
          />
        </label>
      </div>

      <div className="pergunta">
        <p>Quantas horas em média você dormiu?</p>
        <HorasDormidas
          value={horasDormidas}
          onChange={setHorasDormidas}
        />
      </div>

      <div>
        <button type="button" onClick={handleEnviar}>Enviar</button>
      </div>
    </div>
  );
};

export default Perguntas;
