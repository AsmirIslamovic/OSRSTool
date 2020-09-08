import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

import stab_icon from '../../../images/StatIcons/Stab_icon.png';
import slash_icon from '../../../images/StatIcons/Slash_icon.png';
import crush_icon from '../../../images/StatIcons/Crush_icon.png';
import magic_icon from '../../../images/StatIcons/Magic_icon.png';
import ranged_icon from '../../../images/StatIcons/Ranged_icon.png';
import strength_icon from '../../../images/StatIcons/Strength_icon.png';
import ranged_strength_icon from '../../../images/StatIcons/Ranged_Strength_icon.png';
import magic_damage_icon from '../../../images/StatIcons/Magic_Damage_icon.png';
import prayer_icon from '../../../images/StatIcons/Prayer_icon.png';
import styles from './EnhancedTable.module.css';

function descendingComparator(a, b, orderBy) {
  if (b.equipment[orderBy] < a.equipment[orderBy]) {
    return -1;
  }
  if (b.equipment[orderBy] > a.equipment[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'attack_stab', numeric: true, disablePadding: true, icon: stab_icon },
    { id: 'attack_slash', numeric: true, disablePadding: true, icon: slash_icon},
    { id: 'attack_crush', numeric: true, disablePadding: true, icon: crush_icon },
    { id: 'attack_magic', numeric: true, disablePadding: true, icon: magic_icon },
    { id: 'attack_ranged', numeric: true, disablePadding: true, icon: ranged_icon },
    { id: 'defence_stab', numeric: true, disablePadding: true, icon: stab_icon },
    { id: 'defence_slash', numeric: true, disablePadding: true, icon: slash_icon },
    { id: 'defence_crush', numeric: true, disablePadding: true, icon: crush_icon },
    { id: 'defence_magic', numeric: true, disablePadding: true, icon: magic_icon },
    { id: 'defence_ranged', numeric: true, disablePadding: true, icon: ranged_icon },
    { id: 'melee_strength', numeric: true, disablePadding: true, icon: strength_icon },
    { id: 'ranged_strength', numeric: true, disablePadding: true, icon: ranged_strength_icon },
    { id: 'magic_damage', numeric: true, disablePadding: true, icon: magic_damage_icon},
    { id: 'prayer', numeric: true, disablePadding: true, icon: prayer_icon }
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"> </TableCell>
        <TableCell> </TableCell>
        <TableCell 
          colSpan={5}
          align={'center'}
          className={styles.major_column}
        > Attack Bonus</TableCell>

        <TableCell 
          colSpan={5} 
          align={'center'}
          className={styles.major_column}
        > Defence Bonus</TableCell>

        <TableCell colSpan={4} 
          align={'center'}
          className={styles.major_column}
        > Other Bonus</TableCell>

      </TableRow>
      <TableRow>
        <TableCell padding="checkbox"> </TableCell>
        <TableCell> Item</TableCell> 

        {headCells.map((headCell) => (
          <TableCell
            className={styles.minor_column}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <img className={styles.icon} src={headCell.icon} alt="icon"></img>
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

      </TableRow>
    </TableHead>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    left:100,
    width: '100%',
  },
  paper: {
    width: '100%',
  },
  container: {
    height:400,
    maxHeight: 400,
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  selected: {
    color: 'green',
  }
}));

function makeArray(a) {
  const arr = [];
  for (const item in a){
    if(a[item]){
      arr.push(a[item].id);
    }
  }
  return arr;
}

export default function EnhancedTable({gear,data,handleEquipItem}) {
  let rows = [];
  if (data){
    rows = data;
  }
  gear = makeArray(gear);

const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('attack_stab');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleClick = (event, name , item) => {
    handleEquipItem(item)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rows ? rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage) : rowsPerPage;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows ? rows.length:0}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = gear.includes(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event,row.name, row)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <img src={row.image} alt={"item icon"}/>    
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell className={styles.minor_column} align="right">{row.equipment.attack_stab}</TableCell>
                      <TableCell align="right">{row.equipment.attack_slash}</TableCell>
                      <TableCell align="right">{row.equipment.attack_crush}</TableCell>
                      <TableCell align="right">{row.equipment.attack_magic}</TableCell>
                      <TableCell align="right">{row.equipment.attack_ranged}</TableCell>
                      <TableCell className={styles.minor_column} align="right">{row.equipment.defence_stab}</TableCell>
                      <TableCell align="right">{row.equipment.defence_slash}</TableCell>
                      <TableCell align="right">{row.equipment.defence_crush}</TableCell>
                      <TableCell align="right">{row.equipment.defence_magic}</TableCell>
                      <TableCell align="right">{row.equipment.defence_ranged}</TableCell>
                      <TableCell className={styles.minor_column} align="right">{row.equipment.melee_strength}</TableCell>
                      <TableCell align="right">{row.equipment.ranged_strength}</TableCell>
                      <TableCell align="right">{row.equipment.magic_damage}</TableCell>
                      <TableCell align="right">{row.equipment.prayer}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table >
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
