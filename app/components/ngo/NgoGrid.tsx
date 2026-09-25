import NgoCard from "./NgoCard";
import { ngoWork, NgoProps } from "./ngoDetails";
import React from "react";

const NgoGrid = () => {
    return (
        <div className="grid w-[95%] mx-auto grid-cols-1 gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 lg:max-w-[1200px]">
            {ngoWork.map((ngo: NgoProps) => (
                <NgoCard key={ngo.id} {...ngo} />
            ))}
        </div>
    );
};

export default NgoGrid;
