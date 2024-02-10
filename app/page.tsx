import Image from "next/image";
import Link from 'next/link';
import {Navbar} from "../components/global/nav-bar"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import SocLinks from "@/components/global/soc-links";
import { HeaderNav } from "@/components/global/header-nav";


export default function Home() {
  return (
<div className="w-full h-screen">
  <div className="h-full flex flex-col justify-center">
    <div className="p-12 align-middle flex flex-col justify-center sm:flex-row-reverse">

      {/* IMAGE */}
      <div className="flex items-center justify-center sm:w-1/2">
        <img
          src="https://ik.imagekit.io/23umzxu6uw/DDD.png?updatedAt=1706796142895"
          alt=""
          className="w-[60%]"
        />
      </div>

      <div className="p-12 flex flex-col justify-around left-container text-left sm:w-1/2">
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
  </div>




    </div>




  );
}
