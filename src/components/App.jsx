import React from 'react';
import styles from './App.module.css';
import Events from '../containers/Events';
import Description from '../containers/Description';

const App = () => (
  <div className={styles.app}>
    <Events />
    <Description />
  </div>
);

export default App;
