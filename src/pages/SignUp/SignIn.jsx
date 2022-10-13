import React, { useRef } from 'react';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import './SignIn.css';

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      });
  }

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((authUser) => {
      console.log(authUser)
    })
    .catch((error) => {
      alert(error.message)
    });
  }
  
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4><span className="signupScreen__gray">New to Netflix? </span>
        <span className="signupScreen__link" onClick={register}>Sign Up now.</span></h4>
      </form>
    </div>
  )
}

export default SignIn