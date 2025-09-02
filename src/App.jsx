import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import InfoRegistro from "./components/InfoRegistro";

function App() {
  const [registroSelecionado, setRegistroSelecionado] = useState(null);
  const [statusMain, setStatusMain] = useState("Perguntas");

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
        <MainContainer 
        onRegistroSelecionado={handleRegistroSelecionado}
        status={statusMain}
        onStatusChange={setStatusMain}
        />
        
        {registroSelecionado && (
          <InfoRegistro registro={registroSelecionado} />
        )}
      </div>
    </>
  );
}

export default App;