/* eslint-disable import/named */
import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-16 lg:pb-20"
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
                            text="Contributed to CivicPlan and Parikrama, two technology products serving public-sector and community needs. I worked across mobile applications, administration systems, mapping, security, and workflow improvements, while also mentoring three interns in full-stack development and creating documentation that reduced onboarding time by 70%. I received the Rising Star award and participated in leadership development with C-suite executives."
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
                    text="Technical Skills"
                    className="mt-10 mb-4 text-left text-[32px] font-bold tracking-tighter text-[#e4ded7] sm:text-[36px] md:mb-6 md:text-[48px] lg:text-[64px]"
                    wordSpace="mr-[10px]"
                    charSpace="mr-[0.001em]"
                />
                <div className="mx-auto w-full lg:max-w-[1200px] justify-center">
                    <div className="flex w-full flex-col gap-4 text-[14px] font-medium text-[#e4ded7] md:gap-3 md:text-[18px] lg:w-full">
                        <div>
                            <AnimatedBody delay={0.1} text="Technology" />
                            <AnimatedBody
                                delay={0.15}
                                text="React · React Native · TypeScript · JavaScript · Node.js · Express.js · Python · Java · Bootstrap · Tailwind CSS · JSON"
                            />
                        </div>

                        <div>
                            <AnimatedBody delay={0.3} text="Data, AI & Computer Vision" />
                            <AnimatedBody
                                delay={0.35}
                                text="Machine Learning · NumPy · Pandas · OpenCV · YOLO"
                            />
                        </div>

                        <div>
                            <AnimatedBody delay={0.5} text="Databases, Cloud & Systems" />
                            <AnimatedBody
                                delay={0.55}
                                text="MySQL · Oracle · Azure · Linux · Git"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
