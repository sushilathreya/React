import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import { useRef } from 'react';
import { useState } from 'react';

const Auth = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const dispatch = useDispatch();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  

  const loginHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value.trim();
    const enteredPassword = passwordInputRef.current.value.trim();

    const enteredEmailIsValid = enteredEmail.length > 0 && enteredEmail.includes('@');

    const enteredPasswordIsValid = enteredPassword.length > 5

    setEmailIsValid(enteredEmailIsValid);

    setPasswordIsValid(enteredPasswordIsValid);

    const formIsValid = enteredPasswordIsValid && enteredEmailIsValid;

    if(!formIsValid) {
      return;
    }


    setEmailIsValid(true);
    setPasswordIsValid(true);
    dispatch(authActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={emailInputRef} />
            {!emailIsValid && <p>Please enter a valid email</p>}
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={passwordInputRef}/>
            {!passwordIsValid && <p>The password must be at least 6 characters</p>}
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
