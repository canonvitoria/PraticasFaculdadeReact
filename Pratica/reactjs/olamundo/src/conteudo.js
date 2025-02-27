import React from "react";
import './App.css';

function Conteudo(props) {
   
    return(
        <header className="App-header">
        <img src={props.logo} className="App-logo" alt="logo" />

        <p>Botão clicado {props.nCliques} vezes.</p>
        
        <input type='button' value="botao" onClick={props.onClick} /> 
      </header>
    ) 
}

export default Conteudo;