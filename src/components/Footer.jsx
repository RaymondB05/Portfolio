import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  const { personal_info } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{personal_info.name}</h3>
            <p className="text-gray-300 mb-4">{personal_info.title}</p>
            <p className="text-gray-400">{personal_info.location}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400">Accueil</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400">À Propos</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-blue-400">Compétences</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-blue-400">Projets</a></li>
              <li><a href="#resume" className="text-gray-300 hover:text-blue-400">CV</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-2" />
                <a href={`mailto:${personal_info.email}`} className="text-gray-300 hover:text-blue-400">
                  {personal_info.email}
                </a>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-blue-400 mr-2" />
                <a 
                  href={`https://www.linkedin.com/in/${personal_info.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-blue-400"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-blue-400 mr-2" />
                <a 
                  href="https://github.com/rbiad"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-blue-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {currentYear} {personal_info.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;