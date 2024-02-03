import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({children}){   // children will Component use it

    let [count,setCount] = useState(0);
    let [name,setName] = useState("Wasan");

    return <CartContext.Provider value={{count,name}}>
        {children}
    </CartContext.Provider>;
}