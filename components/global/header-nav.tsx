'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';

import { BsThreeDotsVertical } from "react-icons/bs";
import { Switch } from "@/components/ui/switch"
import { FiMenu } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import SocLinks from './soc-links';



export function HeaderNav() {
  return (
    <div className="flex">
      <div className="w-full">
        <div className="grid grid-cols-4 h-96 w-full">
          <div>
            <div className="p-4 h-4/5 flex flex-col text-right justify-around">
              <h1 className="text-2xl font-bold">Say Hello</h1>
              <a className="text-sm" href="">
                zafajardo9@gmail.com
              </a>

              <div className="social-icons">
                <SocLinks />
              </div>
            </div>

            <p className="text-xs">Built By Zack</p>
          </div>

          <div className="bg-colorOne p-8 text-white font-bold flex flex-col justify-between">
            <div className="text-2xl">
              <h1>My Works</h1>
            </div>

            <Button variant="custom">
              <Link href="#">See more</Link>
            </Button>
          </div>

          <div className="bg-colorTwo p-8 text-white font-bold flex flex-col justify-between">
            <div className="text-2xl">
              <h1>Hobbies</h1>
            </div>

            <Button variant="custom">
              <Link href="#"> See more</Link>
            </Button>
          </div>

          <div className="bg-colorThree p-8 text-white font-bold flex flex-col justify-between">
            <div className="text-2xl">
              <h1>My Works</h1>
            </div>

            <Button variant="custom">
              <Link href="#">See more</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
