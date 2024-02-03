import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({children}){   // children will Component use it

    const AddtoCartContext = async (productId) =>{
        try{
            const token = localStorage.getItem("userToken");
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
            {productId},
            {headers:{Authorization:`Tariq__${token}`}}
            )
            if(Message=='success'){
                toast.success('account created succesfully , please verify your email to login',{
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
            });
        }
                return data;
            
        }
        catch(error){
            return console(error);
        }
    }

    const GetCartContext = async () =>{
        try{
            const token = localStorage.getItem("userToken");
            const {data} = await axios.GetCartContext(`${import.meta.env.VITE_API_URL}/cart`,
            
            {headers:{Authorization:`Tariq__${token}`}}
            )
            return data;
        }
                
            
        
        catch(error){
            return console(error);
        }
    }

    return <CartContext.Provider value={{AddtoCartContext,GetCartContext}} >
        {children}
    </CartContext.Provider>;
}