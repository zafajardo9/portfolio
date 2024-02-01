import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global/nav-bar";
import Footer from "@/components/global/footer";
import { HeaderNav } from "@/components/global/header-nav";
import {
  Drawer
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";

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

          </body>


    </html>
    </Drawer>
  );
}
