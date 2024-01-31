import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Categories() {

  const [categories,setCategories] = useState ([]);
  const [isLoading,SetisLoading] = useState(true);
 
  const getCategories = async ()=>{
    try{ //  use try it because there is no guarantee that the link will always work
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
      setCategories(data.categories);
    }
    catch(error){
console.log(error);
    }
    finally{  // It will access it if there is data or there is an error, meaning it will access it in all cases
      SetisLoading(false); // When the data comes in or there is an error, change the Loadin to false
    }
  }

  useEffect ( ()=>{
    getCategories();
  },[]);

  if (isLoading){
   return <h2>Loading....</h2>
  }
  return (
    <>
    <div className='container'>
    <div className='row'>
    {categories.length?categories.map( (category)=>
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
