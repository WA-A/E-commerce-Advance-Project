import React from 'react'
import Input from './../../Pages/Input';
import {useFormik } from 'formik';
import {LoginSchema} from '../Validate/Validate.js'
import axios from 'axios';
import {toast} from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
    const Navigate = useNavigate(); 
     const formik = useFormik(
      {
        initialValues:{   // use value for name from inputsRequired
          email:'',
          password:'',
         
        },
        onSubmit:values=>{
          console.log(values);
        },
        validate:values=>{   // this check input is writeen or not just
          let errors={};
          if(!values.email){
            errors.email="user email not Required"
          }
          if(!values.password){
            errors.password="user password not Required"
          }
          return errors;
        },
        Validate:LoginSchema,
        

      });
      
      
      const onSubmit = async users=>{
        const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`,users);
        console.log(data);

        // The backend response contains a token that contains all the user information, and I control what information is sent to me
        // use jwt , put token in endecode ,the decode convert to information 
       
        if(data.message="success"){  // if no userToken means user not login
        localStorage.setItem("userToken",data.token); // save token in userToken
          formik.resetForm();
          toast.success('account created succesfully , please verify your email to login',{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        Navigate('/home'); // user go home page
       }
        
      }
      

  const inputsRequired =[   // Dynamic 
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
      onChange={formik.handleChange}    
      onBlur={formik.handleBlur}
      touched={formik.touched}
      
      />
  )

  return (
    <>
    <div className='container'>
    <h2> Login Page </h2>
    <form onSubmit={formik.handleSubmit} >
      {renderinputsRequired}

      <button type='submit' disabled={!formik.isValid}> Login </button>   {/* Inside formik there is isvalid , When input is error disabled button*/}
      </form>
    </div>
    
    </>
  )
  }
