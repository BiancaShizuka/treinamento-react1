import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'

function ItemList(props){
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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.itens.map(item =>(
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default ItemList;