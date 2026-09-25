import NgoCard from "./NgoCard";
import { ngoWork, NgoProps } from "./ngoDetails";
import AnimatedTitle from "../../animations/AnimatedTitle";
import React from "react";

const NgoGrid = () => {
    return (
        <>
            <div className="mb-8 md:mb-10 lg:mb-12 px-4">
                <AnimatedTitle
                    text="NGO & Volunteer Work"
                    className="mt-10 mb-4 text-left text-[32px] font-bold tracking-tighter text-[#e4ded7] sm:text-[36px] md:mb-6 md:text-[48px] lg:text-[64px]"
                    wordSpace="mr-[10px]"
                    charSpace="mr-[0.001em]"
                />
            </div>

            <div className="grid w-[95%] mx-auto grid-cols-1 gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 lg:max-w-[1200px]">
                {ngoWork.map((ngo: NgoProps) => (
                    <NgoCard key={ngo.id} {...ngo} />
                ))}
            </div>
        </>
    );
};

export default NgoGrid;
