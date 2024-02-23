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
import { TypewriterEffectContainer } from "@/components/global/header-typewritter";


export default function Home() {
  return (
  <div className="w-full h-screen">
    <TypewriterEffectContainer />
  </div>




  );
}
