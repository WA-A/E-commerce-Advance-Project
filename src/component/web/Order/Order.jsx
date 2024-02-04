import React from 'react'

export default function ()
{
  return (
    <>
   <div className='container'>
   {data.couponName.map( (coupon)=>
   <p>{coupon.couponName}</p>
   )
   }
     <h2>{data.address}</h2>
     <p>{data.phone}</p>
    
    <button onClick={()=>AddtoOrder(data._id)}> Create Order</button>
    
    </div>
   </>
   
  )
}
