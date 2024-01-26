import React from 'react'
import Input from './../../Pages/Input';
import {useFormik } from 'formik';

export default function Register() {

     const formik = useFormik(
      {
        initialValues:{   // use value for name from inputsRequired
          userName:'',
          email:'',
          password:'',
         
        },
        onSubmit:values=>{
          console.log(values);
        },
        validate:values=>{
          let errors={};
          if(!values.userName){
            errors.userName="user name not Required"
          }
          if(!values.email){
            errors.email="user email not Required"
          }
          if(!values.password){
            errors.password="user password not Required"
          }
          return errors;
        }
      });
      
      

  const inputsRequired =[
    {
      id:'username',
      type:'text',
      name:'userName',
      title:'User Name',
      value:formik.values.userName,  //Means I take the value and store it in formik
    },
    {
      id:'email',
      type:'email',
      name:'email',
      title:'User Email',
      value:formik.values.email,
    },
    {
      id:'password',
      type:'password',
      name:'password',
      title:'User Password',
      value:formik.values.password,
    },
  ];

  const renderinputsRequired = inputsRequired.map( (input,index)=>
      <Input 
      type={input.type} 
      id={input.id} 
      name={input.name} 
      title={input.title} 
      value={input.value} 
      key={index} 
      errors={formik.errors} 
      onChange={formik.handleChange}/>
  )

  return (
    <>
    <div className='container'>
    <h2> Create Account</h2>
    <form onSubmit={formik.handleSubmit}>
      {renderinputsRequired}
      <input type='submit'/>
      </form>
    </div>
    
    </>
  )
}
