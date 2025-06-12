import React from "react";
import SkillItem from "./SkillItem";
import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { id: "backend", title: "Backend", icon: "💻" },
    { id: "frontend", title: "Frontend", icon: "🎨" },
    { id: "database", title: "Base de données", icon: "🗄️" },
    { id: "testing", title: "Testing", icon: "🔍" },
    { id: "devops", title: "DevOps & Outils", icon: "⚙️" },
    { id: "methodologies", title: "Méthodologies", icon: "📋" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Compétences</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Mes compétences techniques et outils dans le développement logiciel et le testing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-600 text-white p-4 flex items-center">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="p-5">
                <div className="space-y-3">
                  {skills[category.id]?.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Langues</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {portfolioData.languages.map((lang, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800">{lang.language}</h4>
                <p className="text-sm text-gray-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;