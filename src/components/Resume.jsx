import React from "react";
import { FaFileDownload, FaFilePdf } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">CV</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Téléchargez mon CV complet pour plus de détails sur mon parcours
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-lg w-full text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <FaFilePdf className="text-blue-600 text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Curriculum Vitae</h3>
            <p className="text-gray-600 mb-6">
              Mon CV détaille mon parcours professionnel, mes compétences techniques 
              et mes formations. Téléchargez-le pour une vue complète de mon profil.
            </p>
            <div className="flex justify-center">
              <a 
                href="/Rbiad_CV.pdf" 
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                <FaFileDownload className="mr-2" /> Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;