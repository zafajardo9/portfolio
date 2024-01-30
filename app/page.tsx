import Image from "next/image";
import Link from 'next/link';
import {Navbar} from "../components/global/nav-bar"
import { Button } from "@/components/ui/button"

import SocLinks from "@/components/global/soc-links";

export default function Home() {
  return (
    <div className="w-full h-screen" >
      
      <div className="grid grid-rows-2 gap-4 h-full">
        <div className="grid grid-cols-2 gap-4 mt-28">
          <div className="p-4 align-middle flex justify-center">


              <div className="flex flex-col justify-around left-container text-left w-2/5">
                  <h1 className="text-colorOne text-xl">Hello There! 👋</h1>
                  <h2 className="font-bold text-2xl">I'm Zack</h2>
                  <p className="text-xs italic text-gray-800">
                    "Passion fuels the relentless pursuit of mastery in the realm of coding. 
                    A developer's journey is not just about writing lines of code; 
                    it's a symphony of curiosity, creativity, and continuous learning, 
                    transforming challenges into opportunities for growth."
                  </p>
              </div>

          </div>
          <div className="p-4 flex items-center justify-center">
            <img src="https://ik.imagekit.io/23umzxu6uw/3.png?updatedAt=1706607362158" 
                alt=""
                className="w-48 h-48 object-cover"
            />

          </div>
        </div>

            <div className="flex justify-end ">
              <div className="grid grid-cols-4 w-[90%] ">
                    <div className="">

                      <div className="p-4 h-4/5 flex flex-col text-right justify-around">
                          <h1 className="text-2xl font-bold">Say Hello</h1>
                          <a className="text-sm" href="">zafajardo9@gmail.com</a>

                          <div className="social-icons">
                            <SocLinks />
                          </div>

                      </div>


                        <p className="text-xs">Built By Zack</p>
                    </div>


                    <div className="bg-colorOne p-8 text-white font-bold flex flex-col justify-between">
                      <div className="text-2xl"><h1>My Works</h1></div>

                      <Button variant="custom">
                        <Link href="#">See more</Link>
                      </Button>
                    </div>
                    <div className="bg-colorTwo p-8 text-white font-bold flex flex-col justify-between">
                    <div className="text-2xl"><h1>Hobbies</h1></div>

                      <Button variant="custom">
                        <Link href="#"> See more</Link>
                      </Button>

                    </div>

                    <div className="bg-colorThree p-8 text-white font-bold flex flex-col justify-between">


                    <div className="text-2xl"><h1>My Works</h1></div>

                      <Button variant="custom">
                        <Link href="#">See more</Link>
                      </Button>

                    </div>
                  </div>
            </div>


      </div>


    </div>
  );
}
