"use client";

import { RiEmotionHappyFill } from "react-icons/ri";
import { FaGithub, FaPlay } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { CgWebsite } from "react-icons/cg";
import { ReactNode } from "react";
import Badge from "../ui/badge";

const ContainerWorks = ({
  icon,
  projectInfo,
  techIcons,
  projectName,
  details,
  githubLink,
  liveDemoLink,
  status,
  branch,
  imageUrl,
}: any) => {
  return (
    <div className="relative flex flex-col w-full h-[420px] p-6 rounded-md border shadow-md">
      <div className="absolute -top-3 left-4 z-10">
        <Badge status={status}>{status}</Badge>
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 border rounded-full bg-muted">{icon}</div>

        <div className="flex flex-col">
          <h1 className="font-bold">{projectName}</h1>
          <p>{details}</p>
        </div>

        <div className="flex ml-auto gap-2">
          {techIcons.map((techIcon: React.ReactNode, index: number) => (
            <div key={index} className="p-2 border rounded-full">
              {techIcon}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow overflow-auto mb-4">
        <p className="text-xs opacity-85">{projectInfo}</p>
      </div>

      <Link href={githubLink} className="mb-4">
        <div className="w-full rounded-full px-6 py-1 flex items-center gap-3 text-center text-sm font-bold">
          <FaGithub /> {new URL(githubLink).pathname.replace(/^\//, "")}
        </div>
      </Link>

      <div className="mt-auto">
        <Link href={liveDemoLink}>
          <div className="w-full h-40 bg-gray-200 rounded-md overflow-hidden cursor-pointer relative">
            <Image
              src={imageUrl}
              alt={`${projectName} Preview`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default ContainerWorks;
