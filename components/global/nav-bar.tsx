'use client';

import React, { ReactNode } from 'react';
interface ButtonProps {
    children: ReactNode;
   }

export function Navbar() {
    return (
        <div className="flex container mx-auto justify-between items-center">
            <div className="text-lg font-semibold">
                Zack
            </div>
            <div className="flex items-center divide-x">
                <ul className="relative flex items-center justify-between h-16 bg-gray space-x-4">
                    <li>
                        About Me
                    </li>
                    <li>
                        Download Resume
                    </li>
                    <li>
                        Contact Me
                    </li>
                </ul>
                
            </div>
            <div className="flex items-center divide-x">
                <Button>Toggle Button</Button>
            </div>
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