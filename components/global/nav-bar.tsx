'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';

import { BsThreeDotsVertical } from "react-icons/bs";
import { Switch } from "@/components/ui/switch"

interface ButtonProps {
    children: ReactNode;
   }

export function Navbar() {
    return (
        <div className="flex justify-between items-center bg-white px-8 rounded-lg m-3 shadow-md fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-xl">
            <div className="text-lg font-semibold">
                Zack
            </div>
            <div className="flex items-center divide-x">
                <ul className="relative flex items-center justify-between h-16 bg-gray space-x-8">

                    <li>
                        <Link href="/about" className="hover:font-bold">Works</Link>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </li>
                    <li>
                        <Link href="/about" className="hover:font-bold">Download Resume</Link>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </li>
                    <li>
                        <Link href="/about" className="hover:font-bold">Contact</Link>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
                    </li>
                </ul>
                
            </div>
            <div className="flex items-center divide-x">
                <Switch/>
            </div>

            <BsThreeDotsVertical />
        </div>
    );
}

const Button = ({ children }: ButtonProps) => {
    return (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {children}
        </button>
    );
};

export default Button;