import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from './Description.module.css';


export default class Events extends React.Component {
  render() {
    return (
      <Paper className={styles.root}>описание события</Paper>
    );
  }
}

Events.propTypes = {
};
