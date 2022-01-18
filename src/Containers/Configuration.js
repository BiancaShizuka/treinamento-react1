import React,{useState} from 'react'

import {ThemeProvider,createTheme} from '@mui/material/styles';
import {Button,TextField,FormControlLabel,Switch,Grid,FormControl, Typography} from '@mui/material';
import { Field, Form } from 'react-final-form';

function Configuration(){
    const [formState,setFormState]=useState({usuario:"",email:"",receberNotificacoes:""})
    const setUsuario = value => setFormState(formState => ({...formState, usuario:value}));
    const setEmail = value => setFormState(formState => ({...formState, email:value}));
    const setReceberNotificacoes = value => setFormState(formState => ({...formState,receberNotificacoes: value}));

    return (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Usuário"
              value={formState.usuario}
              onChange={ev => setUsuario(ev.target.value)}/>
          </Grid>
          
          <Grid item xs={12}  sm={8}>
              <TextField
                fullWidth
                label="E-mail"
                value={formState.email}
                onChange={ev => setEmail(ev.target.value)}/>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <FormControlLabel
              control={<Switch
                checked={formState.receberNotificacoes}
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
            <Typography variant="subtitle1">Usuário: {formState.usuario}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Email: {formState.email} ({formState.receberNotificacoes ? "Receber notificações" :
            "Não receber notificações"})</Typography>
          </Grid>
        </Grid>
    );
}

export default Configuration;