import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Roleta from './components/Roleta';
import Perguntas from './components/Perguntas';
import ListaRegistros from './components/ListaRegistros';

function App() {
  return (
    <>
      <Header />
      <MainContainer/>
    </>
  );
}

export default App;
