import React from 'react'
import { UserContex } from '../Context/User.jsx';
import { createContext } from "react";
export default function UserInfo() {
    const {userData,Loading} = useContext(UserContex);
    
    if(Loading){
        return <h2>...Loading</h2>
    }
  return (
    
   <div>
   <h2>{userData.userName}</h2>
   <img src={user.Data.image.secure_url}/>
   </div>
        
    
    
   
  )
}
