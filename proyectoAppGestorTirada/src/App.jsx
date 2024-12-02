import React from 'react';
import NavBar from './component/NavBar/NavBar';
import GestorPJ from './component/GestorPJ/GestorPJ';
import './App.css';

function App() {
  return (
    <div className="appContainer">
      <NavBar />
      <GestorPJ />
    </div>
  );
}

export default App;
