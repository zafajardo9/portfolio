import Image from "next/image";
import Link from 'next/link';
import { Navbar } from "../components/global/nav-bar"
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
import { TypewriterEffectContainer } from "@/components/global/header-typewritter";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function Home() {
  return (
    <div className="w-full h-screen">
      <TypewriterEffectContainer />
      <BackgroundBeams />
    </div>




  );
}
