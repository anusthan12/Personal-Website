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
    SiVercel,
    SiHtml5,
    SiSass,
    SiPython,
    SiOpenai,
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
        id: 1,
        name: "Unseen AI",
        description: "A software tool designed to bypass AI detection of text and paragraphs.",
        technologies: [SiReact, SiTypescript, SiSass, SiHtml5],
        techNames: ["React", "TypeScript", "SCSS", "HTML"],
        techLinks: [
            "https://reactjs.org/",
            "https://www.typescriptlang.org/",
            "https://sass-lang.com/",
            "https://developer.mozilla.org/en-US/docs/Web/HTML"
        ],
        github: "https://github.com/anusthan12/Unseen-AI",
        demo: "https://unseen-ai.vercel.app/",
        image: "/projects/unseen.jpg",  // You'll need to add an appropriate image
        available: true,
    },
    {
        id: 1,
        
        name: "Portfolio",
        description:
            "This is the Second iteration of my portfolio.",
        technologies: [SiTypescript, SiReact,  SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React",  "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/",  "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/anusthan12/Portfolio",
        demo: "https://anusthan12.github.io/Portfolio/",
        image: "/projects/portfolio.jpg",
        available: true,
    },

    
    {
        id: 2,
        name: "Emotion-based Music Player System",
        description: "Emotion-Based Music Player that scans your mood using deep learning and set music playback ",
        technologies: [SiOpencv, SiKeras, SiNumpy, SiReact, SiVercel],
        techNames: ["OpenCV", "Keras", "NumPy", "React", "Vercel"],
        techLinks: [
            "https://opencv.org/",
            "https://keras.io/",
            "https://numpy.org/",
            "https://react.dev/",
            "https://vercel.com/"
        ],
        github: "https://github.com/anusthan12/Emotify",
        demo: "https://www.youtube.com/watch?v=L-0frclzsJ8",
        image: "/projects/emotify.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Locally Runnable AI Chat Model",
        description: "Locally runnable AI chat model with Retrieval Augmented Generation",
        technologies: [SiPython, SiHtml5, SiCss3, SiJavascript, SiTailwindcss],
        techNames: ["Python", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
        techLinks: ["https://www.python.org/", "https://developer.mozilla.org/en-US/docs/Web/HTML", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://www.javascript.com/", "https://tailwindcss.com/"],
        github: "https://github.com/anusthan12/Jaspy",
        demo: "https://github.com/anusthan12/Jaspy",
        image: "/projects/jaspay.jpg",  // You might want to update this with the correct image path
        available: false,
    },
    {
        id: 3,
        name: "Quality bit Solution landing page",
        description: "Build a landing page for Quality bit Solutions",
        technologies: [SiJavascript, SiCss3, SiHtml5],
        techNames: ["JavaScript", "CSS", "HTML"],
        techLinks: ["https://www.javascript.com/", "https://developer.mozilla.org/en-US/docs/Web/CSS", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
        github: "",  // You didn't provide a GitHub link, so I'm leaving it empty
        demo: "https://qualitybitsolutions.netlify.app/",
        image: "/projects/qbs.jpg",  // You'll need to add an appropriate image
        available: true,
    },
    {
        id: 4,
        name: "Nike Clone for Hacktoberfest",
        description: "A Nike landing page clone created for Hacktoberfest, demonstrating front-end development skills.",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techNames: ["HTML", "CSS", "JavaScript"],
        techLinks: [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://www.javascript.com/"
        ],
        github: "https://github.com/anusthan12/Nike_Clone",
        demo: "https://anusthan12.github.io/Nike_Clone/",  
        image: "/projects/nike-clone.jpg",  
        available: true,
    },
    {
        id: 5,
        name: "QR Code Generator",
        description: "A web application that generates QR codes using HTML, CSS, JavaScript, and the QRServer API.",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techNames: ["HTML", "CSS", "JavaScript", "QRServer API"],
        techLinks: [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://www.javascript.com/",
            "https://goqr.me/api/"
        ],
        github: "https://github.com/anusthan12/QR_Code_Generator",
        demo: "https://anusthan12.github.io/QR_Code_Generator/",
        image: "/projects/qrcode.jpg",  // You'll need to add an appropriate image
        available: true,
    },
    {
        id: 6,
        name: "Weather App",
        description: "A web-based weather application built using HTML, CSS, and JavaScript, providing real-time weather information.",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techNames: ["HTML", "CSS", "JavaScript"],
        techLinks: [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://www.javascript.com/"
        ],
        github: "https://github.com/anusthan12/Weatherapp",
        demo: "https://anusthan12.github.io/Weatherapp/",
        image: "/projects/weather.jpg",  // You'll need to add an appropriate image
        available: true,
    },
    {
        id: 7,
        name: "Translator App",
        description: "A web-based translator application supporting over 60+ languages, built using HTML, CSS, and JavaScript.",
        technologies: [SiHtml5, SiCss3, SiJavascript],
        techNames: ["HTML", "CSS", "JavaScript"],
        techLinks: [
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://www.javascript.com/"
        ],
        github: "https://github.com/anusthan12/Translator",
        demo: "https://anusthan12.github.io/Translator/",
        image: "/projects/translator.jpg",  // You'll need to add an appropriate image
        available: true,
    },
    {
        id: 8,
        name: "Aurora: Personal Chat GPT",
        description:
            "Aurora is an open AI application (Inspired by ChatGPT)",
        technologies: [SiJavascript, SiCss3, SiNodedotjs,SiOpenai ],
        techNames: ["JavaScript", "Vanilla CSS", "Node JS", "OpenAI"],
        techLinks: ["https://www.javascript.com/", "https://vanillacss.com/", "https://nodejs.org/en/" , "https://openai/en"],
        github: "https://github.com/anusthan12/Aurora",
        demo: "https://www.youtube.com/watch?v=lxW08dgQQE4&t=1s",
        image: "/projects/aurora.jpg",
        available: true,
    }
    ,
    {
        id: 9,
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
    {
        id: 10,
        name: "Conference paper",
        description:
            "Conference paper titled  Optimizing Resource Efficiency in Smart Greenhouses through IoT  to IEEE accepted slated for publication in IEEE Xplore by July 2024.[eCF Paper Id: INCET2024-417]",
        technologies: [ ],
        techNames: [  ],
        techLinks: [],
        github: "",
        demo: "",
        image: "/projects/iot.jpeg",
        available: false,
    },
];
