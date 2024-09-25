'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const ContainerWorks = dynamic(() => import('@/components/global/works-component-container'), { ssr: false })
const BubbleText = dynamic(() => import('@/components/global/bubble-text'), { ssr: false })

import { GrPersonalComputer } from "react-icons/gr";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { GrGamepad } from "react-icons/gr";
import { MdDataArray } from "react-icons/md";

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

export default function About() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <div className="w-full min-h-screen flex flex-col p-3 pt-24 md:p-5 lg:px-20">
      <div className="flex h-[25rem] items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          <BubbleText text="My Project / Works" />
          <div className="pt-4 animate-bounce flex justify-center">
            <CiCircleChevDown className="text-4xl text-colorOne" />
          </div>
        </span>
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
