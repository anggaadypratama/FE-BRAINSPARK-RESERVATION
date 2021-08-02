import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DataRespondersStyle from './style';

const columns = [
  {
    id: 'name', label: 'Name', minWidth: 300, align: 'left',
  },
  {
    id: 'date', label: 'Date', minWidth: 100, align: 'left',
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'register',
    label: 'Total Register',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'download',
    label: 'Download',
    minWidth: 50,
    align: 'left',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, date, status, register, download) {
  return {
    name, date, status, register, download,
  };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263, 'download'),
  createData('China', 'CN', 1403500365, 9596961, 'download'),
  createData('Italy', 'IT', 60483973, 301340, 'download'),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const DataRespondersSection = () => {
  const classes = DataRespondersStyle();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  classes={{ head: classes.headTable, root: classes.table }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell
                      classes={{ root: classes.table }}
                      key={column.id}
                      align={column.align}
                    >
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.pagination}>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

    </Paper>
  );
};

export default DataRespondersSection;
