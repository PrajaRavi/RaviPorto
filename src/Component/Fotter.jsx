
import { FaCopyright, FaHeart } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FacebookIcon, TwitterIcon } from "react-share";
export default function Fotter({position,bottom}) {
  return (
    <div  className={`bg-black  text-white ${position} bottom-[${bottom}]  md:text-xl text-sm py-[5px]  font-bold w-[100%]  mt-[20px] `} >
      <div className="flex w-[100%] items-center justify-center gap-4">
      Made with love <span><FaHeart color="red" className="animate-bounce"/></span> by Ravi Prajapati

      </div>
      
      
    </div>
  )
}
