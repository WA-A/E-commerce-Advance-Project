import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';

export default function Categories() {
// Every time I loading, I send a request to the package and the speed slows down
// use react-query it to take cash and store the order, and every time you come back you take it from the cash 
// A good alternative to useEffect & useState
 
  const getCategories = async ()=>{
     
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      return data;
    
  }
  const {data,isLoading}=useQuery('web_categories',getCategories); // web_categories is name cash

  if (isLoading){
    return <h2>Loading....</h2>
   }
  

  
  return (
    <>
    <div className='container'>
    <div className='row'>
    {data?.categories.length ? data?.categories.map( (category)=>
      <div className='col-lg-4' key={category._id}>
        <img src={category.image.secure_url}/>
        <h2>{category.name}</h2>
      </div>
    ):'No Category Found'
    }
    </div>
    </div>
    </>
  )
}
