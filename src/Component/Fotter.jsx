
import {  FaHeart } from "react-icons/fa"
import { FaInstagram ,FaCopyright} from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FacebookIcon, TwitterIcon } from "react-share";
// import {RiDoubleQuotesL,RiDoubleQuotesR} from "react-icons/ri"
export default function Fotter({position,bottom}) {
  return (
    <div  className={`bg-transparent   text-black ${position} bottom-[${bottom}]  md:text-xl text-xs py-[5px]  font-bold w-[100%]   `} >
      <div className="flex md:w-[50%] w-[90%] mx-auto py-2 border-b-3 items-center justify-center gap-4">
<span className="flex items-center justify-center"><FaCopyright/>raviporto.com      Made with love</span> <span><FaHeart color="red" className="animate-bounce"/></span> by Ravi Prajapati

      </div>
      
      
    </div>
  )
}
