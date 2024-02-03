import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Guard({childern}) {    
    if(localStorage.getItem("UserToken")== null){     // It is Guard understandable that if the user has set an end point and is not login , he should be transferred to the login page
        return <Navigate to='/login'/>
    }
  return childern
}
