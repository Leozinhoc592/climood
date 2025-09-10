import { useState } from "react";
import NextButton from "../assets/next.png";
import SaveButton from "../assets/salvar.png";
import './Relatorio.css';

const perguntas = [
  "Você tem se sentido triste com frequência?",
  "Percebeu perda de interesse em atividades que antes gostava?",
  "Se sente ansioso(a) em situações cotidianas?",
  "Se irrita com facilidade mais do que o habitual?",
  "Tem tido dificuldade para dormir ou se manter dormindo?",
  "Sente-se cansado(a) mesmo após dormir?"
];

export default function Relatorio() {
  const [atual, setAtual] = useState(-1);
  const [respostas, setRespostas] = useState([]);
  const [relatorioFeito, setRelatorioFeito] = useState(false);

  const responder = (resposta) => {
    const novasRespostas = [...respostas];
    novasRespostas[atual] = resposta;
    setRespostas(novasRespostas);
  };

  const proximo = () => {
    if (atual === -1) {
      setAtual(0);
      return;
    }

    if (respostas[atual] === undefined) {
      alert("Por favor, selecione Sim ou Não antes de continuar.");
      return;
    }

    if (atual < perguntas.length - 1) {
      setAtual(atual + 1);
    } else {
      console.log("Relatório final:", respostas);
      alert("Relatório salvo!");
      setRelatorioFeito(true);
    }
  };

  const preencherNovamente = () => {
    setRespostas([]);
    setAtual(-1);
    setRelatorioFeito(false);
  };

  const voltarParaHome = () => {
    alert("Voltando para a Home...");
  };

  return (
    <div className="relatorio-container">
      {relatorioFeito ? (
        <>
          <h2>Relatório Concluído</h2>
          <p>
            Você já fez seu relatório! 📝<br /><br />
            Deseja preencher novamente?
          </p>
          
          <div className="flex gap-4">
            <button
              onClick={preencherNovamente}
              className="relatorio-btn"
            >
              Sim, preencher novamente
            </button>

          </div>
        </>
      ) : atual === -1 ? (
        <>
          <h2>Relatório</h2>
          <p>
            <strong>Bem-vindo à seção de Relatório.</strong> <br /><br />
            Seu relato diário é importante, mas aqui buscamos uma visão geral: 
            seu <strong>nome</strong>, <strong>idade</strong> e algumas perguntas 
            que podem ajudar seu especialista a compreender melhor seu momento.
          </p>
          <img
            src={NextButton}
            alt="Next"
            className="w-[105px] h-[70px] cursor-pointer hover:scale-105 transition-transform"
            onClick={proximo}
          />
        </>
      ) : (
        <>
          <h2>Relatório</h2>
          <p className="pergunta-texto">{perguntas[atual]}</p>

          <div className="opcoes-container">
            <label className="opcao-label">
              <input
                type="radio"
                name={`pergunta-${atual}`}
                value="Sim"
                checked={respostas[atual] === "Sim"}
                onChange={() => responder("Sim")}
                className="opcao-radio"
                required
              />
              <span className="opcao-texto">Sim</span>
            </label>
            <label className="opcao-label">
              <input
                type="radio"
                name={`pergunta-${atual}`}
                value="Não"
                checked={respostas[atual] === "Não"}
                onChange={() => responder("Não")}
                className="opcao-radio"
                required
              />
              <span className="opcao-texto">Não</span>
            </label>
          </div>

          {respostas[atual] === undefined && (
            <p className="text-red-500 text-sm mb-2">
              * Por favor, selecione uma opção
            </p>
          )}

          <img
            src={atual < perguntas.length - 1 ? NextButton : SaveButton}
            alt={atual < perguntas.length - 1 ? "Next" : "Salvar"}
            className={`w-[105px] h-[70px] hover:scale-105 transition-transform ${
              respostas[atual] === undefined ? 'botao-desabilitado' : 'botao-habilitado'
            }`}
            onClick={proximo}
          />

          <p className="mt-4 text-sm text-gray-600">
            Pergunta {atual + 1} de {perguntas.length}
          </p>
        </>
      )}
    </div>
  );
}