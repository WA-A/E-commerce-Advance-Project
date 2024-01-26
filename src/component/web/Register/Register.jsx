import React from 'react'
import Input from './../../Pages/Input';

export default function Register() {

  const inputsRequired =[
    {
      id:'username',
      type:'text',
      name:'userName',
      title:'User Name'
    },
    {
      id:'email',
      type:'email',
      name:'email',
      title:'User Email'
    },
    {
      id:'password',
      type:'password',
      name:'password',
      title:'User Password'
    },
  ];

  const renderinputsRequired = inputsRequired.map( (input,index)=>
      <Input type={input.type} id={input.id} name={input.name} title={input.title} key={index}/>
  )

  return (
    <>
    <div className='container'>
    <h2> Create Account</h2>
    <form >{renderinputsRequired}</form>
    </div>
    
    </>
  )
}
