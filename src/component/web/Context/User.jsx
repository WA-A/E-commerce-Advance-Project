import { createContext, useState } from "react";

 export let  UserContex = createContext ();

 export  function UserContexProvider({children}){

    const [userToken,setUserToken]=useState(null);

    return <UserContex.Provider value={{userToken,setUserToken}} >
       {children}
    </UserContex.Provider>
 }