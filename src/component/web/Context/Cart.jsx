import axios from "axios";
import { createContext, useState } from "react";

export const CartContext = createContext(null);



export function CartContextProvider({children}){   // children will Component use it
    const [count,setCount] = useState([]);
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
        setCount(++count.data);
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

    const RemoveItemCartContext = async () =>{
        try{
            const token = localStorage.getItem("userToken");
            const {data} = await axios.GetCartContext(`${import.meta.env.VITE_API_URL}/cart/removeItem`,{productId}
            ,
            {headers:{Authorization:`Tariq__${token}`}}
            )
            return data;
        }
                
            
        
        catch(error){
            return console(error);
            
        }
    }

    const incraseQuantity= async (ProudctId)=>{
        try{
            const token = localStorage.geItem("userToken");
            const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/cart/incraseQuantity`, {ProudctId}
        ,{
            headers:{Authorization:`Tariq__${token}`}
            })
            setQuantity(++quantity);
            return data;
        }
        catch(error){
            console.log(error);
        }
    }
    
    const decraseQuantity= async (ProudctId)=>{
      try{
          const token = localStorage.geItem("userToken");
          const {data}=await axios.patch(`${import.meta.env.VITE_API_URL}/cart/decraseQuantity`, {ProudctId}
      ,{
          headers:{Authorization:`Tariq__${token}`}
          })
          setQuantity(--quantity);
          return data;
      }
      catch(error){
          console.log(error);
      }
    }

    //const [CountCart,setCountCart] = useState(0);

    return <CartContext.Provider value={{AddtoCartContext,GetCartContext,RemoveItemCartContext,count,setCount,decraseQuantity,incraseQuantity}} >
        {children}
    </CartContext.Provider>;
}