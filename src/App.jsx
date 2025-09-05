import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import InfoRegistro from "./components/InfoRegistro";
import SeletorMes from "./components/SeletorMes";

function App() {

  const date = new Date();
  const mesAtual = date.getMonth() + 1;

  const [registroSelecionado, setRegistroSelecionado] = useState(null);
  const [statusMain, setStatusMain] = useState("Perguntas");
  const [MesSelecionado, setMesSelecionado] = useState(mesAtual)

  const handleRegistroSelecionado = (registro) => {
    setRegistroSelecionado(registro);
  };

  return (
    <>
      <Header 
      onMudarStatus={setStatusMain}
      statusAtual={statusMain} 
      />

      <div className="app-container">

        {statusMain === "Registros" && (
          <SeletorMes 
          mesAtual = {MesSelecionado} 
          onSelecionarMes={setMesSelecionado} />
        )}

        <MainContainer 
        onRegistroSelecionado={handleRegistroSelecionado}
        status={statusMain}
        onStatusChange={setStatusMain}
        mes={MesSelecionado}
        />
        
        {registroSelecionado && (
          <InfoRegistro registro={registroSelecionado} />
        )}
      </div>
    </>
  );
}

export default App;