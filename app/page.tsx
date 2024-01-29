import Image from "next/image";

import {Navbar} from "../components/global/nav-bar"

export default function Home() {
  return (
    <div className="w-full h-screen mt-20" >


        <div className="header-profile flex justify-between p-7">
          <div className="flex flex-col justify-around left-container text-right w-[30%] h-[250px]">
              <h1 className="text-colorOne text-lg">Hello There! 👋</h1>
              <h2 className="font-bold">I'm Zack</h2>
              <p className="text-sm italic text-gray-800">
                "Passion fuels the relentless pursuit of mastery in the realm of coding. 
                A developer's journey is not just about writing lines of code; 
                it's a symphony of curiosity, creativity, and continuous learning, 
                transforming challenges into opportunities for growth."
              </p>
          </div>
          <div className="right-container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png" alt=""/>
          </div>
        </div>
      
    </div>
  );
}
