"use client"

import React, { useState } from 'react';
import { useEffect } from 'react';


const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async()=>{
    console.log("Login Function Executed.",formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      responseData = await response.json();

      if (responseData.succes) {
        useEffect(() => {
          localStorage.setItem('auth-token', responseData.token);
          window.location.replace('/shop');
          const item = localStorage.getItem('key')
        }, [])
      }
      else{
        alert(responseData.errors)
      }
    } catch (error) {
      console.error("Error in signup function:", error);
    }
  }



  const signup = async () => {
    console.log("Signup Function Executed.", formData);
    let responseData;

    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      responseData = await response.json();

      if (responseData.succes) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/shop');
      }
      else{
        alert(responseData.errors)
      }
    } catch (error) {
      console.error("Error in signup function:", error);
    }
  }


  return (
    <div className='font-sans w-full bg-[#f5f1f2] py-12 md:py-24'>
      <div className='w-[300px] h-[340px] md:w-[500px] md:h-[550px] bg-white m-auto p-5 md:p-10 border-[1px] border-[#020200]'>
        <h1 className='text-xl md:text-4xl'>{state}</h1>
        <div className='flex flex-col gap-3 md:gap-7 mt-3 md:mt-7'>
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' className='h-[20px] md:h-[50px] w-full pl-4 border-[1px] border-[#020200]' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type='email' placeholder='Email Address' className='h-[20px] md:h-[50px] w-full pl-4 border-[1px] border-[#020200]'/>
          <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' className='h-[20px] md:h-[50px] w-full pl-4 border-[1px] border-[#020200]'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}} className='w-full h-[30px] md:h-[60px] bg-[#020200] text-white mt-5 cursor-pointer'>Continue</button>
        {state==="Sign Up"?<p className='mt-5 font-medium text-sm'>Already have an account? <span onClick={()=>{setState("Login")}} className='font-bold underline cursor-pointer'>Login here.</span></p>
        :<p className='mt-5 font-medium text-sm'>Create an account? <span onClick={()=>{setState("Sign Up")}} className='font-bold underline cursor-pointer'>Click here.</span></p>}
        <div className='flex items-center mt-5 gap-4 text-sm'>
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;