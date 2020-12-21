import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Switch,
} from '@material-ui/core';

const List = ({ data }) => {

  const onEnabledChange = async (id) => {
    const row = data.find(d => d.id === id);
    row.closed = !row.closed;

    await fetch(`http://localhost:8080/business/${row.id}`, {
      method: 'PUT',
      body: JSON.stringify(row),
    });
  };

  if (!data.length) {
    return 'Empty';
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Manager</TableCell>
            <TableCell align="center">Ville</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Closed</TableCell>
            <TableCell align="center">Date de dernière modification</TableCell>
            <TableCell align="center">Date de création</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map(row => (
              <TableRow>
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.manager}</TableCell>
                <TableCell align="center">{row.city}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{!row.closed ? 'Activé': 'Désactivé'}</TableCell>
                <TableCell align="center">{row.createdAt}</TableCell>
                <TableCell align="center">{row.updatedAt}</TableCell>
                <TableCell align="center">
                  <Switch
                    data-testid="switch-affair-closed"
                    color="primary"
                    checked={row.closed}
                    onChange={() => onEnabledChange(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default List;
