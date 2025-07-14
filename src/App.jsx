
import React, { useEffect, useRef } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Component/Contact'
import About from './Component/About'


export default function App() {
  let mycursor=useRef();
  window.addEventListener("mousemove",(e)=>{
    mycursor.current.style.left=e.clientX+"px";
    mycursor.current.style.top=e.clientY+"px";

    // console.log("Hello")
    

  })
  return (
    <>
<div ref={mycursor} className="cursor-animation transition-all duration-[60] rounded-full cursor-none z-50 relative w-[10px] h-[10px] bg-black">
  
  </div>    
      <BrowserRouter>
    <Navbar/>
      <Routes>


        <Route element={<Contact/>} path='/cont'/>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
      </Routes>
      
      
      </BrowserRouter>
    </>
  )
}
