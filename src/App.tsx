import React from 'react';
import { AppRouter } from './components';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <AppRouter />
    </div>
  );
}

export default App;
