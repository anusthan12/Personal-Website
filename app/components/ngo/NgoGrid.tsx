import NgoCard from "./NgoCard";
import { ngoWork, NgoProps } from "./ngoDetails";
import React from "react";

const NgoGrid = () => {
    return (
        <>
            <div className="mb-8 md:mb-10 lg:mb-12 px-4">
                <h4 className="text-[16px] md:text-[20px] lg:text-[28px] text-[#e4ded7]">
                    NGO & Volunteer Work
                </h4>
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
