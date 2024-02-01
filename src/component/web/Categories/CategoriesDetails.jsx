import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function CategoriesDetails() {
  
    const {categoryId} = useParams;

  const getCategoriesDetails = async ()=>{
     
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoryId}`);
      return data.products;
    
  }
  const {data,isLoading}=useQuery('categories_details',getCategoriesDetails); 

  if (isLoading){
    return <h2>Loading....</h2>
   }
  

  
  return (
    <>
    <div className='products'>
    {data.length?data.map( (product)=>
      <div className='products' key={product._id}>
        <img src={product.image.secure_url}/>
        <h2>{product.name}</h2>
        </div>
        
      
    ):'No Category Found'
    }
    </div>
     
    
    </>
  )
}
