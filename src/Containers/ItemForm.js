import { Button, FormControl, Grid} from '@mui/material';
import Textfield from '../TextField';
import FormSwitch from '../Switch';
import React from 'react'
import { Field, Form } from 'react-final-form';
import api from '../Services/api';
function ItemForm(props){

    const validate = formValues =>{
        const error={}
        if(!formValues.codigo){
            error.codigo="Campo obrigatório";
        }
        if(!formValues.descricao || formValues.descricao.length <3){
            error.descricao="Descrição com mais de 2 digitos";
        }
        return error;
    }
    const onSubmit = formValues => {
        return api.createItem(formValues)
            .then(()=> alert("salvo com sucesso"))
            .catch(err => alert(`Erro: ${err.message}`));
        /*props.itens.push({id: props.id,codigo: formValues.codigo,descricao: formValues.descricao})
        props.setId(props.id+1);
        alert(`${formValues.codigo} ${formValues.descricao}`);*/
    }

    return (
        <Form onSubmit={onSubmit} validate={validate} initialValues={{codigo:"",descricao:"",ativo: true}}>
            {formProps => (<form onSubmit={formProps.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}>
                        <Field name="codigo" label="Codigo" component={Textfield} />
                    </Grid>
                    <Grid  item xs={12} sm={10}>
                        <Field name="descricao" label="Descricao" component={Textfield} />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Field type="checkbox" name="ativo" label="Ativo" component={FormSwitch}/>
                    </Grid>
                    <Grid item>
                        <FormControl>
                            <Button type="submit" variant="contained" color="primary">Salvar</Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </form>)}
        </Form>
    );
}
export default ItemForm;