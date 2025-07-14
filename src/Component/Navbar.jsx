import React, { useRef, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  let first=useRef()
  let second=useRef()
  let third=useRef();
  let menu=useRef();
  let [select,setselect]=useState("Home")
  function HandleClick(){
    
if(second.current.style.opacity==1){

        
        
        first.current.style.transform=` rotate(30deg)`;
        third.current.style.transform=` rotate(-35deg)`;
        menu.current.className="menubar w-[80%] h-[70vh] right-[0%] absolute transition-all duration-300 top-[60px] bg-white border-black border-2 px-5 py-5 rounded-2xl"
        second.current.style.opacity=0;
        // count=1;
      }
      else{
        first.current.style.transform=` rotate(0deg)`;
        third.current.style.transform=` rotate(-0deg)`;
        menu.current.className="menubar w-[80%] h-[70vh] right-[-100%] absolute transition-all duration-300 top-[60px] bg-white border-black border-2 px-5 py-5 rounded-2xl"
        
        second.current.style.opacity=1;
        // count=0;
      }
  }
  return (
    <>
    <div className="big-container fixed top-0 z-50 w-[100%] bg-white flex items-center justify-center flex-col gap-4">

    <div className="container  w-[94%] flex items-center justify-between py-2">
      
    <div className="left flex items-center justify-center flex-col">
    <span  className='font-bold text-3xl myname'>RaviPraj</span>
    <span className='text-xs web'>WebDevloper</span>
    </div>
    <div className="right1 md:hidden">
      <div class="container" onClick={HandleClick}>
    <div class="first" ref={first}></div>
    <div class="second" ref={second}></div>
    <div class="third" ref={third}></div>
  </div>
    </div>
    <div className="right hidden md:block">
<ul className='flex cursor-pointer items-center justify-center gap-5 font-bold'>
  
  <li><Link to={'/'} className={select=="Home"?`border-2 px-2 rounded-[5px]`:`border-2 border-transparent px-2 rounded-[5px]`}  onClick={()=>{setselect("Home")}}>Home</Link></li>
  <li><Link to={'/cont'} className={select=="Contact"?`border-2 px-2 rounded-[5px]`:`border-2 border-transparent px-2 rounded-[5px]`}  onClick={()=>{setselect("Contact")}}>Contact</Link></li>
<li><Link to={'/About'} className={select=="AboutUs"?`border-2 px-2 rounded-[5px]`:`border-2 border-transparent px-2 rounded-[5px]`}  onClick={()=>{setselect("AboutUs")}}>AboutUs</Link></li>

</ul>
    </div>
    <div ref={menu} className="menubar w-[80%] h-[70vh] right-[-100%] absolute transition-all duration-300 top-[60px] bg-white border-black border-2 px-5 py-5 rounded-2xl">
     <ul className='flex flex-col cursor-pointer items-center justify-center gap-5 font-bold'>
  
  <li className={select=="Home"?`border-2 px-2 rounded-[5px]`:`border-2 border-transparent px-2 rounded-[5px]`} onClick={()=>{
    first.current.style.transform=` rotate(0deg)`;
        third.current.style.transform=` rotate(-0deg)`;
        setselect("Home")
        menu.current.className="menubar w-[80%] h-[70vh] right-[-100%] absolute transition-all duration-300 top-[60px] bg-white border-black border-2 px-5 py-5 rounded-2xl"
        
        second.current.style.opacity=1;
            
  }}><Link to={'/'}>Home</Link></li>
  <li className={select=="Contact"?`border-2 px-2 rounded-[5px]`:`border-2 border-transparent px-2 rounded-[5px]`} onClick={()=>{
    first.current.style.transform=` rotate(0deg)`;
        third.current.style.transform=` rotate(-0deg)`;
        menu.current.className="menubar w-[80%] h-[70vh] right-[-100%] absolute transition-all duration-300 top-[60px] bg-white border-black border-2 px-5 py-5 rounded-2xl"
        setselect("Contact")
        second.current.style.opacity=1;
            
  }}><Link to={'/cont'}>Contact</Link></li>
<li className={select=="AboutUs"?`border-2 px-2 rounded-[5px]`:`border-2 border-transparent px-2 rounded-[5px]`} onClick={()=>{
first.current.style.transform=` rotate(0deg)`;
        third.current.style.transform=` rotate(-0deg)`;
        menu.current.className="menubar w-[80%] h-[70vh] right-[-100%] absolute transition-all duration-300 top-[60px] bg-white border-black border-2 px-5 py-5 rounded-2xl"
        setselect("AboutUs")
        second.current.style.opacity=1;
                
}}><Link to={'/About'}>AboutUs</Link></li>

</ul> 
    </div>
    </div>
      
    {/* <hr className='w-[90%]'/> */}
    </div>
    </>
  )
}
