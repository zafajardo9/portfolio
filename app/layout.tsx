import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/nav-bar";
import Footer from "@/components/global/footer";
import { HeaderNav } from "@/components/global/header-nav";

import { Button } from "@/components/ui/button";

import {motion, AnimatePresence} from "framer-motion";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { MdMotionPhotosAuto } from "react-icons/md";
import Transition from "./transition";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Zack",
  description: "Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <Drawer>
        <html lang="en">
      
              <body className={roboto.className}>
                
              <Navbar />

                <Transition>
                
                    {children}
                </Transition>

              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>You want to know me better?</DrawerTitle>
                </DrawerHeader>
                <DrawerFooter>
                    <HeaderNav />

                </DrawerFooter>
              </DrawerContent>

              </body>


        </html>
    </Drawer>
  );
}
