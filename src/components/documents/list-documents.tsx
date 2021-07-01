import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(title: string, affair: string, pages: number) {
    return {title, affair, pages};
}

const rows = [
  createData('document 1', 'affair 1', 6,),
  createData('document 2', 'affair 2', 6,),
 /*  createData('document 3', 'affair 3', 6,),
  createData('document 4', 'affair 4', 6,),
  createData('document 5', 'affair 5', 6,) */
    
];

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

export default function ListDocuments() {
  const classes = useStyles();

    return (
        
<React.Fragment>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>File (Document)</StyledTableCell>
            <StyledTableCell >Affair</StyledTableCell>
            <StyledTableCell >Pages</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.title}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell >{row.affair}</StyledTableCell>
              <StyledTableCell >{row.pages}</StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
            </TableContainer>
    </React.Fragment>
  );
}
