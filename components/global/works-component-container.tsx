'use client';

import { RiEmotionHappyFill } from "react-icons/ri";
import { FaGithub, FaPlay} from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import Link from 'next/link';
import { Button } from "@/components/ui/button"

import { CgWebsite } from "react-icons/cg"; 
import { ReactNode } from "react";



const ContainerWorks = ({ icon, projectInfo, techIcons, projectName, details, githubLink, liveDemoLink, status, branch }: any) => {
  return (
    <div className="flex flex-col w-full p-6 rounded-md border gap-2 shadow-md">

        <div className="flex items-center gap-3">

            <div className="p-3 border rounded-full bg-muted">
                {icon}
            </div>
            
            <div className="flex flex-col">
                <h1 className="font-bold">{projectName}</h1>
                <p>{details}</p>
            </div>

            <div className="flex ml-auto gap-2">
                {techIcons.map((techIcon: ReactNode, index: number) => (
                    <div key={index} className="p-2 border rounded-full">
                        {techIcon}
                    </div>
                ))}
            </div>
            
            
        </div>
        <div >
            <p className="text-xs opacity-85 p-4">{projectInfo}</p>
        </div>
        
        <Link href={githubLink}>
            <div className="w-full rounded-full px-6 py-1 flex items-center gap-3 text-center text-sm font-bold">
                <FaGithub /> {new URL(githubLink).pathname.replace(/^\//, '')}
            </div>
        </Link>


        <Button asChild variant="btn_icon_works">
            <Link href={liveDemoLink}>
                <FaPlay /> Live Demo
            </Link>
        </Button>

        <div className="text-sm">
        <div className="flex items-center">
            <p>Status:</p>
            <p className="text-green-600 font-bold px-1">{status}</p>
            <IoIosGitBranch />
            <strong>{branch}</strong>
        </div>
        </div>

    </div>
  )
}

export default ContainerWorks