import React, { useContext } from 'react'
import { UserContex } from '../Context/User.jsx';
import Profile from '../Profile/Profile.css';

export default function Profile() {
    const {userData} = useContext(UserContex);
    console.log(userData);
  return (
    <aside className={`${style.profile}`}> 
    <div className='user-info'>
        <h2>{userData.userName}</h2>
        <img src={user.Data.image.secure_url}/>
    </div>
    <div className='user-contant'>
        <h2 className='test'>{userData.email}</h2>
        <h2>{userData.phone}</h2>
    </div>
   </aside>
  )
}
