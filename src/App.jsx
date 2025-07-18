
import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Component/Contact'
import About from './Component/About'


const name = "Ravi Prajapati";
export default function App() {

  let mycursor=useRef();
  window.addEventListener("mousemove",(e)=>{
    mycursor.current.style.left=e.clientX+"px";
    mycursor.current.style.top=e.clientY+"px";

    // console.log("Hello")
    

  })
    const [positions, setPositions] = useState(
    Array.from({ length: name.length }, () => ({ x: 0, y: 0 }))
  );

  const mouseRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      setPositions((prev) => {
        const newPositions = [...prev];
        newPositions[0] = {
          x: mouseRef.current.x,
          y: mouseRef.current.y,
        };

        for (let i = 1; i < name.length; i++) {
          const prevPos = newPositions[i - 1];
          const currPos = newPositions[i];
          const dx = prevPos.x - currPos.x;
          const dy = prevPos.y - currPos.y;

          newPositions[i] = {
            x: currPos.x + dx * 0.3,
            y: currPos.y + dy * 0.3,
          };
        }

        return newPositions;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
     <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {positions.map((pos, i) => (
        <span
          key={i}
          className="absolute text-xl font-bold text-black"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
            transition: "transform 0.1s ease",
          }}
        >
          {name[i]}
        </span>
      ))}
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
