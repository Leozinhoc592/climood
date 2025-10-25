import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContainer from "./components/MainContainer";
import InfoRegistro from "./components/Header/Calendario/InfoRegistro";
import SeletorMes from "./components/Header/Calendario/SeletorMes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const date = new Date();
  const mesAtual = date.getMonth() + 1;


  const [registroSelecionado, setRegistroSelecionado] = useState(null);
  const [statusMain, setStatusMain] = useState("Home");
  const [MesSelecionado, setMesSelecionado] = useState(mesAtual);

  const handleRegistroSelecionado = (registro) => {
    setRegistroSelecionado(registro);
  };


  const handleStatusChange = (novoStatus) => {
    setStatusMain(novoStatus);
    if (novoStatus === "Home" || novoStatus === "Perguntas" || novoStatus === "Relatorio") {
      setRegistroSelecionado(null);
    }
  };


  return (
    <>
      <Header 
        onMudarStatus={handleStatusChange} 
        statusAtual={statusMain} 
      />

      <div className="app-container">

    
        {statusMain === "Registros" && (
          <SeletorMes 
            mesAtual={MesSelecionado} 
            onSelecionarMes={setMesSelecionado} 
          />
        )}


        <MainContainer 
          onRegistroSelecionado={handleRegistroSelecionado}
          status={statusMain}
          onStatusChange={handleStatusChange} 
          mes={MesSelecionado}
        />


        {statusMain === "Registros" && !registroSelecionado && (
          <div className="spacer" />
        )}


        {registroSelecionado && statusMain !== "Perguntas" && (
          <InfoRegistro registro={registroSelecionado} />
        )}

      </div>
    </>
  );
}

export default App;
