import React,{useState} from 'react'

import {ThemeProvider,createTheme} from '@mui/material/styles';
import {Button,Grid,FormControl, Typography} from '@mui/material';
import { Field, Form } from 'react-final-form';
import Textfield from '../TextField';
import FormSwitch from '../Switch';
function Configuration(){
    /*
    const [formState,setFormState]=useState({usuario:"",email:"",receberNotificacoes:""})
    const setUsuario = value => setFormState(formState => ({...formState, usuario:value}));
    const setEmail = value => setFormState(formState => ({...formState, email:value}));
    const setReceberNotificacoes = value => setFormState(formState => ({...formState,receberNotificacoes: value}));
    */
    const [receberNotificacoes,setReceberNotificacoes]=useState(false);
    const validate = formValues =>{
        const error={}
        if(!formValues.usuario){
          error.usuario="Campo Obrigatório";
        }
        if(!formValues.email){
          error.email="Campo obrigatório";
        }
        return error;
    }
    const onSubmit = formValues=>{
      alert(`${formValues.usuario}\n ${formValues.email}\n ${formValues.receberNotificacoes? "Receber Notificações": "Não receber notificações"}`)
    }
    return (
      <Form onSubmit={onSubmit} validate={validate}>
        {formProps => (<form onSubmit={formProps.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Field name="usuario" label="Usuário" component={Textfield}/>
            </Grid>
            
            <Grid item xs={12}  sm={8}>
              <Field name="email" label="Email" component={Textfield}/>
            </Grid>
            
            <Grid item xs={12} sm={2}>
              <Field type="checkbox" name="receberNotificacoes" label="Receber notificações" component={FormSwitch}/>
            </Grid>
            
            <Grid item xs={12}>
              <FormControl>
                <Button type="submit" variant="contained" color="primary">Salvar</Button>
                </FormControl>
            </Grid>
            {/*
            <Grid item xs={12}>
              <Typography variant="subtitle1">Usuário: {formState.usuario}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Email: {formState.email} ({formState.receberNotificacoes ? "Receber notificações" :
              "Não receber notificações"})</Typography>
            </Grid>
            */}
          </Grid>
        </form>)}
      </Form>
    );
}

export default Configuration;