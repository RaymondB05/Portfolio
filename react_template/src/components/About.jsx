import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { personal_info, education } = portfolioData;

  return (
    <section className="py-16 bg-white" id="about-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">À Propos</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ingénieur avec un profil hybride en développement fullstack et testing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
              <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                <img src="/assets/images/profile-image.jpg" alt="Rayan Biad" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Qui suis-je ?</h3>
                <p className="text-gray-700">{personal_info.about}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <span className="text-gray-700">{personal_info.location}</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <a href={`mailto:${personal_info.email}`} className="text-gray-700 hover:text-blue-600">
                  {personal_info.email}
                </a>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <FaPhone className="text-blue-600" />
                </div>
                <span className="text-gray-700">{personal_info.phone}</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <FaLinkedin className="text-blue-600" />
                </div>
                <a 
                  href={`https://www.linkedin.com/in/${personal_info.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                >
                  linkedin.com/in/{personal_info.linkedin}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Formation</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4 py-1">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                    <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-700">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;