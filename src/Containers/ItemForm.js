import { Button, FormControl, Grid, TextField } from '@mui/material';
import React,{useState} from 'react'

function ItemForm(props){
    const [codigo,setCodigo]=useState('');
    const [descricao,setDescricao]=useState('');

    function adicionarItem(){
        
        let id=0;
        if(props.itens.length==0){
            id=0;
        }else{
            let length=props.itens.length;
            id=props.itens[length-1].id+1;
        }
        props.itens.push({id: id,codigo:codigo,descricao:descricao})
        
        setCodigo('');
        setDescricao('');
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
                <TextField fullWidth label="Codigo" value={codigo} onChange={e=> setCodigo(e.target.value)}/>
            </Grid>
            <Grid  item xs={12} sm={10}>
                <TextField fullWidth label="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}/>
            </Grid>

            <Grid item>
                <FormControl>
                    <Button variant="contained" color="primary" onClick={adicionarItem}>Salvar</Button>
                </FormControl>
            </Grid>
        </Grid>
    );
}
export default ItemForm;