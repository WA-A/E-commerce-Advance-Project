import { createContext, useState } from "react";
import React from 'react';
import axios from "axios";

export const OrderContext=createContext(null);

export function OrderContextProvider({children}){

    let [CountOrder,setCountOrder] = useState(0);

    const CreateOrderContext = async (ProudctId)=>{
    try{
        const token = localStorage.getItem("userToken");
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`, 
        {headers:{Authorization:`Tarig__${token}`}});
        return data;

    }
    catch(error){
        console.log(error);
    }
 }

 const getOrderContext = async (ProudctId)=>{
    try{
        const token = localStorage.getItem("userToken");
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`, 
        {headers:{Authorization:`Tarig__${token}`}});
        setCountOrder(data.CountOrder);
        return data;

    }
    catch(error){
        console.log(error);
    }
 }

 return <OrderContext.Provider value={{CreateOrderContext,getOrderContext}}>
    {children}
 </OrderContext.Provider>
}