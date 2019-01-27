import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import Events from '../containers/Events';
import Description from '../containers/Description';
import Alert from './Alert';

export default class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.app}>
        {this.props.events ? <><Events /><Description /></> : <Alert /> }
      </div>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array,
};
