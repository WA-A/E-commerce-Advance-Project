import { useEffect } from "react";
import { createContext, useState } from "react";

 export let  UserContex = createContext ();

 export  function UserContexProvider({children}){

    const [userToken,setUserToken]=useState(null);
    const [userData,setUserData]=useState(null);
     
     const GetUserData = async()=>{
        if(userToken){
            const {data} = await axios.get("https://ecommerce-node4.vercel.app/user/profile",   // After Login must show profile user
            {headers:{Authorization:`Tariq__${token}`}} 
           
            )
            console.log(data);
            setUserData(data.user);
        }
     }

     useEffect( ()=>{
        GetUserData();
     },[userToken])



    return <UserContex.Provider value={{userToken,setUserToken,userData,setUserData}} >
       {children}
    </UserContex.Provider>
 }