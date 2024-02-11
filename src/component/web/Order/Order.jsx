import React from 'react'
import { OrderContext } from '../Context/Order';

export default function ()
{

  const {getOrderContext,addtoOrderContext} = useContext(OrderContext);

  const GetOrder = async ()=>{
    const res = await getOrderContext();
    return res;
  }

  const CreateOrder = async ()=>{
    const res = await CreateOrderContext();
    return res;
  }

  const {data,isLoading}=useQuery('order',GetOrder); 

  if (isLoading){
    return <h2>Loading....</h2>
   } 
  return (
    <>
   <div className='container'>
   {data.couponName.map( (coupon)=>
   <p>{coupon.couponName}</p>
   )
   }
     <h2>{data.address}</h2>
     <p>{data.phone}</p>
    
    <button onClick={()=>CreateOrder(data._id)}> Create Order</button>
    
    </div>
   </>
   
  )
}
