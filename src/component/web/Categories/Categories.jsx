import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link} from 'react-router-dom'

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
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     
    
    {data?.categories.length ? data?.categories.map( (category)=>
      <SwiperSlide key={category._id}>
        <Link to={`/products/categories/${category._id}`}>
        <img src={category.image.secure_url}/>
        <h2>{category.name}</h2>
        </Link>
        
      </SwiperSlide> 
        
      
    ):'No Category Found'
    }
     </Swiper>
    </div>
    </>
  )
}
