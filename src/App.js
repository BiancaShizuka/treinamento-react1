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
          {selectedTab == 1? <ItemForm/>: null}
          {selectedTab == 2? <ItemList/> : null}
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
