import React from "react";
import people from "./Data/people";
import './App.css'

function App() {

  return (
    <div>
    <h1 className="title">🌳Lista de Pessoas 🌳</h1>
    <div className="card-container">
      {people.map((p) => (
        <div className="card">
          <h2>{p.nome}</h2>
          <p>Idadee: {p.idade}</p>
          <p>Peso: {p.peso}</p>
          <p>Altura: {p.altura}</p>
          <p>IMC = {(p.peso / (p.altura * p.altura)).toFixed(2)} {((p.peso/Math.pow(p.altura,2))>30)&&('⚠️')}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default App;
