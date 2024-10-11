// lib/projectList.ts

import { ReactNode } from "react";
import { GrPersonalComputer } from "react-icons/gr";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { GrGamepad } from "react-icons/gr";
import { MdDataArray } from "react-icons/md";
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

const DEFAULT_IMAGE_URL = "https://ik.imagekit.io/eioac6dye/portfolio/prev.jpg?updatedAt=1727280824298";

export type Project = {
  icon: string; // Use string for icon reference
  projectName: string;
  details: string;
  projectInfo: string;
  techIcons: string[]; // Use string array for tech icons
  githubLink: string;
  liveDemoLink: string;
  status: string;
  branch: string;
  imageUrl?: string; // Make imageUrl optional
};

const projects: Project[] = [ https://ik.imagekit.io/eioac6dye/portfolio/kippap.png?updatedAt=1728660751626
                               {
    icon: "website",
    projectName: "Kippap Portal",
    details: "Kippap Learning website and portal",
    projectInfo: "Needed for kippap flexing its services and goals and user to be able to join with the company's fun interactive way of learning",
    techIcons: ["RiFlutterFill", "SiDart", "IoLogoFirebase"],
    githubLink: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/holland-no-google.gif?w=2880&quality=85",
    liveDemoLink: "https://wpvip.edutopia.org/wp-content/uploads/2022/10/holland-no-google.gif?w=2880&quality=85",
    status: "On Going",
    branch: "main",
    imageUrl: "https://ik.imagekit.io/eioac6dye/portfolio/kippap.png?updatedAt=1728660751626",
  },
  {
    icon: "mobileApp",
    projectName: "BudgetBud",
    details: "Your budget buddy",
    projectInfo: "Our Application or specifically mobile application is named 'BudgetBud' shortened phrase of 'Your Budgeting Buddy'. We envision that this app will make personal finance management or budgeting a breeze for everyone.",
    techIcons: ["RiFlutterFill", "SiDart", "IoLogoFirebase"],
    githubLink: "https://github.com/zafajardo9/BudgetBud",
    liveDemoLink: "https://budgetbud.netlify.app/",
    status: "On Going",
    branch: "main",
    imageUrl: "https://ik.imagekit.io/eioac6dye/portfolio/BudgetBud.png?updatedAt=1727280925867",
  },
  {
    icon: "website",
    projectName: "PUP-RIS",
    details: "University Website",
    projectInfo: "The system will serve as a centralized repository for research papers, enabling students to submit their work for review and approval by research professors or advisers.",
    techIcons: ["TbBrandNextjs", "SiFastapi", "SiTailwindcss"],
    githubLink: "https://github.com/zafajardo9/research-info-system",
    liveDemoLink: "https://research-info-system.vercel.app",
    status: "On Going",
    branch: "main",
    imageUrl: "https://ik.imagekit.io/eioac6dye/portfolio/RIS.png?updatedAt=1727280899940",
  },
  {
    icon: "data",
    projectName: "Market Prediction",
    details: "Learning",
    projectInfo: "From tutorial for learning Machine Leaning with Jupyter Notebook",
    techIcons: ["SiJupyter"],
    githubLink: "https://github.com/zafajardo9/marketpredict",
    liveDemoLink: "https://github.com/zafajardo9/marketpredict",
    status: "Finished",
    branch: "main",
  },
  {
    icon: "normal",
    projectName: "Path Finder Algorithm",
    details: "Made in Javascript",
    projectInfo: "Made to learn more JS and tried to make a visualization on how the algorithms work",
    techIcons: ["IoLogoJavascript"],
    githubLink: "https://github.com/zafajardo9/path-finder",
    liveDemoLink: "https://github.com/zafajardo9/path-finder",
    status: "Finished",
    branch: "main",
    imageUrl: "https://ik.imagekit.io/eioac6dye/portfolio/path-finder.png?updatedAt=1727282291012",
  },
  {
    icon: "website",
    projectName: "Messenger Chat",
    details: "Side Project",
    projectInfo: "Learning React and Firebase",
    techIcons: ["FaReact", "IoLogoFirebase"],
    githubLink: "https://github.com/zafajardo9/ChatMessenger",
    liveDemoLink: "https://github.com/zafajardo9/ChatMessenger",
    status: "Finished",
    branch: "main",
  },
  {
    icon: "mobileApp",
    projectName: "Habit Tracker",
    details: "Check and Track yourself",
    projectInfo: "Daily check and tracker for habits and shows heatspots of your activities in days and months",
    techIcons: ["RiFlutterFill", "SiDart", "IoLogoFirebase"],
    githubLink: "https://github.com/zafajardo9/HabitTrack",
    liveDemoLink: "https://github.com/zafajardo9/HabitTrack",
    status: "Finished",
    branch: "main",
  },
  {
    icon: "mobileApp",
    projectName: "Timer",
    details: "Side Project",
    projectInfo: "Made for learning React Native and Expo",
    techIcons: ["TbBrandReactNative", "SiExpo"],
    githubLink: "https://github.com/zafajardo9/reacttimer",
    liveDemoLink: "https://github.com/zafajardo9/reacttimer",
    status: "Finished",
    branch: "main",
    imageUrl: "https://ik.imagekit.io/eioac6dye/portfolio/timer.jpg?updatedAt=1727281800979",
  },
  {
    icon: "mobileApp",
    projectName: "The Weather App",
    details: "Side Project",
    projectInfo: "Made for learning React Native and Expo with fetching data from API",
    techIcons: ["TbBrandReactNative", "SiExpo"],
    githubLink: "https://github.com/zafajardo9/The-Weather-App",
    liveDemoLink: "https://github.com/zafajardo9/The-Weather-App",
    status: "Finished",
    branch: "main",
    imageUrl: "https://ik.imagekit.io/eioac6dye/portfolio/weather.jpg?updatedAt=1727281932115",
  },
  {
    icon: "website",
    projectName: "Car Rental",
    details: "Programming Assignment",
    projectInfo: "Showcase what we learned with SQL database and PHP",
    techIcons: ["FaPhp", "FaHtml5", "FaCss3Alt"],
    githubLink: "https://github.com/zafajardo9/eCommerce_CarRental",
    liveDemoLink: "https://github.com/zafajardo9/eCommerce_CarRental",
    status: "Finished",
    branch: "main",
    imageUrl: "https://raw.githubusercontent.com/zafajardo9/eCommerce_CarRental/main/documentation/1.jpg",
  },
  {
    icon: "game",
    projectName: "WokeUpLikeThis",
    details: "Section Project",
    projectInfo: "Showcase what we learned from game development class",
    techIcons: ["FaUnity"],
    githubLink: "https://github.com/zafajardo9/wokeuplikethis",
    liveDemoLink: "https://github.com/zafajardo9/wokeuplikethis",
    status: "Finished",
    branch: "main",
    // imageUrl: "https://picsum.photos/400/300?random=1",
  },
];

// Function to ensure all projects have an imageUrl
const projectsWithDefaultImage: Project[] = projects.map(project => ({
  ...project,
  imageUrl: project.imageUrl || DEFAULT_IMAGE_URL
}));

export default projectsWithDefaultImage;
