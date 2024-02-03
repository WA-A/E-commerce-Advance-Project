import React, { useContext } from 'react'
import { CartContext } from '../Context/Cart.jsx';

export default function Product() {
    const {productId} = useParams;
    const {AddtoCartContext}=useContext(CartContext);

    const getProduct = async ()=>{
       
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
        return data.product;
      
    }


    const {data,isLoading}=useQuery('product_details',getProduct); 

    const AddtoCart = async (productId)=>{
      const res = await AddtoCartContext(productId);
      console.log(productId);
    }
  
    if (isLoading){
      return <h2>Loading....</h2>
     }
  return (
   <>
   <div className='container'>
   {data.subImages.map( (img)=>
   <img src='(img.secure_url'/>
   )
   }
     <h2>{data.name}</h2>
     <p>{data.price}</p>
    
    <button onClick={()=>AddtoCart(data._id)}>Add To Cart</button>
    
    </div>
   </>
  )
}
