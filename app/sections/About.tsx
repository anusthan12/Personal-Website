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
                    text={"Hi, I’m Anusthan Singh."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="Technology. Business Operations. International Management." />

                        <AnimatedBody
                            delay={0.1}
                            text="I’m a technology and business professional with experience across software development, IoT, and business operations. I’m currently pursuing a Master’s in International Management at ESADE Business School in Barcelona, building on my engineering background to move toward Tech-Driven Business Leadership."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="My work sits at the intersection of technology and business, from building digital products and smart infrastructure solutions to improving operations, supply chains, and business processes."
                        />

                        <AnimatedBody
                            delay={0.3}
                            text="Now: ESADE Business School · MSc in International Management '27"
                        />

                        <AnimatedBody
                            delay={0.4}
                            text="Previously: Quality Bit Solutions · Stralto Global · HighRadius"
                        />

                        <AnimatedBody
                            delay={0.5}
                            text="Alumni: KIIT · B.Tech in Computer Science & Engineering '24"
                        />
                    </div>
                    
                </div>
                
            </div>

            


            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px] ">
                <a href="https://drive.google.com/file/d/1WIRlTy8NTylBJG5paZjNk5FmbQHw3tp3/view?usp=sharing" download target="_blank" rel="noreferrer">
        Download Resume
                </a>
            </div>


        </section>
    );
};

export default About;
