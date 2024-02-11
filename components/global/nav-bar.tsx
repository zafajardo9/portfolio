'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';

import { BsThreeDotsVertical } from "react-icons/bs";
import { Switch } from "@/components/ui/switch"
import { FiMenu } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DrawerTrigger } from '../ui/drawer';



export function Navbar() {
    return (
        <div className="flex justify-between items-center bg-white px-8 
        rounded-lg m-3 shadow-md fixed top-0 left-1/2 
        transform -translate-x-1/2 w-full max-w-screen-xl
        
        ">

            <div className="text-lg font-semibold">
            <Link href="/">
                <Avatar>
                    <AvatarImage src="https://ik.imagekit.io/23umzxu6uw/2.png?updatedAt=1706607362185" />
                    <AvatarFallback>Z</AvatarFallback>
                </Avatar>
            </Link>
            
            </div>
            <div className="flex items-center divide-x">
                <ul className="relative flex items-center justify-between h-16 bg-gray space-x-8">

                    <li>
                        <Button variant="main">
                            <Link href="https://ik.imagekit.io/23umzxu6uw/Fajardo-Resume%201.pdf?updatedAt=1707619553129" className="hover:font-bold" data-no-prefetch>Download Resume</Link>
                        </Button>
                    </li>
                    
                    <li>
                        <DrawerTrigger>
                            {/* <Button variant="ghost"> */}
                                <FiMenu />
                            {/* </Button> */}
                        </DrawerTrigger>
                    </li>
                    
                </ul>
                
            </div>
        </div>
    );
}
