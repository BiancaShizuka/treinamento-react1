import React,{useState} from 'react'

function ContadorDeCliques(props){
    const textoDescritivo=props.textoDescritivo;
    const textoBotao=props.textoBotao;

    function incrementarQuantidade(){
        props.setQuantidade(props.quantidade+1);
    }

    return <>
        <h2>{textoDescritivo}: {props.quantidade}</h2>
        <button type="button" onClick={incrementarQuantidade}>{textoBotao}</button>
    </>
    

}
export default ContadorDeCliques;