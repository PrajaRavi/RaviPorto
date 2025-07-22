import React, { useRef, useState } from 'react'
import '../App.css'
import {FaUser,FaPhoneAlt} from "react-icons/fa"
import {MdOutlineEmail} from 'react-icons/md'
import axios from 'axios'
import { toast } from 'react-toastify'
import Fotter from './Fotter'
export default function Contact() {
let [name,setname]=useState()
  let [email,setemail]=useState()
  let [contact,setcontact]=useState()
  let [message,setmessage]=useState()
 let name1=useRef();
 let email1=useRef();
 let contact1=useRef();
 let message1=useRef();
  async function HandleSubmit(e){
    e.preventDefault();
    let {data}=await axios.post(`https://ravistudiobackend.onrender.com/contact`,{
name,email,contact,message
    });
    console.log(data)
    name1.current.value=''
    email1.current.value=''
    contact1.current.value=''
    message1.current.value=''
    toast.success("Submitted successfully")

  }
  return (
    <>
    <div className='big-container h-[90vh] top-[60px] relative'>
      <form onSubmit={HandleSubmit} action="" className='flex font-bold  flex-col items-center justify-center gap-6'>

      <h1 className='md:text-5xl text-3xl'>Contact Us!!!!!</h1>
      <div className="username flex items-center justify-center gap-2 rounded-[24px] sm:w-[400px] w-[300px] py-[5px] shadow1">
<FaUser className='text-2xl'/>
      <input required type="text" onChange={(e)=>{setname(e.target.value)}} ref={name1} name="username" placeholder='Enter Name...' className='border-none outline-none w-[80%] ' id="" />
      </div>
      <div className="email flex items-center justify-center gap-2 rounded-[24px] sm:w-[400px] w-[300px] py-[5px] shadow1">
<MdOutlineEmail className='text-2xl'/>
      <input required type="email" name="email" placeholder='Enter Email...' onChange={(e)=>{setemail(e.target.value)}} ref={email1} className='border-none outline-none w-[80%] ' id="" />
      </div>
      <div className="contact flex items-center justify-center gap-2 rounded-[24px] sm:w-[400px] w-[300px] py-[5px] shadow1">
<FaPhoneAlt className='text-2xl'/>
      <input required type="number" name="contact" placeholder='Enter Contact...' className='border-none outline-none w-[80%] ' onChange={(e)=>setcontact(e.target.value)} ref={contact1} id="" />
      </div>
      <div className="contact flex items-center justify-center gap-2 rounded-[24px] sm:w-[400px] w-[300px] h-[200px] py-[5px] shadow1">
        <textarea onChange={(e)=>setmessage(e.target.value)} ref={message1} placeholder='Enter your message..' className='w-[100%] h-[100%] outline-none border-none px-4'>

        </textarea>
      </div>
      <button className='border-2 sm:w-[400px] w-[300px] py-1 rounded-2xl hover:scale-[1.1] cursor-pointer transition-all duration-300'>Submit</button>

      </form>
      <div className="bundle font-bold sm:text-2xl text-sm text-center">

      <h1>or</h1>
      <h1>Call me:8976427743/7304865646</h1>
      </div>
    </div>
    <Fotter position={'absolute'} bottom={'0'}/>
    </>

  )
}
