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
    SiOpenai, SiOpencv, SiClaude, SiReact, SiGmail, SiTypescript, SiWebstorm, SiHtml5, SiPython
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
                        <AnimatedBody text="STRALTO GLOBAL - Nagpur, India" />
                        <AnimatedBody delay={0.1} text="Junior React Developer | June 2024 - February 2025" />

                        <AnimatedBody delay={0.2} text="Parikrama (Temple Management System):" />
                        <AnimatedBody
                            delay={0.25}
                            text="• Built app with admin panel and common backend; implemented AsyncStorage login flow reducing API hits by 40%"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Developed Login flow, homepage, community social media page with integrated SOS alert management on custom map"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Created reusable components improving rendering speed by 30%"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Implemented waypoint update system with admin creation reducing manual data entry by 30%"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Impact: Decreased overall manual processing by 40%; solution approved by Madhya Pradesh CM for 2025 launch"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Technologies: React Native TSX, React JSX, Node.js, MySQL, AsyncStorage, Postman, Custom OSM Map, Swagger, Winston"
                        />

                        <AnimatedBody delay={0.3} text="CivicPlan (GovTech Platform) - Security Enhancement:" />
                        <AnimatedBody
                            delay={0.35}
                            text="• Upgraded to RS512 JWT encryption with 32-bit SSH key following cybersecurity audits"
                        />
                        <AnimatedBody
                            delay={0.35}
                            text="• Added password suggestion, JS cookie utility, and error pages for unauthorized access"
                        />
                        <AnimatedBody
                            delay={0.35}
                            text="• Implemented Helmet for improved content handling, validated Azure Blob Storage to prevent external API interference"
                        />
                        <AnimatedBody
                            delay={0.35}
                            text="• Impact: Reduced security vulnerabilities by 30%, strengthening government deployment reliability"
                        />
                        <AnimatedBody
                            delay={0.35}
                            text="• Technologies: React TSX, Node.js, Bootstrap, MySQL, Azure Blob Storage"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <div className="mx-auto flex w-full flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-full flex-col gap-1 text-[14px] font-medium text-[#e4ded7] md:mb-4 md:gap-2 md:text-[16px] lg:mb-6 lg:max-w-[90%] lg:text-[18px]">
                        <AnimatedBody text="STRALTO GLOBAL - Nagpur, India" />
                        <AnimatedBody delay={0.1} text="Developer Intern | December 2023 - May 2024" />

                        <AnimatedBody delay={0.2} text="CivicPlan (GovTech Platform):" />
                        <AnimatedBody
                            delay={0.25}
                            text="• Contributed full-stack development of citizen-government interaction portal with 35% faster rendering via component optimization"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Engineered frontend and backend for landing page, admin panel (login attempt dashboards, application ID generator, and user role privileges), and user payment module"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Implemented automated API documentation (Swagger), logging systems (Winston), and database triggers (MySQL)"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Built cron utilities to remove outdated files after specified usage periods"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Impact: Platform adopted by Maharashtra governments processing 10k+ applications per client; reduced processing time from 15 to 9 days average; cut debugging time by 25 hours/month"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Technologies: React 18, TypeScript, Node.js (MVC), Bootstrap, MySQL, Azure Blob Storage"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <div className="mx-auto flex w-full flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-full flex-col gap-1 text-[14px] font-medium text-[#e4ded7] md:mb-4 md:gap-2 md:text-[16px] lg:mb-6 lg:max-w-[90%] lg:text-[18px]">
                        <AnimatedBody text="STRALTO GLOBAL - Nagpur, India" />
                        <AnimatedBody delay={0.1} text="React.js and ML Intern | September 2023 - November 2023" />

                        <AnimatedBody delay={0.2} text="Project Sentinel (AI Security System):" />
                        <AnimatedBody
                            delay={0.25}
                            text="• Created pilot models for threat detection focused on fire detection, weapon detection, and population alarm systems"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Achieved 90% weapon detection accuracy with admin alert delivery in under 1 minute"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Presented project at SSGMCE College in Shegaon, Maharashtra for beta testing approval"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Technologies: Python, Machine Learning, YOLOv3 models, React 18, Bootstrap, Node.js"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <div className="mx-auto flex w-full flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-full flex-col gap-1 text-[14px] font-medium text-[#e4ded7] md:mb-4 md:gap-2 md:text-[16px] lg:mb-6 lg:max-w-[90%] lg:text-[18px]">
                        <AnimatedBody text="HighRadius Corporation - Bhubaneswar, India" />
                        <AnimatedBody delay={0.1} text="Product & Engineering Intern | May 2023 - August 2023" />

                        <AnimatedBody
                            delay={0.25}
                            text="• Engineered ML-driven B2B data filtering application, improving processing efficiency by 10% over legacy systems"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Integrated React dashboard with Java servlets, streamlining cross-team workflows"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Developed service-specific agents primarily for API services"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Technologies: Python, Machine Learning, React JS, Java, JIRA, GitLab"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <div className="mx-auto flex w-full flex-col lg:max-w-[1400px] lg:flex-row lg:gap-6">
                    <div className="mb-2 flex w-full flex-col gap-1 text-[14px] font-medium text-[#e4ded7] md:mb-4 md:gap-2 md:text-[16px] lg:mb-6 lg:max-w-[90%] lg:text-[18px]">
                        <AnimatedBody text="Quality Bit Solutions (Family Business) - Nagpur, India" />
                        <AnimatedBody delay={0.1} text="Operations & Tech Lead | 2023 - Present" />

                        <AnimatedBody
                            delay={0.25}
                            text="• Scaled vendor network from 10 to 50, driving 200% sales growth and achieving 6× sales-to-investment ratio"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Optimized supply chain routes, reducing logistics costs by 20%"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Implemented CRM tools and company website, enhancing customer retention by 25%"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Established efficient email communication system and business cards"
                        />
                        <AnimatedBody
                            delay={0.25}
                            text="• Impact: Established operational framework supporting expansion strategy"
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
