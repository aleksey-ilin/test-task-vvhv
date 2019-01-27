import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styles from './Description.module.css';
import Carousel from '../containers/Carousel';

export default class Events extends React.Component {
  render() {
    const { activeEvent } = this.props;
    return (
      <Paper className={styles.root}>
        {activeEvent.description ? <Carousel></Carousel> : null}
        {activeEvent.description ? <div dangerouslySetInnerHTML={{ __html: activeEvent.description.description }} /> : null}
        Стоимость:{activeEvent.description ? activeEvent.description.price : null}
      </Paper>
    );
  }
}

Events.propTypes = {
  activeEvent: PropTypes.object,
};
