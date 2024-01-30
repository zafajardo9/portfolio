'use client';



import { FaLinkedin, FaFacebookF, FaInstagram  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocLinks = () => {
  return (
    <div className="flex justify-around w-3/5">
        <FaFacebookF className="text-2xl text-colorThree"/>
        <FaLinkedin className="text-2xl text-colorThree"/>
        <FaSquareXTwitter className="text-2xl text-colorThree"/>
        <FaInstagram className="text-2xl text-colorThree"/>
    </div>
  )
}

export default SocLinks