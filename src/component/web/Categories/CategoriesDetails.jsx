import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function CategoriesDetails() {
  
    const {categoriesId} = useParams;

  const getCategoriesDetails = async ()=>{
     
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${categoriesId}`);
      return data.products;
    
  }
  const {data,isLoading}=useQuery('categories_details',getCategoriesDetails); // web_categories is name cash

  if (isLoading){
    return <h2>Loading....</h2>
   }
  

  
  return (
    <>
    <div className='products'>
    {data.length?data.map( (products)=>
      <div className='products' key={products._id}>
        <img src={products.image.secure_url}/>
        <h2>{products.name}</h2>
        </div>
        
      
    ):'No Category Found'
    }
    </div>
     
    
    </>
  )
}
