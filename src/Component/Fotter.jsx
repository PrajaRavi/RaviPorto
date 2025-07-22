
import { FaCopyright, FaHeart } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FacebookIcon, TwitterIcon } from "react-share";
import {RiDoubleQuotesL,RiDoubleQuotesR} from "react-icons/ri"
export default function Fotter({position,bottom}) {
  return (
    <div  className={`bg-transparent   text-black ${position} bottom-[${bottom}]  md:text-xl text-sm py-[5px]  font-bold w-[100%]   `} >
      <div className="flex md:w-[50%] w-[80%] mx-auto py-2 border-b-3 items-center justify-center gap-4">
      Made with love <span><FaHeart color="red" className="animate-bounce"/></span> by Ravi Prajapati

      </div>
      
      
    </div>
  )
}
