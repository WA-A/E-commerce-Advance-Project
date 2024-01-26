import React from 'react'

export default function Input({type='text',id,name,title,value,onChange}) {
  return (
    <>
    <div className='input-group mb-3'>
        <label htmlFor={id}>{title}</label>
        <input type={type} name={name} className='form-control' value={value} id={id} onChange={onChange}/>
    </div>
    </>
  )
}
