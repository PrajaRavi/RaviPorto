
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

  
  
  
  return (
    <>
     <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      
    </div>
  
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
    </>
  )
}
