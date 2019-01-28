import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import Events from '../containers/Events';
import Description from '../containers/Description';
import Alert from './Alert';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        {this.props.events.length === 0 ? <Alert /> : <><Events /><Description /></> }
      </div>
    );
  }
}

App.propTypes = {
  events: PropTypes.array,
};
