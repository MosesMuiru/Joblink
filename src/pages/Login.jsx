import React from 'react'
import Sidepage from '../componets/Sidepage'

function Login() {

  const getWidth = ()=>{
    console.log(window.screen.width)
    if(window.screen.width < 500) return(
    
      
      <div className="hidden w-full h-[100vh]">

      <Sidepage/>
    </div>
    );
    else if (window.screen.width>500) return(
      <div className=" w-full h-[100vh]">

      <Sidepage/>
    </div>
    )
    
  }

  const styling ={
    inputStyle:"border-b border-gray-400 text-black outline-none bg-inherit w-[200px] text-[1.2rem] pb-2"
  }
  return (
    <div className=''>
      <div className=' flex flex-col justify-center w-full h-[100vh]  items-center md:flex-row md:gap-[10rem] '>

    {getWidth()}
    

        <div className="w-full h-full"   >
            <form action="" className='flex flex-col  p-[4rem]  h-full sm:justify-center '>
              <div className=''>

              <h2 className='pt-7 sm:pb-8 sm:text-[1.8rem] text-[4rem] capitalize '>Create an Account</h2>
              <p className='pt-5 sm:pb-3 text-2xl'>Lets get started with your 30day free trial</p>
              </div>

              <div className='flex flex-col gap-7 mt-[2rem]'>


              <input type="text" placeholder='Username' className={styling.inputStyle} />
              <input type="email" placeholder='Email' className={styling.inputStyle}/>
              <input type="password" placeholder='Password' className={styling.inputStyle}/>
              <input type="submit" value="Create Account" className='p- bold bg-nicegreen text-nicewhite  w-[200px] mt-7 h-[40px] font-bold text-[1.3rem] rounded-md duration-300 hover:bg-nicergreen'/>
              </div>

              <p className=' line p-4 mt-3 pl-[100px]  text-[1.1rem]'>OR</p>

              <a href="#" className='mt-9 pt-2 pb-2 p-4 border border-gray-400 w-[200px] h-[3rem] text-center duration-300 ease-linear  capitalize rounded-sm  text-[1.2rem]  hover:bg-nicegreen hover:text-nicewhite' >Sign up with google.</a>

            </form>
        </div>

      </div>
    </div>
  )
}

export default Login