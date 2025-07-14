
import React from 'react'
import logo from '../assets/banda.png'
import "../App.css"
import{FaLaptopCode,FaCss3,FaJs,FaNodeJs,FaReact, FaHtml5,FaPython, FaAngular, FaLock} from 'react-icons/fa'
import{BiLogoPlayStore,BiLogoCPlusPlus, BiLogoPython} from 'react-icons/bi'
import{CgWebsite} from 'react-icons/cg'
import {DiMongodb} from "react-icons/di"
import {RiTailwindCssFill} from 'react-icons/ri'
import {IoLogoHtml5} from 'react-icons/io5'
import Fotter from './Fotter'
export default function Home() {
  // let filepath=require("../assets/my.pdf")
  return (
    <>
    <div className='big-container relative top-[50px]'>
      <div className="home-container flex-wrap flex items-center px-10  border-2  lg:justify-between justify-center  w-[90%] lg:w-[88%]  min-h-[90vh] my-3">
<div className="left flex    flex-col font-bold md:gap-5 gap-2">
<span className='text-3xl '>Hello, I am,</span>
<span className='md:text-5xl text-3xl myname'>Ravi Prajapati,</span>
<span className='md:text-4xl text-3xl'>Full Stack Web Devloper</span>
<span className='md:text-3xl text-xl'>[Bringing your ideas to real word through my skills]</span>
<a href="./src/assets/my.pdf" className='border-2 gap-3 rounded-[23px] font-bold border-black px-5 py-2 w-[200px] flex items-center justify-center'  download={"my.pdf"}>Resume<FaLock /></a>
</div>

<div className="right rounded-[94px] w-[300px] md:w-[400px]  ">
  <img  className=' w-[100%] h-[100%] rounded-[94px]' src={logo} alt="" />
  
</div>
      
      </div>
      <div className="container1 w-[88%]">

      
<div className="skills w-[100%] flex flex-wrap flex-col items-center justify-center border">
  <h1 className='font-bold text-3xl text-center'>My Skills</h1>
  <div className="dabba flex flex-wrap gap-10   items-center justify-between my-10">
    <div className="first mx-auto  w-[30%] min-w-[300px]  flex items-center justify-center shadow px-3 py-2 rounded-2xl flex-col gap-5">
      <h1 className='font-bold text-2xl '>Website Devlopment</h1>
      <FaLaptopCode className='font-bold text-5xl  w-[100%]'/>
      <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laboriosam harum aliquid, a aspernatur eius eum et dignissimos totam mollitia laudantium quis? Perferendis obcaecati quos suscipit explicabo vel reiciendis architecto quo labore maxime delectus?</p>
    </div>
    <div className="first w-[30%] mx-auto min-w-[300px] flex items-center justify-center shadow rounded-2xl py-2 px-2 flex-col gap-5">
      <h1 className='font-bold text-2xl'>App Devlopment</h1>
      <BiLogoPlayStore className='font-bold text-5xl  w-[100%]'/>

      <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laboriosam harum aliquid, a aspernatur eius eum et dignissimos totam mollitia laudantium quis? Perferendis obcaecati quos suscipit explicabo vel reiciendis architecto quo labore maxime delectus?</p>
    </div>
    <div className="first w-[30%] mx-auto min-w-[300px] flex items-center justify-center flex-col rounded-2xl py-2 px-2 shadow gap-5">
      <h1 className='font-bold text-2xl'>UI/UX Designer</h1>
      <CgWebsite className='font-bold text-5xl  w-[100%]'/>

      <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laboriosam harum aliquid, a aspernatur eius eum et dignissimos totam mollitia laudantium quis? Perferendis obcaecati quos suscipit explicabo vel reiciendis architecto quo labore maxime delectus?</p>
    </div>
    
  </div>
</div>
<div className="language w-[100%]  my-[20px] flex flex-col items-center justify-center gap-[10px]">
  <h1 className='font-bold md:text-4xl text-2xl'>Progamming languages</h1>
  <div className="programm my-[20px] flex flex-wrap items-center gap-[40px] justify-center font-bold text-8xl">


<button id='html' title='Html' className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 html'>< FaHtml5 target='Html'/></button>  
<button title='Css' className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 css'><FaCss3 target='Css' /></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 tcss' title='Tailwind css'><RiTailwindCssFill target='Tailwind Css'/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 js' title='Javascript'><FaJs/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 react' title='React js'><FaReact/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 node' title='Node js'><FaNodeJs/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 mongo' title='MongoDB'><DiMongodb/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 python' title='Python'><FaPython/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 cpp' title='C Plus plus'><BiLogoCPlusPlus/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 angular' title='Angular'><FaAngular /></button>  

  </div>

</div>
</div>
    </div>
    <Fotter position={'relative'} bottom={'0'}/>
    </>

  )
}
