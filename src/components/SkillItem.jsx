import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-gray-900">{skill.name}</h4>
        {skill.details && (
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            Expert
          </span>
        )}
      </div>
      {skill.details && (
        <p className="text-sm text-gray-600 mt-1">{skill.details}</p>
      )}
    </div>
  );
};

export default SkillItem;