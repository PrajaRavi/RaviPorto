
import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Component/Contact'
import About from './Component/About'
import Lenis from "@studio-freight/lenis"


export default function App() {
// lenis
 const lenis = useRef(null);
 useEffect(() => {
    // Initialize Lenis
    lenis.current = new Lenis({
      duration: 0.7, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  
  // 3D mousemoving
    const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const rotateX = -(clientY - centerY) / 25;
    const rotateY = (clientX - centerX) / 25;

    textRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    textRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

useEffect(()=>{
// console.log(navigator.userAgent)
},[])
  
  return (
    <>
    
{/* <div ref={mycursor} className="cursor-animation transition-all duration-[60] rounded-full cursor-none z-50 relative w-[10px] h-[10px] bg-black">
  
  </div>     */}
      <BrowserRouter>
    <Navbar/>
      <Routes>


        <Route element={<Contact/>} path='/cont'/>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
      </Routes>
      
      
      </BrowserRouter>
      {/* {navigator.userAgent.includes("Windows")?

        <div className="relative flex items-center justify-center top-0 w-[100%] h-[100vh] z-50 border-2 border-red-400" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <h1 ref={textRef} className="name-3d text-8xl">Ravi Prajapati</h1>
    </div>:null
      } */}
    </>
  )
}
