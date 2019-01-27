import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './Events.module.css';
import TablePaginationActions from './TablePaginationActions';

export default class Events extends React.Component {
  state = { rowsPerPage: 10, rowsHeight: 80 };

  handleChangePage = (event, page) => this.props.changeCurrentPage(page);

  handleChangeEvent = id => () => {
    this.props.changeActiveEvent(id);
    this.props.fetchDescription(id);
  };

  render() {
    // console.log(this.props);
    const { events, currentPage, activeEvent } = this.props;
    const { rowsPerPage, rowsHeight } = this.state;
    const emptyRows = rowsPerPage - (events.length - currentPage * rowsPerPage);

    return (
      <Paper className={styles.root}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell className={styles.head}>дата/время события</TableCell>
              <TableCell className={styles.head}>картинка события</TableCell>
              <TableCell className={styles.head}>название события</TableCell>
              <TableCell className={styles.head}>место проведения события</TableCell>
              <TableCell className={styles.head}>адрес места</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events
              ? events.slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
                .map(event => (
                <TableRow
                  className={event.id === activeEvent.id ? styles.row_active : styles.row}
                  key={event.id}
                  onClick={this.handleChangeEvent(event.id)}>
                  <TableCell className={styles.date}>
                    {event.dates.start_date} <br /> {event.dates.start_time}
                  </TableCell>
                  <TableCell className={styles.image}>
                    <img src={event.images[0].image} alt="event"></img>
                  </TableCell>
                  <TableCell className={styles.title}>{event.title}</TableCell>
                  <TableCell className={styles.place_title}>
                    {event.place ? event.place.title : null}
                  </TableCell>
                  <TableCell className={styles.place_address}>
                    {event.place ? event.place.address : null}
                  </TableCell>
                </TableRow>
                )) : null}
              {emptyRows > 0 && (
                <TableRow style={{ height: rowsHeight * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
          </TableBody>
          <TableFooter className={styles.footer}>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[this.state.rowsPerPage]}
                colSpan={5}
                count={events.length}
                rowsPerPage={rowsPerPage}
                page={currentPage}
                SelectProps={{
                  native: true,
                }}
                onChangePage={this.handleChangePage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array,
  currentPage: PropTypes.number,
  activeEvent: PropTypes.object,
  changeCurrentPage: PropTypes.func,
  changeActiveEvent: PropTypes.func,
  fetchDescription: PropTypes.func,
};
