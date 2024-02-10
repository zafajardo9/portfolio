import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/nav-bar";
import Footer from "@/components/global/footer";
import { HeaderNav } from "@/components/global/header-nav";

import { Button } from "@/components/ui/button";


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
          {children}


          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>You want to know me better?</DrawerTitle>
              {/* <DrawerDescription>Click on the Box</DrawerDescription> */}
            </DrawerHeader>
            <DrawerFooter>
                <HeaderNav />
              {/* <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose> */}
            </DrawerFooter>
          </DrawerContent>

          </body>


    </html>
    </Drawer>
  );
}
