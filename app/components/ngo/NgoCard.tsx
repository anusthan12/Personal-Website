import { NgoProps } from "./ngoDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React, { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

const NgoCard = ({
    name,
    role,
    description,
    links,
    image,
    available,
}: NgoProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imgError, setImgError] = useState(false);

    const getIcon = (href: string) => {
        if (href.includes("linkedin") || href.includes("lnkd.in")) {
            return <SiLinkedin />;
        }
        return <BsLink45Deg />;
    };

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
                <div className="flex flex-col h-full w-full relative p-4 md:p-6">
                    {/* Name, role, description */}
                    <div className="z-10 max-w-[55%] pr-2 flex flex-col">
                        <AnimatedTitle
                            text={name}
                            className={
                                "text-[22px] leading-tight text-white sm:text-[24px] md:text-[26px] lg:text-[28px]"
                            }
                            wordSpace={"mr-[0.25em]"}
                            charSpace={"-mr-[0.01em]"}
                        />
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#c9b8f0] sm:text-[12px]">
                            {role}
                        </p>
                        <AnimatedBody
                            text={description}
                            className={
                                "mt-2 text-[11px] font-medium text-[#95979D] sm:text-[12px] lg:text-[13px] pr-2 overflow-y-auto"
                            }
                        />
                    </div>

                    {/* Link icons, top right — only if available */}
                    {available && links.length > 0 && (
                        <div className="absolute top-4 right-4 flex items-center justify-center gap-2 z-10">
                            {links.map((l, idx) => (
                                <Link
                                    key={idx}
                                    href={l.href}
                                    target="_blank"
                                    aria-label={l.label}
                                    className="flex items-center justify-center rounded-full bg-white p-2 aspect-square w-[32px] md:w-[36px] lg:w-[40px] text-[16px] md:text-[18px] lg:text-[20px] text-[#0E1016] transition-transform duration-200 hover:scale-110"
                                    data-blobity
                                    data-blobity-radius="35"
                                    data-blobity-offset-x="4"
                                    data-blobity-offset-y="4"
                                    data-blobity-magnetic="false"
                                    title={l.label}
                                >
                                    {getIcon(l.href)}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Image, bottom right — reduced fixed size, padded so it doesn't dominate the card */}
                    <div className={`absolute bottom-3 right-3 w-[38%] h-[55%] md:w-[36%] md:h-[52%] flex items-end justify-end overflow-hidden transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}>
                        {!imgError ? (
                            <Image
                                src={image}
                                alt={name}
                                width={320}
                                height={320}
                                className="object-contain max-h-full max-w-full"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="w-full h-full rounded-[16px] bg-white/5" />
                        )}
                    </div>
                </div>
            </Container>
        </motion.div>
    );
};

export default NgoCard;
