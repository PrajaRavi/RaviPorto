import React from 'react'
import logo from '../assets/banda.webp'
import Fotter from './Fotter'
export default function About() {
  return (
    <>
    <div className="big-container">

    
    <div className='w-[90%] flex    flex-wrap relative  flex-row px-[40px] lg:gap-[50px] items-center justify-center  h-[90vh]'>
      <div className="right rounded-[94px] w-[400px] max-h-[400px]  ">
        <img  className=' w-[100%] h-[100%] rounded-[94px]' src={logo} alt="" />
        
      </div>
      <div className="left flex flex-col  relative  justify-center font-bold gap-1">
        <h1 className='font-bold text-4xl'>About Me</h1>
      <h1>1.Name:Ravi Prajapati</h1>
      <h1>2.Address:Mumbai,kalyan(421306)</h1>
      {/* <h1>3.Education:12th pass, Bsc cs first year running</h1> */}
      <h1>4.email:mechraviprajapati@gmail.com</h1>
      <h1>5.email:kingraviprajapati@gmail.com</h1>
      <h1>6.contact:8976427743</h1>
      <h1>7.contact:7304865646</h1>
      <h1>8.Age:19</h1>
      <h1>9.Projects: i-Full Stack Music App like spotify and jio savan etc... <br />
        ii-Full Stack chat app using web socket 
      </h1>

      </div>
    </div>        
      
    </div>
    <Fotter position={'fixed'} bottom={'0'}/>
    </>

  )
}
