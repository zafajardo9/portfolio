'use client';



import { FaLinkedin, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocLinks = () => {
  return (
    <div className="flex text-sm justify-around sm:text-[2rem] text-colorThree w-3/5">
      <a href="https://github.com/zafajardo9">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/zafajardo">
        <FaFacebookF />
      </a>
      <a href="https://www.linkedin.com/in/zafajardo9">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/ItZucks">
        <FaSquareXTwitter />
      </a>
      <a href="https://www.instagram.com/zahiroshi/">
        <FaInstagram />
      </a>
        


        
    </div>
  )
}

export default SocLinks