import { Button, FormControl, Grid} from '@mui/material';
import Textfield from '../TextField';
import React from 'react'
import { Field, Form } from 'react-final-form';

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
        props.itens.push({id: props.id,codigo: formValues.codigo,descricao: formValues.descricao})
        props.setId(props.id+1);
        console.log(props.itens);
        alert(`${formValues.codigo} ${formValues.descricao}`);
    }

    return (
        <Form onSubmit={onSubmit} validate={validate}>
            {formProps => (<form onSubmit={formProps.handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Field name="codigo" label="Codigo" component={Textfield} fullWidth />
                    </Grid>
                    <Grid  item xs={12}>
                        <Field name="descricao" label="Descricao" component={Textfield} fullWidth/>
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