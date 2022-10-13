import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import HomeScreen from './pages/HomeScreen/HomeScreen';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

import { login, logout, selectUser } from './features/userSlice';
import './App.css'

const App = () => {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          }
          )
        )
        console.log(user)
      } else {
        // logged out
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [])
  return (
    <Router>
      {
        !user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )
      }
    </Router>
  )
}

export default App