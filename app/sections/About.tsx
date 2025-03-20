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
                        <AnimatedBody text="Ciao, I'm Anusthan Singh, a passionate full-stack developer who loves turning complex ideas into real-world solutions. During my time at Stralto Global, I built GovTech platforms implemented by local governments and a temple management system helping thousands of pilgrims. Our security upgrades and architectural improvements boosted efficiency by nearly 30%" />

                        <AnimatedBody
                            delay={0.1}
                            text="What I'm most proud of is helping others grow. I've mentored junior developers, created documentation that streamlined onboarding, and was recognized as a `Rising Star` with opportunities to participate in leadership workshops with company executives. These experiences taught me that technical skills and people skills go hand in hand.!"
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="On the academic front, I published an IEEE paper on IoT optimization and filed a patent for a water management system while graduating from KIIT University with an 8.69 CGPA. I'm always eager to take on new challenges that combine innovation with real business impact!"
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