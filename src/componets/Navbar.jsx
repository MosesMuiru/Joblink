// this should contail all the links to the navbar
import { Link } from 'react-router-dom'

// import React from 'react'
// import AboutUs from '../pages/AboutUs'
// import Freelance from '../pages/Freelance'
// import HiringManagers from '../pages/HiringManagers'
// import Login from '../pages/Login'
// import Signin from '../pages/Signin'

function Navbar() {

  const linkStyling = {
    styling:" h-[25px] hover:border-b  linear duration-500 hover:border-nicegreen"
  }

  
  
  return (

    <div className='flex justify-between mr-[100px] mt-[30px] ml-[70px]  bg-transparent'>
      <div className='flex flex-row justify-between gap-[100px] align-center text-[16px] bg-blue-300 '>

        <h2 className='capitalize' >logo</h2>


        <div className='flex justify-between gap-[26px] bg-yellow-200'>

        <Link to="/freelance " className={linkStyling.styling}>Freelance</Link>

        <Link to="hiringmanagers">Hiring Managers</Link>
        <Link to="aboutus">About us</Link>
        </div>
      </div>


{/* containing the links */}
      <div className=' flex justify-between align-center  w-[200px] bg-cyan-600 text-[16px] bg-red-300'>

        <Link to="/login" className='border rounded-[20px]  border-nicegreen px-[20px]  pt-3 text-white font-semibold text-nicewhite'>Login</Link>
        <Link to="signin" className='text-nicewhite font-semibold capitalize bg-nicegreen rounded-[20px] font-red-300 items-center p-4 pt-3 px-[30px] duration-300 hover:bg-nicergreen'>Sign up</Link>
      
        
        
      </div>
       
        

    </div>
  )
}

export default Navbar