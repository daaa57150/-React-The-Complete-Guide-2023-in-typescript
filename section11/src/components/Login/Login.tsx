import { useEffect, useReducer, useState } from 'react';

import Button from '@components/UI/Button/Button';
import Card from '@components/UI/Card/Card';
import _ from 'lodash';
import styles from './Login.module.css';


/// --- EMAIL --- ///
interface EmailState {
  value: string;
  isValid: boolean;
}

type EmailAction =
    { type: 'USER_INPUT'; value: string; }
  | { type: 'INPUT_BLUR' }
;

const isEmailValid = (email?: string) => email?.includes('@') ?? false;

const emailReducer = (state: EmailState, action: EmailAction): EmailState => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: isEmailValid(action.value) };
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: isEmailValid(state.value) };
  }

  return { value: '', isValid: false };
};


/// --- PASSWORD --- ///
interface PasswordState {
  value: string;
  isValid: boolean;
}

type PasswordAction =
    { type: 'USER_INPUT'; value: string; }
  | { type: 'INPUT_BLUR' }
;

const isPasswordValid = (password?: string) => !_.isEmpty(password) && password!.trim().length > 6;

const passwordReducer = (state: PasswordState, action: PasswordAction): PasswordState => {
  if (action.type === 'USER_INPUT') {
    return { value: action.value, isValid: isPasswordValid(action.value) };
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: isPasswordValid(state.value) };
  }

  return { value: '', isValid: false };
};


interface Props {
  onLogin: (email: string, password: string) => void;
}

export default function Login ({ onLogin }: Props) {

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false,
  });

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredEmail = event.target.value;
    dispatchEmail({ type: 'USER_INPUT', value: enteredEmail });

    // TODO: should be a consequence of the previous effect
    setFormIsValid(isEmailValid(enteredEmail) && passwordState.isValid);
  };

  const passwordChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const enteredPassword = event.target.value;
    dispatchPassword({ type: 'USER_INPUT', value: enteredPassword });

    // TODO: should be a consequence of the previous effect
    setFormIsValid(emailState.isValid && isPasswordValid(enteredPassword));
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };



  /// --- FORM --- ///
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    console.log('Checking form validity!');
    setFormIsValid(emailState.isValid && passwordState.isValid);
  }, [emailState.isValid, passwordState.isValid]);

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailState.isValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordState.isValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type='submit' disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
