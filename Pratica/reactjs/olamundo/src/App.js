import Conteudo from "./conteudo";
import logo from './logo.svg';
import { useState } from "react";



function App() {
  let texto = 'Texto da vVariável.'
  let [nroCliques, setNroCliques] = useState(0)

  function clique() {
    setNroCliques(nroCliques+1);
  
  }

  return (
    <div className="App">
      <Conteudo 
        texto='Conteudo do Props' 
        logo={logo} 
        onClick={clique}
        nCliques={nroCliques}
        />
    </div>
  );
}

export default App;
