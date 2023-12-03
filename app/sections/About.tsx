import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"ALL IT STARTS WITH A DREAM."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Ciao, I'm Anusthan Singh, a developer with a passion for crafting software and web solution. I excel in experimenting with emerging technologies." />

                        <AnimatedBody
                            delay={0.1}
                            text="I actively contribute to the community, recognizing the importance of knowledge-sharing. My journey in the digital sphere has been distinguished by a strong interest in web development technology and artificial intelligence. Join me on this thrilling journey as I turn zeros and ones into captivating ideas, embracing the harmonious combination of creativity and technology."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="A seasoned developer with 52+ repositories and 2,240+ profile views on GitHub"
                        />
                    </div>
                    
                </div>
                
            </div>

            


            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] ">
                <a href="https://drive.google.com/file/d/1STsvWsVhFE_rZph2V6CAix7n29s73Txz/view?usp=sharing" download target="_blank" rel="noreferrer">
        Download Resume
                </a>
            </div>


        </section>
    );
};

export default About;
