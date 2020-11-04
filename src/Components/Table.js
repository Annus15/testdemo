import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import  ProgressBar  from "./progress-bar";
import { Link } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,

  },
});

export default function CustomizedTables(props) {
    var {machines} = props;
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        
          
        <TableBody>
            <StyledTableRow key={machines.name}>
              <StyledTableCell align="center">
              <Link to = {`/machines/${machines.id}`}>{machines.name}</Link>
              </StyledTableCell>
              <StyledTableCell align="center">{machines.ip_address}</StyledTableCell>
              <StyledTableCell> </StyledTableCell>
              <StyledTableCell>
              {<ProgressBar 
                completed ={machines.health}
                bgcolor = {machines.health < 75 ? 
                  machines.health <50 ? "#D9534F" : 
                  machines.health >= 0 ? "#f0ad4e" : null : "#5cb85c"}
                />
              }
                </StyledTableCell>
            </StyledTableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
