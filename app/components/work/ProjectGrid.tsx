import ProjectCard from "./ProjectCard";
import {projects, ProjectProps} from "./projectDetails";
import React from "react";

const ProjectGrid = () => {
    return (
        <>
            <div className="mb-8 md:mb-10 lg:mb-12 px-4">
                <h4 className="text-[16px] md:text-[20px] lg:text-[28px] text-[#e4ded7]">
                    Check out some of my work!
                </h4>
            </div>

            <div className="grid w-[95%] mx-auto grid-cols-1 gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 lg:max-w-[1200px]">
                {projects.map((project: ProjectProps) => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        technologies={project.technologies}
                        techNames={project.techNames}
                        techLinks={project.techLinks}
                        github={project.github}
                        demo={project.demo}
                        image={project.image}
                        available={project.available}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectGrid;