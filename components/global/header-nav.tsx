'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';

import { BsThreeDotsVertical } from "react-icons/bs";
import { Switch } from "@/components/ui/switch"
import { FiMenu } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import SocLinks from './soc-links';
import { FaArrowTurnUp } from "react-icons/fa6";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useState } from 'react';
import { LuCopy, LuCopyCheck } from "react-icons/lu";



const CopyToClipboardButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        // Copy successful
        setCopied(true);
        // Reset the icon after a delay (e.g., 2 seconds)
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  };

  return (
    <button onClick={handleCopyClick}>
      {copied ? <LuCopyCheck className='text-green-500' /> : <LuCopy className='hover:text-colorOne' />}
      
    </button>
  );
};

export function HeaderNav() {
  return (
    <div className="sm:flex flex-row">
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 h-96 w-full">
          <div>
            <div className="p-4 h-4/5 flex flex-col text-right justify-around">
              <h1 className="text-2xl font-bold">Say Hello</h1>

              <HoverCard>
                  <HoverCardTrigger>
                    <p className='text-sm'>zafajardo9@gmail.com <CopyToClipboardButton text={"zafajardo9@gmail.com"} /></p>       
                    
                  </HoverCardTrigger>
                <HoverCardContent className='p-4 flex align-middle justify-around'>
                  <Avatar>
                    <AvatarImage src="https://ik.imagekit.io/23umzxu6uw/2.png?updatedAt=1706607362185" />
                    <AvatarFallback>Z</AvatarFallback>
                  </Avatar>
                  <a href='mailto:zafajardo9@gmail.com'>Email me here! </a>
                  
                  <FaArrowTurnUp className='text-colorOne'/>
                </HoverCardContent>
              </HoverCard>



              <SocLinks />
            </div>

            <p className="text-xs">Built By Zack</p>
          </div>

          <div className="bg-colorOne p-8 text-white font-bold flex flex-col justify-between">
            <div className="text-2xl">
              <h1>My Works</h1>
            </div>

            <Link href="/works">
                <Button variant="custom">
                  See more
                </Button>
            </Link>
          </div>

          <div className="bg-colorTwo p-8 text-white font-bold flex flex-col justify-between">
            <div className="text-2xl">
              <h1>Hobbies</h1>
            </div>

            <Link href="/works">
              <Button variant="custom">
                See more
              </Button>
            </Link>
          </div>

          <div className="bg-colorThree p-8 text-white font-bold flex flex-col justify-between">
            <div className="text-2xl">
              <h1>About Me</h1>
            </div>

            <Link href="/works">
                <Button variant="custom" disabled>
                  See more
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
