import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {data} from './studentData'
import {useState} from 'react'
import TableData from './tableData'
import './table.css'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function DenseTable() {
  const classes = useStyles();

   const [students, setStudents] = useState(data)
    const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("")
    const [Batch, setBatch] = useState("")
    const [roll, setRoll] = useState("")
    const [stuClass, setStuClass] = useState("")
    const [flag, setFlag] = useState(false);
    const [updatedIndex, setUpdatedIndex] = useState(0)





    const deleteHandler = (index) => {
        
        let newStudents = students.filter((student, i) => {
            if (i !== index) {
                return student;
            }
        });

        setStudents([...newStudents]);

    }

    const updateHandler = (student, index) => {

        setUpdatedIndex(index);
        setName(student.name);
        setStuClass(student.class);
        setRoll(student.roll);
        setBatch(student.batch);
        setFlag(true);

    }

    const ctaHandler = () => {
        setMessage("")

        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }
        
            setStudents([...students, student]);
            setName("");
            setStuClass("");
            setRoll("");
            setBatch("");

        }
        else {
            setMessage(" Found few of params empty! Params can't be empty.")
        }

    }


    const ctaUpdateHandler = () => {
        setMessage("")

        if (name != "" && Batch != "" && roll != "" && stuClass != "") {
            let student = {
                name,
                batch: Batch,
                roll,
                class: stuClass
            }

            let updateStudents = students.map((stu,index) => {
                if (updatedIndex === index) {
                    return student
                }
            else {
            return stu;
        }
    })

    setStudents([...updateStudents]);
    setName("");
    setStuClass("");
    setRoll("");
    setBatch("");
    setFlag(false);

}
    else {
    setMessage(" Found few of params empty! Params can't be empty.")
}
    }

  return (
      <div className='table'>
          <div className="input">
      <TextField id="filled-basic" label="Name" variant="filled" value={name} name="name" className='add1' onChange={(e) => setName(e.target.value)} />
        <TextField id="filled-basic" label="Batch" variant="filled" value={Batch} name="s" className='add1' onChange={(e) => setBatch(e.target.value)} />
        <TextField id="filled-basic" label="Roll No" variant="filled" value={roll} className='add1' onChange={(e) => setRoll(e.target.value)} />
        <TextField id="filled-basic" label="Class" variant="filled" value={stuClass} className='add1' onChange={(e) => setStuClass(e.target.value)} />
        {flag ?

            <Button variant="contained" color="primary"onClick={ctaUpdateHandler} className='bton'>
            update
            </Button>
            :
            
            <Button variant="contained" color="primary"onClick={ctaHandler} className='bton'>
            Submit
            </Button>
        }

        <p style={{ backgroundColor: "red", color: 'white' }}>
            {
                errorMessage
            }
        </p>
        </div>
    <TableContainer component={Paper} className='contain'>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className='head'>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Batch</TableCell>
            <TableCell>Roll No</TableCell>
            <TableCell>Class</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        {
                students.map((item, index) => {
                    return <TableData index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
                })
            }
      </Table>
    </TableContainer>
    </div>
  );
}
