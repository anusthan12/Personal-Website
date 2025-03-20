import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React, { useState } from "react";
import {SiGithub} from "react-icons/si";
import {BsLink45Deg} from "react-icons/bs";

const ProjectCard = ({
    id,
    name,
    description,
    technologies,
    techNames,
    techLinks,
    github,
    demo,
    image,
    available,
}: ProjectProps) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <motion.div
            className={`relative bg-cover bg-no-repeat bg-center z-10 h-[300px] w-full items-stretch justify-center py-0 sm:h-[320px] md:h-[330px] lg:h-[340px] transition-all duration-300 ease-in-out ${isHovered ? 'scale-[1.02] shadow-xl' : ''}`}
            initial="initial"
            animate="animate"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Container
                width="100%"
                height="100%"
                borderRadius={25}
                color={isHovered ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)"}
                blur={false}
                grain={true}
                top="0px"
                left="0px"
                angle={0}
            >
                {/* Card Content */}
                <div className="flex flex-col h-full w-full relative p-4 md:p-6">
                    {/* Project Title and Description - always on the left */}
                    <div className="z-10 max-w-[50%] pr-2 flex flex-col">
                        <AnimatedTitle
                            text={name}
                            className={
                                "text-[24px] leading-tight text-white sm:text-[26px] md:text-[28px] lg:text-[30px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"-mr-[0.01em]"}
                        />
                        <AnimatedBody
                            text={description}
                            className={
                                "mt-2 text-[12px] font-medium text-[#95979D] sm:text-[13px] lg:text-[14px] pr-2"
                            }
                        />
                        
                        {/* Technologies - stack at the bottom left */}
                        <div className="mt-auto pt-4 grid grid-cols-5 gap-2 max-w-[220px]">
                            {technologies.map((IconComponent, idx) => (
                                <div key={idx} className="relative">
                                    <Link
                                        href={techLinks[idx]}
                                        target="_blank"
                                        aria-label={`Learn more about ${techNames[idx]}`}
                                        className="w-[16px] text-[16px] md:w-[18px] md:text-[18px] lg:w-[20px] lg:text-[20px] transition-transform duration-200 hover:scale-110"
                                        title={techLinks[idx]}
                                        data-blobity-tooltip={techNames[idx]}
                                        data-blobity-magnetic="false"
                                    >
                                        <IconComponent/>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Action Links - always at top right */}
                    {available && (
                        <div className="absolute top-4 right-4 flex items-center justify-center gap-2 z-10">
                            <Link
                                href={github}
                                target="_blank"
                                aria-label="Open GitHub Repository"
                                className="flex items-center justify-center rounded-full bg-white p-2 aspect-square w-[32px] md:w-[36px] lg:w-[40px] text-[16px] md:text-[18px] lg:text-[20px] text-[#0E1016] transition-transform duration-200 hover:scale-110"
                                data-blobity
                                data-blobity-radius="35"
                                data-blobity-offset-x="4"
                                data-blobity-offset-y="4"
                                data-blobity-magnetic="false"
                            >
                                <SiGithub />
                            </Link>
                            <Link
                                href={demo}
                                target="_blank"
                                aria-label="Visit Live Demo"
                                className="flex items-center justify-center rounded-full bg-white p-2 aspect-square w-[32px] md:w-[36px] lg:w-[40px] text-[16px] md:text-[18px] lg:text-[20px] text-[#0E1016] transition-transform duration-200 hover:scale-110"
                                data-blobity
                                data-blobity-radius="35"
                                data-blobity-offset-x="4"
                                data-blobity-offset-y="4"
                                data-blobity-magnetic="false"
                            >
                                <BsLink45Deg/>
                            </Link>
                        </div>
                    )}
                    
                    {/* Project Image - always at bottom right, larger size */}
                    <div className={`absolute bottom-0 right-0 w-[50%] h-[75%] flex items-end justify-end overflow-hidden transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
                        <Image
                            src={image}
                            alt={name}
                            width={500}
                            height={500}
                            className="object-contain max-h-full"
                            priority={true}
                        />
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default ProjectCard;