import React,{useState} from 'react'

import {ThemeProvider,createTheme} from '@mui/material/styles';
import {Button,TextField,FormControlLabel,Switch,Grid,FormControl, Typography} from '@mui/material';

function Configuration(){
    const [usuario,setUsuario]=useState('');
    const [email,setEmail]=useState('');
    const [receberNotificacoes,setReceberNotificacoes]=useState('');
    return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Usuário"
              value={usuario}
              onChange={ev => setUsuario(ev.target.value)}/>
          </Grid>
          
          <Grid item xs={12}  sm={8}>
              <TextField
                fullWidth
                label="E-mail"
                value={email}
                onChange={ev => setEmail(ev.target.value)}/>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              control={<Switch
                checked={receberNotificacoes}
                onChange={ev =>setReceberNotificacoes(ev.target.checked)}
              />}
              label="Receber Notificações"/>
          </Grid>
          
          <Grid item xs={12}>
            <FormControl>
              <Button variant="contained" color="primary">Salvar</Button>
              </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Usuário: {usuario}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Email: {email} ({receberNotificacoes ? "Receber notificações" :
            "Não receber notificações"})</Typography>
          </Grid>
        </Grid>
    );
}

export default Configuration;