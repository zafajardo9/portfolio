"use client";
import React from "react";
import { GoHomeFill } from "react-icons/go";
import { TbUserHexagon } from "react-icons/tb";
import { FaCameraRetro } from "react-icons/fa";
import { FloatingNav } from "../ui/floating-navbar";


export function FloatingNavMain() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <GoHomeFill className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Portfolio",
      link: "/works",
      icon: <TbUserHexagon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Hobbies",
      link: "/hobbies",
      icon: (
        <FaCameraRetro className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

