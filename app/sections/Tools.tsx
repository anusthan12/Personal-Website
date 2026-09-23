/* eslint-disable import/named */
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
    , SiLinkedin, SiInstagram, SiCodepen, SiNodedotjs, SiSwagger, SiGitlab, SiJira
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
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-16 lg:pb-40"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text="Professional Experience"
                    className="mb-4 text-left text-[32px] font-bold tracking-tighter text-[#e4ded7] sm:text-[36px] md:mb-6 md:text-[48px] lg:text-[64px]"
                    wordSpace="mr-[10px]"
                    charSpace="mr-[0.001em]"
                />

                <div className="mx-auto flex w-full flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-full flex-col gap-1 text-[14px] font-medium text-[#e4ded7] md:mb-4 md:gap-2 md:text-[16px] lg:mb-6 lg:max-w-[90%] lg:text-[18px]">
                        <AnimatedBody text="QUALITY BIT SOLUTIONS" />
                        <AnimatedBody delay={0.1} text="Business Operations & Technology Manager | Mar 2025 - Jul 2026 | Nagpur, India" />
                        <AnimatedBody
                            delay={0.2}
                            text="Worked across business operations, technology, and supply-chain management for a family-run distribution business. I helped modernise day-to-day operations through digital systems and process improvements, while expanding the supplier base fivefold and contributing to 200% growth in sales. I also helped streamline logistics, reducing related costs by 20%, and introduced better customer and operational tracking to support continued growth."
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <div className="mx-auto flex w-full flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-full flex-col gap-1 text-[14px] font-medium text-[#e4ded7] md:mb-4 md:gap-2 md:text-[16px] lg:mb-6 lg:max-w-[90%] lg:text-[18px]">
                        <AnimatedBody text="STRALTO GLOBAL" />
                        <AnimatedBody delay={0.1} text="Sep 2023 - Feb 2025" />

                        <AnimatedBody delay={0.2} text="• Junior React Developer" />
                        <AnimatedBody
                            delay={0.25}
                            text="Contributed to CivicPlan and Parikrama, two technology products serving public-sector and community needs. I worked across mobile applications, administration systems, mapping, security, and workflow improvements, helping make complex processes faster and easier to manage."
                        />

                        <AnimatedBody delay={0.3} text="• Developer Intern" />
                        <AnimatedBody
                            delay={0.35}
                            text="Worked on CivicPlan as it evolved into a larger government-facing platform, contributing to product development, system improvements, and features designed for high-volume application processing."
                        />

                        <AnimatedBody delay={0.4} text="• React.js & ML Trainee" />
                        <AnimatedBody
                            delay={0.45}
                            text="Developed a computer-vision security prototype for automated threat detection and real-time alerts using machine learning."
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <div className="mx-auto flex w-full flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-full flex-col gap-1 text-[14px] font-medium text-[#e4ded7] md:mb-4 md:gap-2 md:text-[16px] lg:mb-6 lg:max-w-[90%] lg:text-[18px]">
                        <AnimatedBody text="HIGHRADIUS" />
                        <AnimatedBody delay={0.1} text="Product & Engineering Intern | May 2023 - Aug 2023" />
                        <AnimatedBody
                            delay={0.2}
                            text="Built a data-processing solution for B2B workflows, combining software development with machine-learning techniques to improve efficiency and reduce manual work."
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text="Leadership Experience"
                    className="mt-10 mb-4 text-left text-[32px] font-bold tracking-tighter text-[#e4ded7] sm:text-[36px] md:mb-6 md:text-[48px] lg:text-[64px]"
                    wordSpace="mr-[10px]"
                    charSpace="mr-[0.001em]"
                />

                <div className="mx-auto flex w-full flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-full flex-col gap-1 text-[14px] font-medium text-[#e4ded7] md:mb-4 md:gap-2 md:text-[16px] lg:mb-6 lg:max-w-[90%] lg:text-[18px]">
                        <AnimatedBody
                            delay={0.1}
                            text="• Technical Mentor, Stralto Global: Trained 3 interns in full-stack development with 100% conversion to paid roles; created documentation reducing onboarding time by 80%"
                        />
                        <AnimatedBody
                            delay={0.2}
                            text="• Recognition: Received 'Rising Star' award (September 2024); participated in leadership development with C-suite executives"
                        />
                        <AnimatedBody
                            delay={0.3}
                            text="• Project Contribution: 30% contribution to Parikrama development team; 25% overall project contribution in CivicPlan"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text="Technical Skills"
                    className="mt-10 mb-4 text-left text-[32px] font-bold tracking-tighter text-[#e4ded7] sm:text-[36px] md:mb-6 md:text-[48px] lg:text-[64px]"
                    wordSpace="mr-[10px]"
                    charSpace="mr-[0.001em]"
                />
                <div className="mx-auto w-full lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-full flex-col gap-4 text-[14px] font-bold text-[#e4ded7] md:mb-16 md:gap-6 md:text-[24px] lg:mb-16 lg:w-full">
                        <AnimatedBody delay={0.1} text="Frontend" />
                        <div className="grid grid-cols-5 gap-4">
                            <SiJavascript size={40} />
                            <SiReact size={40} />
                            <SiTypescript size={40} />
                            <SiBootstrap size={40} />
                        </div>

                        <AnimatedBody delay={0.3} text="Backend & Database" />
                        <div className="grid grid-cols-5 gap-4">
                            <SiNodedotjs size={40} />
                            <SiMysql size={40} />
                            <SiPython size={40} />
                            <SiSwagger size={40} />
                        </div>

                        <AnimatedBody delay={0.5} text="AI & ML" />
                        <div className="grid grid-cols-5 gap-4">
                            <SiYolo size={40} />
                            <SiOpencv size={40} />
                            <SiOpenai size={40} />
                        </div>

                        <AnimatedBody delay={0.7} text="Tools & Platforms" />
                        <div className="grid grid-cols-5 gap-4">
                            <SiGit size={40} />
                            <SiGithub size={40} />
                            <SiGitlab size={40} />
                            <SiJira size={40} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text="Connect With Me"
                    className="mt-10 mb-4 text-left text-[32px] font-bold tracking-tighter text-[#e4ded7] sm:text-[36px] md:mb-6 md:text-[48px] lg:text-[64px]"
                    wordSpace="mr-[10px]"
                    charSpace="mr-[0.001em]"
                />
                <div className="mx-auto w-10/12 lg:max-w-[500px] justify-center">
                    <div className="mb-10 flex w-full flex-col gap-4 text-[14px] font-bold text-[#e4ded7] md:mb-16 md:gap-6 md:text-[24px] lg:mb-16 lg:w-full">
                        <div className="grid grid-cols-5 gap-4">
                            <a href={`mailto:${email}`} className="hover:opacity-75 transition-opacity">
                                <SiGmail size={40} />
                            </a>
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                <SiGithub size={40} />
                            </a>
                            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                <SiLinkedin size={40} />
                            </a>
                            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                <SiInstagram size={40} />
                            </a>
                            <a href={codepenUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                                <SiCodepen size={40} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
