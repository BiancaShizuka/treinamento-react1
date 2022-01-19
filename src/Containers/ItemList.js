import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React,{useState,useEffect} from 'react'
import api from '../Services/api';

function ItemList(props){
    const [itens,setItens] =useState([])

    useEffect(()=>{
        api.getItens()
            .then(itens => setItens(itens));
    },[])

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow style={{backgroundColor:'#0099ff'}}>
                        <TableCell align="center">
                            ID
                        </TableCell>
                        <TableCell align="center">
                            Código
                        </TableCell>
                        <TableCell align="center">
                            Descrição
                        </TableCell>
                        <TableCell align="center">
                            Status
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {itens.map(item =>(
                        <TableRow key={item.id}>
                            <TableCell align="center">
                                {item.id}
                            </TableCell>
                            <TableCell align="center">
                                {item.codigo}
                            </TableCell>
                            <TableCell align="center">
                                {item.descricao}
                            </TableCell>
                            <TableCell align="center">
                                {item.ativo? "Ativo": "Não Ativo"}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ItemList;