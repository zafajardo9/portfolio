"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

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

  const form = useForm();

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

        <div className="p-12 flex flex-col justify-around left-container text-left sm:w-1/2 z-50">
          <h1 className="text-colorOne text-xl">Hello There! 👋</h1>
          <TypewriterEffectSmooth words={words} />
          <TextGenerateEffect words={kot} />

          <div className="flex flex-col m-1 md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 text-lg">
            <Link href="/works" className={buttonVariants({ variant: "main" })}>
              Know my works
            </Link>

            {/* Button Hidden Now for functionality testing */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="main_second" className="hidden">
                  Email Me directly
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <div className="w-full flex items-center bg-red-500 p-4 ">
                  <Form {...form}>
                    <form
                      // onSubmit={form.handleSubmit(onSubmit)}
                      className=""
                    >
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Email" {...field} />
                            </FormControl>
                            {/* <FormDescription>
                              This is your public display name.
                            </FormDescription> */}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </div>
                {/* <DialogFooter className="sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter> */}
              </DialogContent>
            </Dialog>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={buttonVariants({ variant: "main_second" })}
              >
                Social Media
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuLabel>My Social Media Sites</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <Link
                  href="https://www.facebook.com/zafajardo/"
                  target="_blank"
                >
                  <DropdownMenuItem>
                    <FaFacebook className="mr-3" />
                    Facebook
                  </DropdownMenuItem>
                </Link>
                <Link href="https://github.com/zafajardo9" target="_blank">
                  <DropdownMenuItem>
                    <FaGithub className="mr-3" />
                    Github
                  </DropdownMenuItem>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/zackery-alline-fajardo-642755126/"
                  target="_blank"
                >
                  <DropdownMenuItem>
                    <FaLinkedin className="mr-3" />
                    LinkedIn
                  </DropdownMenuItem>
                </Link>
                <Link
                  href="https://www.instagram.com/zahiroshi/"
                  target="_blank"
                >
                  <DropdownMenuItem>
                    <FaInstagram className="mr-3" />
                    Instagram
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  <MdAlternateEmail className="mr-3" /> zafajardo@gmail.com
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
