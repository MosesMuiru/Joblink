import React from 'react'
import { Link } from 'react-router-dom'
import SigninSidePage from '../componets/SigninSidePage'

function Signin() {

  return (
    <div className='flex gap-[127px]  h-full'>
      <div className=' h-[100vh]'>
      <SigninSidePage/>
      </div>

      <div className='flex flex-col shadow-sm items-start justify-center w-full'> 
        {/* this is the login page */}

        
        <form action="" className='flex flex-col w-[50vh] '>
        <h2 className='text-[40px] '>Login</h2>
        <p className='text-[16px] mb-[30px]'>Welcome back! Please enter your details</p>

        <input type="email" placeholder='Email' className='mb-[15px] text-[15px] shadow-lg' />
        <input type="password" placeholder='Password' className='mb-[15px] text-[15px] text-dark shadow-lg' />

<div className='flex justify-between items-center mt-8'>

  <div >

<input type="checkbox" id="myCheckbox" name="myCheckbox" value="isChecked"/>
<label for="myCheckbox" className='text-[15px] ml-3'>Check this box:</label>

  </div>
  <a href="" className='underline text-[13px]'>Forgot password</a>
</div>
        

    

        <input type="submit" value="Log in" className='bg-nicergreen h-[40px] mt-[2rem] text-[20px] text-nicewhite'/>
        <Link to="/login" className='mt-9 pt-3 pb-2 p-4 border border-gray-400  h-[4rem] text-center duration-300 ease-linear  capitalize rounded-sm  text-[1.2rem]  hover:bg-nicegreen hover:text-nicewhite' >Register</Link>
        </form>
    
        <p className=' line p-4 mt-3 pl-[100px]  text-[1.1rem]'>OR</p>

        <a href="#" className='mt-9 pt-2 pb-2 p-4 border border-gray-400 w-[200px] h-[3rem] text-center duration-300 ease-linear  capitalize rounded-sm  text-[1.2rem]  hover:bg-nicegreen hover:text-nicewhite' >Log In with google.</a>
        </div>

      </div>
    
  )
}

export default Signin