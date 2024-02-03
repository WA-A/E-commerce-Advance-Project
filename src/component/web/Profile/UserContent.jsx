import React, { useContext } from 'react'
import { UserContex } from '../Context/User.jsx';
import { createContext } from "react";
export default function UserContent() {

    const {userData,Loading} = useContext(UserContex);
    
    if(Loading){
        return <h2>...Loading</h2>
    }
  return (
    
   <div>
   <h2>{userData.email}</h2>
   <img src={userData.phone}/>
   </div>
  )
}
