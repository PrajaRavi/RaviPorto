
import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/banda.webp'
import "../App.css"
import{FaLaptopCode,FaCss3,FaJs,FaNodeJs,FaReact, FaHtml5,FaPython, FaAngular, FaDownload} from 'react-icons/fa'
import{BiLogoPlayStore,BiLogoCPlusPlus, BiLogoPython} from 'react-icons/bi'
import{CgWebsite} from 'react-icons/cg'
import {DiMongodb} from "react-icons/di"
import {RiTailwindCssFill} from 'react-icons/ri'
import {IoLogoHtml5} from 'react-icons/io5'
import resume from "../assets/my.pdf"
import Fotter from './Fotter'
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
const name = "Ravi Prajapati";

export default function Home() {
  // let filepath=require("../assets/my.pdf")
  let fileurl="./my.pdf"
  let t1=gsap.timeline();
    // Adding a new functionality
  const words = ["Welcome To My Website", "MERN Devloper","MEAN Devloper","App Devloper","Frontend Devloper","Backend Devloper"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
  useGSAP(()=>{
    gsap.from(".left",{
          // fontSize:"4rem",
                opacity:0,
                  // y:100,
                  x:-150,
                  delay:0.2,
                // scale:0.1,
                // rotate:"180deg",  
                duration:0.4,
                // delay:0.8,
                // color:"red",
           
    })
    gsap.from(".right-img",{
          // fontSize:"4rem",
                opacity:0,
                  // y:100,
                  x:150,
                  delay:0.2,
                // scale:0.1,
                // rotate:"180deg",  
                duration:0.4,
                // delay:0.8,
                // color:"red",
           
    })
    if(window.innerWidth>600){

      t1.to('.skills',
        // {
          {
                // delay:1,
                // repeat:-1,
                y:20,
                opacity:1,
                duration:1,
                // scrollTrigger:"#page2 .box1",
                stagger:1,
                scrollTrigger:{
        trigger:".skills",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:1,

        
                },
                yoyo:true,
                
              }
            )
          }
          else{
            t1.to('.skills',
        // {
          {
                // delay:1,
                // repeat:-1,
                y:20,
                opacity:1,
                duration:1,
                // scrollTrigger:"#page2 .box1",
                stagger:1,
                scrollTrigger:{
        trigger:".skills",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:1,

        
                },
                yoyo:true,
                
              }
            )
          }
        if(window.innerWidth>600){

          t1.to(".skill-heading",{
            y:20,
            opacity:1,
            duration:0.3,
            // scrollTrigger:"#page2 .box1",
            // stagger:1,
                // borderBottomWidth:"300px",
                width:"300px",
                scrollTrigger:{
        trigger:".skill-heading",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 20%",
        scrub:1,
        

                },
                yoyo:true,

              })
            }
            else{
              
          t1.to(".skill-heading",{
            y:20,
            opacity:1,
            duration:0.3,
            // scrollTrigger:"#page2 .box1",
            // stagger:1,
                // borderBottomWidth:"300px",
                width:"300px",
                scrollTrigger:{
        trigger:".skill-heading",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:1,
        

                },
                yoyo:true,

              })
            }
        if(window.innerWidth>600){

          gsap.from(".first-skills",{
            y:-100,
            opacity:0,
            duration:0.7,
            // scrollTrigger:"#page2 .box1",
            stagger:1,
            
            
            // borderBottomWidth:"300px",
            // width:"300px",
            scrollTrigger:{
              trigger:".first-skills",
              scroller:"body",
              // markers:true,
              start:"top 50%",
              end:"top 20%",
              scrub:1,
              
              
            },
            yoyo:true,
            
          })
        }
        // // else{

        //   gsap.from(".first-skills",{
        //     y:-100,
        //     opacity:0,
        //     duration:1,
        //     // scrollTrigger:"#page2 .box1",
        //     stagger:1,
        //     // borderBottomWidth:"300px",
        //     // width:"300px",
        //     scrollTrigger:{
        //       trigger:".first-skills",
        //       scroller:"body",
        //       markers:true,
        //       start:"top 80%",
        //       end:"top 0%",
        //       scrub:1,
              
              
        //     },
        //     yoyo:true,
            
        //   })
        // }
        
    t1.to('.language',
        // {
            {
                // delay:1,
                // repeat:-1,
                y:20,
                opacity:1,
                duration:1,
                // scrollTrigger:"#page2 .box1",
                stagger:1,
                scrollTrigger:{
        trigger:".language",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 55%",
        scrub:1,


                },
                yoyo:true,

            }
        )
        if(window.innerWidth>600){

          t1.to(".cl-heading",{
            y:20,
            opacity:1,
            duration:1,
            // scrollTrigger:"#page2 .box1",
            stagger:1,
            // borderBottomWidth:"300px",
                width:"500px",
                scrollTrigger:{
        trigger:".cl-heading",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:1,
        
        
      },
      yoyo:true,
      
    })
  }
  else{
    
          t1.to(".cl-heading",{
            y:20,
            opacity:1,
            duration:1,
            // scrollTrigger:"#page2 .box1",
            stagger:1,
            // borderBottomWidth:"300px",
                width:"350px",
                scrollTrigger:{
        trigger:".cl-heading",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 60%",
        scrub:1,
        
        
      },
      yoyo:true,
      
    })
  }
        if(window.innerWidth>600){

          t1.from(".cl-element",{
            y:-100,
            opacity:0,
            duration:4,
            delay:0.5,
            // scrollTrigger:"#page2 .box1",
            stagger:1,
            // borderBottomWidth:"300px",
            // width:"300px",
            scrollTrigger:{
              trigger:".cl-element",
              scroller:"body",
              // markers:true,
              start:"top 80%",
              end:"top 60%",
              scrub:1,
              
              
            },
            yoyo:true,
            
          })
        }
        else{
          t1.from(".cl-element",{
            y:-100,
            opacity:0,
            duration:0.8,
            delay:0.5,
            
            // scrollTrigger:"#page2 .box1",
            stagger:1,
            // borderBottomWidth:"300px",
            // width:"300px",
            scrollTrigger:{
              trigger:".cl-element",
              scroller:"body",
              // markers:true,
              start:"top 70%",
              end:"top 20%",
              scrub:1,
              
              
            },
            yoyo:true,
            
          })
        }
        
        
    })


    
      let mycursor=useRef();
      let home_Container=useRef();
      // document.getElementsByClassName("home-container").addEventListener("mousemove",(e)=>{
      //   mycursor.current.style.left=e.clientX+"px";
      //   mycursor.current.style.top=e.clientY+"px";
    
      //   // console.log("Hello")
        
    
      // })
function HandleMouse(e){
  mycursor.current.style.left=e.clientX+"px";
        mycursor.current.style.top=e.clientY+"px";
    
}
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
    

    useEffect(() => {
      const currentWord = words[currentWordIndex];
      const typingSpeed = isDeleting ? 100 : 150;
  
      const handleTyping = () => {
        setCurrentText(prev =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
  
        if (!isDeleting && currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      };
  
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex]);
  
  return (
    <>
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

    <div className='big-container relative top-[50px]'>
      <div ref={home_Container} onMouseMove={(e)=>{HandleMouse(e)}} className="home-container flex-wrap flex items-center px-10    lg:justify-between justify-center  w-[90%] lg:w-[88%]  min-h-[90vh] my-3">
<div className="left flex    flex-col font-bold md:gap-5 gap-2">
<span className='text-3xl '>Hello, I am,</span>
<span className='md:text-5xl text-3xl myname'>Ravi Prajapati,</span>
{/* <span className='md:text-4xl text-3xl'>Full Stack Web Devloper</span> */}
   <div style={window.innerWidth>600?{ fontSize: '2rem',}:{ fontSize: '1.3rem',}} className='myname'>
       {currentText}
    <span className="cursor">|</span>
     </div>
<span className='md:text-3xl text-xl'>[Bringing your ideas to real word through my skills]</span>
<a href={resume} className='border-2 download gap-3 hover:border-white rounded-[23px] hover:text-white  font-bold border-black px-5 py-2 w-[200px] flex items-center justify-center'  download={"RaviResume"}>Resume<FaDownload/></a>
{/* <a href={resume} download={"RaviResume"}>download</a> */}
</div>

<div className="right-img rounded-[94px] w-[300px] md:w-[400px]  ">
  <img  className=' w-[100%] h-[100%] md:rounded-[94px] rounded-[33px] ' src={logo} alt="" />
  
</div>
      
      </div>
      <div className="container1 w-[88%] ">

      
<div className="skills w-[100%] flex flex-wrap opacity-0 flex-col items-center  px-2 justify-center">
  <h1 className='font-bold text-3xl text-center border-b-3 pb-2   skill-heading'>My Skills</h1>
  <div className="dabba flex flex-wrap gap-10   items-center justify-between my-10">
    <div className="first-skills group cursor-pointer transition-all duration-300 mx-auto  w-[30%] min-w-[300px]  flex items-center justify-center  shadow px-3 py-2 rounded-2xl flex-col gap-5">
      <h1 className='font-bold text-2xl h-[40px]  transition-all duration-150 group-hover:underline group-hover:scale-[1.2]   '>Website Devlopment</h1>
      <FaLaptopCode className='font-bold text-5xl group-hover:scale-[1.2] transition-all duration-200  w-[100%]'/>

      <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laboriosam harum aliquid, a aspernatur eius eum et dignissimos totam mollitia laudantium quis? Perferendis obcaecati quos suscipit explicabo vel reiciendis architecto quo labore maxime delectus?</p>
    </div>
    <div className="first-skills group cursor-pointer transition-all duration-300 mx-auto  w-[30%] min-w-[300px]  flex items-center justify-center  shadow px-3 py-2 rounded-2xl flex-col gap-5">
      <h1 className='font-bold text-2xl h-[40px]  transition-all duration-150 group-hover:underline group-hover:scale-[1.2] '>App Devlopment</h1>
      <BiLogoPlayStore className='font-bold text-5xl group-hover:scale-[1.2] transition-all duration-200  w-[100%]'/>

      <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laboriosam harum aliquid, a aspernatur eius eum et dignissimos totam mollitia laudantium quis? Perferendis obcaecati quos suscipit explicabo vel reiciendis architecto quo labore maxime delectus?</p>
    </div>
    <div className="first-skills group cursor-pointer transition-all duration-300 mx-auto  w-[30%] min-w-[300px]  flex items-center justify-center  shadow px-3 py-2 rounded-2xl flex-col gap-5">
      <h1 className='font-bold text-2xl h-[40px]  transition-all duration-150 group-hover:underline group-hover:scale-[1.2] '>UI/UX Designer</h1>
      <CgWebsite className='font-bold text-5xl group-hover:scale-[1.2] transition-all duration-200  w-[100%]'/>

      <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laboriosam harum aliquid, a aspernatur eius eum et dignissimos totam mollitia laudantium quis? Perferendis obcaecati quos suscipit explicabo vel reiciendis architecto quo labore maxime delectus?</p>
    </div>
    
  </div>
</div>
<div className="language w-[100%]  mb-[100px]  flex flex-col opacity-0 cl pb-4 items-center justify-center gap-[10px]">
  <h1 className='font-bold md:text-4xl text-2xl py-2 text-center   border-b-3  my-10 cl-heading'>Computer languages</h1>
  <div className="programm my-[20px] flex flex-wrap items-center gap-[40px] justify-center font-bold text-8xl mb-[20px]">


<button id='html' title='Html' className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 html'>< FaHtml5 target='Html'/></button>  
<button title='Css' className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 css'><FaCss3 target='Css' /></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 tcss' title='Tailwind css'><RiTailwindCssFill target='Tailwind Css'/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 js' title='Javascript'><FaJs/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 react' title='React js'><FaReact/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 node' title='Node js'><FaNodeJs/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 mongo' title='MongoDB'><DiMongodb/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 python' title='Python'><FaPython/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 cpp' title='C Plus plus'><BiLogoCPlusPlus/></button>  
<button className='relative after:bg-black after:transition-all after:duration-300 after:rounded-md after:absolute after:w-[100%] after:h-[100%] after:content-center after:opacity-0 hover:after:cursor-pointer cl-element  after:top-[40%] hover:after:top-[0%] hover:after:opacity-[1] after:left-0 angular' title='Angular'><FaAngular /></button>  

  </div>

</div>
</div>
    </div>
    <Fotter position={'relative'} bottom={'0'}/>
    </>

  )
}
