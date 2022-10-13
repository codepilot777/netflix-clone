import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../utils/firebase';
import Nav from '../../components/Nav/Nav';
import './Profile.css';

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button className="profileScreen__signOut" onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
      <h1>This is a profile page</h1>
    </div>
  )
}

export default Profile