import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Roleta from './components/Roleta';
import Perguntas from './components/Perguntas';

function App() {
  return (
    <>
      <Header />
      <MainContainer>
      <Roleta />
      <Perguntas />
      </MainContainer>
    </>
  );
}

export default App;
