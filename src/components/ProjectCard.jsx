import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase, FaCode } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="bg-blue-600 text-white p-4">
        <h3 className="text-xl font-semibold">{project.project_name || project.title}</h3>
        <p className="text-blue-100">{project.company}</p>
      </div>
      
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
          {project.period && (
            <div className="flex items-center">
              <FaCalendarAlt className="mr-1 text-blue-600" />
              <span>{project.period}</span>
            </div>
          )}
          
          {project.location && (
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-1 text-blue-600" />
              <span>{project.location}</span>
            </div>
          )}
          
          {project.type && (
            <div className="flex items-center">
              <FaBriefcase className="mr-1 text-blue-600" />
              <span>{project.type}</span>
            </div>
          )}
        </div>
        
        {project.project_description && (
          <p className="text-gray-700 mb-4">{project.project_description}</p>
        )}
        
        {project.team_size && (
          <p className="text-sm text-gray-600 mb-4">Équipe: {project.team_size}</p>
        )}
        
        {project.responsibilities && project.responsibilities.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-gray-800 mb-2">Responsabilités:</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}
        
        {project.technologies && project.technologies.length > 0 && (
          <div>
            <div className="flex items-center mb-2">
              <FaCode className="mr-2 text-blue-600" />
              <h4 className="font-medium text-gray-800">Technologies:</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;