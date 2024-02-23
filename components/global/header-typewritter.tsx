"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Link from 'next/link';

import { Button } from "@/components/ui/button"



export function TypewriterEffectContainer() {
  const words = [
    {
      text: "Zackery",
    },
    {
      text: "Alline",
    },
    {
      text: "Fajardo.",
      className: "text-red-500 dark:text-red-500",
    },
  ];

  const kot = `

  "Passion fuels the relentless pursuit of mastery in the realm of coding. 
            A developer's journey is not just about writing lines of code; 
            it's a symphony of curiosity, creativity, and continuous learning, 
            transforming challenges into opportunities for growth."

  `;

  return (
    <div className="h-full flex flex-col justify-center">

        <div className="p-12 align-middle flex flex-col justify-center sm:flex-row-reverse">
            

        <div className="flex items-center justify-center sm:w-1/2">
            <img
            src="https://ik.imagekit.io/23umzxu6uw/Group%203image%20(1).png?updatedAt=1707617707488"
            alt=""
            className="w-[60%]"
            />
        </div>

        <div className="p-12 flex flex-col justify-around left-container text-left sm:w-1/2">
            <h1 className="text-colorOne text-xl">Hello There! 👋</h1>
            <TypewriterEffectSmooth words={words} />
            <TextGenerateEffect words={kot} />



            <div className="flex flex-col m-1 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-lg ">
              <Link href={'/'}>
                <Button variant="main">
                  Know my works
                </Button>
              </Link>
              <Link href={'/'}>
                <Button variant="main_second">
                  Get in touch
                </Button>
              </Link>
              
            </div>

        </div>



        </div>


    </div>
  );
}
