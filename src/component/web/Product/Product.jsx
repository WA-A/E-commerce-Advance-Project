import React from 'react'

export default function Product() {
    const {productId} = useParams;

    const getProduct = async ()=>{
       
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`);
        return data.product;
      
    }
    const {data,isLoading}=useQuery('product_details',getProduct); 
  
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
    
    
    
    </div>
   </>
  )
}
