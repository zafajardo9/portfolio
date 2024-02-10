import ContainerWorks from "@/components/global/works-component-container"


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
import { FaPhp, FaHtml5, FaCss3Alt, FaUnity, FaReact  } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiJupyter } from "react-icons/si";
import { SiExpo } from "react-icons/si";

//FONT
import { Quicksand } from "next/font/google";

const font = Quicksand({
  weight: '400',
  subsets: ['latin'],
});


const iconMap = {
  website: <GrPersonalComputer  />,
  mobileApp: <HiMiniDevicePhoneMobile />,
  game: <GrGamepad />,
  data: <MdDataArray />,
  normal: <RiCodeFill />
};


export default function About(){
  return (
  <div className="w-full h-screen flex flex-col md:grid-cols-2 p-5 pt-24 ">

    <h1 className={`${font.className} font-bold text-4xl md:text-5xl lg:text-6xl text-center`}>
      WORKS
    </h1>


    <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-3">
      <ContainerWorks 
              icon={iconMap.mobileApp}
              projectName="BudgetBud"
              details="Your budget buddy"
              projectInfo="Our Application or specifically mobile application is named “BudgetBud” shortened phrase of “Your Budgeting Buddy”. We envision that this app will make personal finance management or budgeting a breeze for everyone. "
              techIcons={[<RiFlutterFill />, <SiDart />, <IoLogoFirebase />]}
              githubLink="https://github.com/zafajardo9/BudgetBud"
              liveDemoLink="#"
              status=" On Going "
              branch="main"
        />


      <ContainerWorks 
              icon={iconMap.website}
              projectName="PUP-RIS"
              details="University Website"
              projectInfo="The system will serve as a centralized repository for research papers, enabling students to submit their work for review and approval by research professors or advisers. "
              techIcons={[<TbBrandNextjs />, <SiFastapi />, <SiTailwindcss />]}
              githubLink="https://github.com/zafajardo9/research-info-system"
              liveDemoLink="https://pupris.onrender.com"
              status=" On Going "
              branch="main"
        />


      <ContainerWorks 
              icon={iconMap.data}
              projectName="Market Prediction"
              details="Learning"
              projectInfo="From tutorial for learning Machine Leaning with Jupyter Notebook"
              techIcons={[<SiJupyter />]}
              githubLink="https://github.com/zafajardo9/marketpredict"
              liveDemoLink="https://github.com/zafajardo9/marketpredict"
              status=" Finished "
              branch="main"
        />

      <ContainerWorks 
              icon={iconMap.normal}
              projectName="Path Finder Algorithm"
              details="Made in Javascript"
              projectInfo="Made to learn more JS and tried to make a visualization on how the algorithms work"
              techIcons={[<IoLogoJavascript />]}
              githubLink="https://github.com/zafajardo9/path-finder"
              liveDemoLink="https://github.com/zafajardo9/path-finder"
              status=" Finished "
              branch="main"
        />

      <ContainerWorks 
              icon={iconMap.website}
              projectName="Messenger Chat"
              details="Side Project"
              projectInfo="Learning React and Firebase"
              techIcons={[<FaReact />, <IoLogoFirebase />]}
              githubLink="https://github.com/zafajardo9/ChatMessenger"
              liveDemoLink="https://github.com/zafajardo9/ChatMessenger"
              status=" Finished "
              branch="main"
        />
        
        <ContainerWorks 
              icon={iconMap.mobileApp}
              projectName="Habit Tracker"
              details="Check and Track yourself"
              projectInfo="Daily check and tracker for habits and shows heatspots of your activities in days and months"
              techIcons={[<RiFlutterFill />, <SiDart />, <IoLogoFirebase />]}
              githubLink="https://github.com/zafajardo9/HabitTrack"
              liveDemoLink="https://github.com/zafajardo9/HabitTrack"
              status=" Finished "
              branch="main"
        />

        <ContainerWorks 
              icon={iconMap.mobileApp}
              projectName="Timer"
              details="Side Project"
              projectInfo="Made for learning React Native and Expo"
              techIcons={[<TbBrandReactNative />, <SiExpo />]}
              githubLink="https://github.com/zafajardo9/reacttimer"
              liveDemoLink="https://github.com/zafajardo9/reacttimer"
              status=" Finished "
              branch="main"
        />

        <ContainerWorks 
              icon={iconMap.mobileApp}
              projectName="The Weather App"
              details="Side Project"
              projectInfo="Made for learning React Native and Expo with fetching data from API"
              techIcons={[<TbBrandReactNative />, <SiExpo />]}
              githubLink="https://github.com/zafajardo9/The-Weather-App"
              liveDemoLink="https://github.com/zafajardo9/The-Weather-App"
              status=" Finished "
              branch="main"
        />

        <ContainerWorks 
              icon={iconMap.website}
              projectName="Car Rental"
              details="Programming Assignment"
              projectInfo="Showcase what we learned with SQL database and PHP"
              techIcons={[<FaPhp />, <FaHtml5 />, <FaCss3Alt />]}
              githubLink="https://github.com/zafajardo9/eCommerce_CarRental"
              liveDemoLink="https://github.com/zafajardo9/eCommerce_CarRental"
              status=" Finished "
              branch="main"
        />

        <ContainerWorks 
              icon={iconMap.game}
              projectName="WokeUpLikeThis"
              details="Section Project"
              projectInfo="Showcase what we learned from game development class"
              techIcons={[<FaUnity />]}
              githubLink="https://github.com/zafajardo9/wokeuplikethis"
              liveDemoLink="https://github.com/zafajardo9/wokeuplikethis"
              status=" Finished "
              branch="main"
        />
    </div>




  </div>


  );
  
}