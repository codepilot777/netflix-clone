import React, { useState } from 'react'

import SignIn from '../SignUp/SignIn';
import './Login.css';

const Login = () => {

  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="background image" className="loginScreen__logo" />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          SIGN IN
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {
          signIn ? (
            <SignIn />
          ) : (
            <>
              <h1>A non-professional Netflix Clone</h1>
              <h2>Watch anywhere. Cancel any time.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className="loginScreen__input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button className="loginScreen__getStarted" onClick={() => setSignIn(true)}>GET STARTED</button>
                </form>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}


export default Login