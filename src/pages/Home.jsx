import React from "react";
// this is the landing page
import { Link } from "react-router-dom";
import Navbar from "../componets/Navbar";

function Home() {
  return (
    <div className="relative w-full h-full">
      {/* this is the landing page */}
      <div className="absolute  w-full ">

    <Navbar/>
      </div>
      {/* what you will see */}
      <div className="flex flex-row  items-center pl-[70px] w-full">
        <div className="info w-full">
          <h3 className="text-[1.5rem] pb-[2rem]">Hiring made Easy</h3>
          <h1 className="text-[4rem] capitalize  ">Easy, simple, Recruitment Process</h1>
          <p className="text-[16px] pt-[2rem] text-fontcolor">The clowns had taken over, And yes, They were literally clowns</p>

          {/* the input */}

          <div className="flex flex-row justify-start items-center mt-[4rem] h-[40px] w-[300px] relative  border border-nicegreen rounded-[50px]">
            <input type="text" placeholder="email@gmail.com" className="border-none outline-none border-nicegreen rounded-[40px] p-4 text-[1.2rem] h-full  text-nicegreen"/>

            <Link className=" bg-nicergreen text-nicewhite font-bold rounded-[40px]  p-3 h-full px-[3rem]  align-center text-xl  absolute right-0 duration-300  hover:bg-nicegreen">Get Started</Link>
            
          </div>
        </div>
        <div className="pic w-full h-[100vh] ">

        </div>
      </div>
   
    </div>
  )
}

export default Home