import React from "react";
import { FaArrowDown, FaLaptopCode, FaUserCheck } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const Hero = () => {
  const { personal_info } = portfolioData;

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {personal_info.name}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-blue-700 mb-6">
                {personal_info.title}
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
                {personal_info.about}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href="#about" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 flex items-center gap-2"
                >
                  Découvrir mon profil
                </a>
                <a 
                  href="#projects" 
                  className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition duration-300 flex items-center gap-2"
                >
                  Voir mes projets
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-5xl text-blue-700 font-bold">RB</span>
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaLaptopCode className="text-blue-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Développeur Fullstack</h3>
                    <p className="text-sm text-gray-500">Java Spring Boot, Angular, React</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaUserCheck className="text-blue-700" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Testeur Logiciel</h3>
                    <p className="text-sm text-gray-500">Cypress, Postman, JUnit</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="#about" className="text-blue-600 flex items-center justify-center gap-2 hover:text-blue-800">
                  En savoir plus <FaArrowDown className="animate-bounce" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;