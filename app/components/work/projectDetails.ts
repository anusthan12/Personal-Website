import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig,
    SiJavascript,
    SiCss3, // Add this line for Vanilla CSS
    SiExpress, // Add this line for Express
    SiAxios, // Add this line for Axios
    SiNodedotjs,
    SiStreamlit,
    SiOpencv,
    SiKeras,
    SiNumpy,
    SiVercel
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Aurora: Personal Chat GPT",
        description:
            "Aurora is an open AI application (Inspired by ChatGPT)",
        technologies: [SiJavascript, SiCss3, SiNodedotjs ],
        techNames: ["JavaScript", "Vanilla CSS", "Node JS"],
        techLinks: ["https://www.javascript.com/", "https://vanillacss.com/", "https://nodejs.org/en/"],
        github: "https://github.com/anusthan12/Aurora",
        demo: "https://aurora-one-murex.vercel.app/",
        image: "/projects/aurora.jpg",
        available: true,
    },
    {
        id: 1,
        
        name: "Portfolio",
        description:
            "This is the Second iteration of my portfolio.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/anusthan12/Portfolio",
        demo: "https://anusthan12.github.io/Portfolio/",
        image: "/projects/portfolio.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Emotify (Emotion-Based Music Player)",
        description:
            " Emotion-Based Music Player that scans your mood using deep learning, has its own multiple music player, and servers",
        technologies: [SiOpencv,SiKeras, SiNumpy,SiReact, SiVercel ],
        techNames: [ "Opencv"  ,"Keras", "SiNumpy","React Js", "Vercel" ],
        techLinks: ["https://react.dev/", "https://react.dev/","https://react.dev/","https://react.dev/", "https://react.dev/"],
        github: "https://github.com/anusthan12/Emotify",
        demo: "https://www.youtube.com/watch?v=L-0frclzsJ8",
        image: "/projects/emotify.jpg",
        available: false,
    },
    {
        id: 3,
        name: "Published A Patent",
        description:
            " Solution and measurement for water management and leakage detection problems using IOT (Application number 202331032194)",
        technologies: [ ],
        techNames: [  ],
        techLinks: [],
        github: "",
        demo: "",
        image: "/projects/iot.jpeg",
        available: false,
    },
];
