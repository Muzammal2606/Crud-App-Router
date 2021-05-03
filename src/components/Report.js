import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Report() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop:'-450px',marginLeft:'250px'}}>
        <span style={{color:'blue',fontSize:'30px'}}>Reports</span>
      <CircularProgress />
      
    </div>
  );
}
