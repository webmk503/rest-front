import React from 'react';
import { Button } from '../ui';
import styles from './LoginView.module.scss';

export const LoginView: React.FC = () => {
  return (
    <div className={styles.loginWrapper}>
      <Button variant="outlined" size="large" withLink="/statistics">
        Login as Admin
      </Button>
      <Button variant="outlined" size="large" withLink="/tables">
        Login as Waiter
      </Button>
    </div>
  );
};
