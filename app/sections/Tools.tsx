import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
    SiTailwindcss, SiCplusplus, SiFigma, SiGit,
    SiGithub,
    SiMysql, SiBootstrap,
    SiYolo, SiJavascript,
    SiOpenai, SiOpencv, SiReact, SiGmail, SiTypescript, SiWebstorm, SiHtml5, SiPython
    , SiLinkedin, SiInstagram, SiCodepen
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    const email = 'anusthan.singh12@gmail.com';
    const githubUrl = 'https://github.com/anusthan12';
    const linkedinUrl = 'https://www.linkedin.com/in/anusthan-singh-b436a9237/';
    const instagramUrl = 'https://www.instagram.com/anusthan_12/';
    const codepenUrl = 'https://codepen.io/anusthan12/pens/showcase';


    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Experience"}
                    className={
                        "mb-4 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-6 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-[100%] flex-col gap-1 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-4 md:gap-2 md:text-[20px] md:leading-relaxed lg:mb-6 lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="STRALTO GLOBAL - [Sept’23- Present]" />
                        <AnimatedBody delay={0.2} text="(Position: React JS and ML Intern / Developer Intern):" />
                        <AnimatedBody
                            delay={0.1}
                            text=" • Contributed in development of multiple level service applications for the Land Registration System (Civic Plan) to enable transparent
efficient platform that assists local and state governments in India."
                        />
                        <AnimatedBody
                            delay={0.1}
                            text="• Designed responsive pages and implemented scalable APIs and developed reusable components to enhance efficiency and reduced
re-work by 20% and real time rendering for all pages using React Functions and Node JS, and other Azure cloud storage technologies
that can handle multiple file requests concurrently."
                        />
                        <AnimatedBody
                            delay={0.1}
                            text="• Developed pilot models for threat detection, focusing on fire, Weapon detection and people counting systems for project sentinel that
used for security with AI-powered computer vision to safeguard private premises."
                        />
                        <AnimatedBody
                            delay={0.1}
                            text="• Utilized the latest technologies including React JS(TSX), Bootstrap,
Node JS, MySQL, Azure, Postman and Figma, Python, Open CV, and Yolo Models."
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">


                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-[100%] flex-col gap-1 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-4 md:gap-2 md:text-[20px] md:leading-relaxed lg:mb-6 lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="HighRadius Corporation - [May’23- Aug’23]" />
                        <AnimatedBody delay={0.2} text="(Product Core Intern):" />
                        <AnimatedBody
                            delay={0.1}
                            text="• Developed a B2B Application using machine learning to efficiently filter and process CSV data, Contributed to a 48% increase in application efficiency from 38%"
                        />
                        <AnimatedBody
                            delay={0.1}
                            text="• Played a key role as Core developer Intern in platform team."
                        />
                        <AnimatedBody
                            delay={0.1}
                            text="• Utilized Python, Machine Learning, Java Servlets, and React JS ,JIRA"
                        />
                    </div>
                </div>
            </div>

            {/* <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"TOOLS IM USING."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                   
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Frontend" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <SiJavascript size={50}/>
                                <SiReact size={50}/>
                                <SiTypescript size={50}/>
                                <SiTailwindcss size={50}/>
                                <SiBootstrap size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.3} text="Languages" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.3} stepSize={0.1} iconSize={50}>
                                <SiCplusplus size={50}/>
                                <SiPython size={50}/>
                                <SiMysql size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.4} text="Other" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.4} stepSize={0.1} iconSize={50}>
                                <SiGithub size={50}/>
                                <SiGit size={50}/>
                                <SiOpencv size={50}/>
                                <SiOpenai size={50}/>
                                <SiYolo size={50}/>
                            </AnimatedTools>
                        </div>
                    </div>
                </div>




            </div> */}

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={""}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">

                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <AnimatedBody delay={0.2} text="Social Media" />
                        <div>
                            <AnimatedTools className="grid grid-cols-5 gap-4" delay={0.2} stepSize={0.1} iconSize={50}>
                                <a href={`mailto:${email}`}>
                                    <SiGmail size={50} />
                                </a>
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                    <SiGithub size={50} />
                                </a>
                                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                                    <SiLinkedin size={50} />
                                </a>
                                <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                                    <SiInstagram size={50} />
                                </a>


                            </AnimatedTools>
                        </div>
                    </div>

                </div>




            </div>
        </section>
    );
};

export default Tools;
