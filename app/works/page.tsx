"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ContainerWorks = dynamic(
  () => import("@/components/global/works-component-container"),
  { ssr: false }
);
const BubbleText = dynamic(() => import("@/components/global/bubble-text"), {
  ssr: false,
});

import { GrPersonalComputer } from "react-icons/gr";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { GrGamepad } from "react-icons/gr";
import { MdDataArray } from "react-icons/md";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

// TECH USED
import { RiFlutterFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFastapi, SiTailwindcss } from "react-icons/si";
import { RiCodeFill } from "react-icons/ri";
import { FaPhp, FaHtml5, FaCss3Alt, FaUnity, FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiJupyter } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import {
  CiCircleChevDown,
  CiSquareChevDown,
  CiCircleChevUp,
} from "react-icons/ci";

import projects from "@/lib/project-list";
import Link from "next/link";

const iconMap: { [key: string]: JSX.Element } = {
  website: <GrPersonalComputer />,
  mobileApp: <HiMiniDevicePhoneMobile />,
  game: <GrGamepad />,
  data: <MdDataArray />,
  normal: <RiCodeFill />,
};

type IconName =
  | "RiFlutterFill"
  | "SiDart"
  | "IoLogoFirebase"
  | "FaUnity"
  | "GrPersonalComputer"
  | "HiMiniDevicePhoneMobile"
  | "GrGamepad"
  | "MdDataArray"
  | "TbBrandNextjs"
  | "SiFastapi"
  | "SiTailwindcss"
  | "RiCodeFill"
  | "FaPhp"
  | "FaHtml5"
  | "FaCss3Alt"
  | "FaReact"
  | "TbBrandReactNative"
  | "IoLogoJavascript"
  | "SiJupyter"
  | "SiExpo";

const iconComponents = {
  RiFlutterFill: RiFlutterFill,
  SiDart: SiDart,
  IoLogoFirebase: IoLogoFirebase,
  FaUnity: FaUnity,
  GrPersonalComputer: GrPersonalComputer,
  HiMiniDevicePhoneMobile: HiMiniDevicePhoneMobile,
  GrGamepad: GrGamepad,
  MdDataArray: MdDataArray,
  TbBrandNextjs: TbBrandNextjs,
  SiFastapi: SiFastapi,
  SiTailwindcss: SiTailwindcss,
  RiCodeFill: RiCodeFill,
  FaPhp: FaPhp,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaReact: FaReact,
  TbBrandReactNative: TbBrandReactNative,
  IoLogoJavascript: IoLogoJavascript,
  SiJupyter: SiJupyter,
  SiExpo: SiExpo,
};

const useGitHubViewCount = () => {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchViewCount = async () => {
      try {
        const response = await fetch("https://api.github.com/users/zafajardo9");
        const data = await response.json();
        // Using followers count as a proxy for views
        setViewCount(data.followers);
      } catch (error) {
        console.error("Error fetching view count:", error);
      }
    };

    fetchViewCount();
  }, []);

  return viewCount;
};

export default function About() {
  const [isClient, setIsClient] = useState(false);
  const viewCount = useGitHubViewCount();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="w-full min-h-screen flex flex-col p-3 pt-24 md:p-5 lg:px-20">
      <div className="w-full h-[25rem] items-center justify-center mt-7">
        <CardSpotlight className="w-full h-full flex justify-center items-center rounded-xl">
          <div className="absolute top-4 left-4 p-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <img
              src="https://komarev.com/ghpvc/?username=zafajardo9&color=blueviolet"
              alt="Profile views"
              className="h-6"
            />
          </div>
          <div className="absolute top-4 right-4 p-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-white mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <span className="text-white font-bold">
              {viewCount !== null ? viewCount : "..."}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow">
            <svg
              height="68"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="68"
              data-view-component="true"
              className="text-white"
            >
              <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                fill="currentColor"
              ></path>
            </svg>
            <p className="text-white font-bold text-2xl mt-4">GitHub</p>
          </div>
          <div className="absolute bottom-4 right-4 p-2">
            <Link
              href="https://github.com/zafajardo9?tab=repositories"
              className="text-white text-sm underline-offset-4 hover:underline flex"
            >
              Click here for more projects{" "}
            </Link>
          </div>
        </CardSpotlight>
      </div>

      <div className="relative py-10">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          {/* <span className="bg-white px-3 text-lg font-semibold text-gray-900">
            Projects
          </span> */}
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ContainerWorks
            key={index}
            icon={iconMap[project.icon]}
            projectName={project.projectName}
            details={project.details}
            projectInfo={project.projectInfo}
            techIcons={project.techIcons.map((iconName) => {
              const IconComponent = iconComponents[iconName as IconName];
              if (!IconComponent) {
                console.error(
                  `Icon ${iconName} not found in iconComponents mapping.`
                );
                return null;
              }
              return <IconComponent key={iconName} />;
            })}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
            status={project.status}
            branch={project.branch}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
