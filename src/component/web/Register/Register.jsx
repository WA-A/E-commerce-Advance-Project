import React from 'react'

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

  return (
    <>
    <h2> Create Account</h2>
    </>
  )
}
