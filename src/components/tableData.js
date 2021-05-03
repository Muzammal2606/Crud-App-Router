import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button';




function TableData({student, index,deleteHandler, updateHandler}){

    return(
        <TableRow key={student.name}>
              <TableCell component="th" scope="row">
                {student.name}
              </TableCell>
              <TableCell >{student.batch}</TableCell>
              <TableCell >{student.roll}</TableCell>
              <TableCell >{student.class}</TableCell>
              <TableCell ><DeleteIcon color="secondary" onClick={()=> deleteHandler(index)} /></TableCell>
              <TableCell ><EditIcon color="primary" onClick={()=> updateHandler(student, index)} /></TableCell>
            </TableRow>
    );
}

export default TableData;