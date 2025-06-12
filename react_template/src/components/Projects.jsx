import React from "react";
import ProjectCard from "./ProjectCard";
import { portfolioData } from "../data/portfolioData";

const Projects = () => {
  const { experiences } = portfolioData;
  
  // Filter experiences to get only project-related ones
  const projects = experiences.filter(exp => 
    exp.project_name || (exp.responsibilities && exp.responsibilities.length > 0)
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Projets</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Découvrez mes projets professionnels et personnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;