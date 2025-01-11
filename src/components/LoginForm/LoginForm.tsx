import React from 'react';
import { TextBox } from 'devextreme-react/text-box';
import { Button } from 'devextreme-react/button';
import styles from './LoginForm.module.css';

const LoginForm: React.FC = () => {
  return (
    <div className={styles.loginForm}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form}>
        <div className={styles.inputContainer}>
          <TextBox placeholder="Email" stylingMode="outlined" />
        </div>
        <div className={styles.inputContainer}>
          <TextBox
            placeholder="Password"
            stylingMode="outlined"
            mode="password"
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            text="Login"
            type="default"
            stylingMode="contained"
            onClick={() => alert('Logging in...')}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
