import './App.css';
import ContadorDeCliques from './ContadorDeCliques';
import React,{useState} from 'react'
function App() {
  const [quantidade,setQuantidade]=useState(0);
  return (
    <div className="App">
      <ContadorDeCliques
        textoDescritivo="Quantidade de cliques acima"
        textoBotao="Botão superior"
        setQuantidade={setQuantidade}
        quantidade={quantidade}
      />
      <ContadorDeCliques
        textoDescritivo="Quantidade de cliques abaixo"
        textoBotao="Botão inferiror"
        setQuantidade={setQuantidade}
        quantidade={quantidade}
      />
    </div>
  );
}

export default App;
