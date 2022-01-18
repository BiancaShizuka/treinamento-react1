import './App.css';
import React,{useState} from 'react'
import {ThemeProvider,createTheme} from '@mui/material/styles';
import {Box, AppBar, Tabs, Tab} from '@mui/material';
import Configuration from './Containers/Configuration';
import ItemForm from './Containers/ItemForm';
import ItemList from './Containers/ItemList';

const theme = createTheme({
  palette:{
    primary:{
      main:'#478BC9',
    },
    secondary:{
      main:'#80F1D3'
    },
  }
});
function App() {
  const [selectedTab,selectTab]=useState(0);
  const [itens,setItens]=useState([]);


  function handleTabSelection(event,newValue){
    selectTab(newValue)
  }

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Tabs value={selectedTab} onChange={handleTabSelection}>
            <Tab label="Configuracao"/>
            <Tab label="Novo Item"/>
            <Tab label="Itens"/>
          </Tabs>
        </AppBar>
        <Box p={3}>
          {selectedTab == 0? <Configuration/> : null}
          {selectedTab == 1? <ItemForm itens={itens} setItens={setItens}/>: null}
          {selectedTab == 2? <ItemList itens={itens}/> : null}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;


/*
Enquanto dou uma olhada vou te passando o próximo desafio:
Crie um state no App pra armazenar uma lista de itens no formato
{id: 1, codigo:"AP1", descricao: "Abacaxi Pérola"}
Na tela Novo item faz o cadastro mostrando os campos código e descrição (id deve ser gerado automaticamente) e o 
botão de salvar, que deve criar um novo item e inserir na lista
Na tela itens faz uma listagem simples dos dados dos itens. Pode ser só texto, mas se já se sentir aventureiro pode 
usar a tabela do material-ui

*/
