"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"  
import { IoDownload } from "react-icons/io5";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.10) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <div
      className={cn(
        "flex max-w-fit items-center justify-center space-x-4 md:space-x-8 fixed top-5 inset-x-0 mx-auto p-2 md:px-4 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md z-50",
        className
      )}
    >



            <div className="text-lg font-semibold">
              <Link href="/">
                  <Avatar>
                      <AvatarImage src="https://ik.imagekit.io/23umzxu6uw/2.png?updatedAt=1706607362185" />
                      <AvatarFallback>Z</AvatarFallback>
                  </Avatar>
              </Link>
            
            </div>

      {navItems.map((navItem: any, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-black dark:hover:text-neutral-300 hover:text-neutral-500 hover:font-bold"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block">{navItem.name}</span>
        </Link>
      ))}


  <Link href="https://ik.imagekit.io/23umzxu6uw/Fajardo-Resume%201.pdf?updatedAt=1707619553129" target="_blank">
      <button className="border font-medium relative bg-colorOne border-neutral-200 dark:border-white/[0.2] text-white dark:text-black px-4 py-2 rounded-full">
        <span className="hidden md:inline-block hover:font-bold">
          Download Resume/CV
        </span>

        <span className="text-xs sm:hidden flex">Download<IoDownload /></span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-orange-400 to-transparent h-px md:hidden">
        </span>
      </button>
    </Link>

    </div>
  );
};
